import {
  useCallback, useEffect, useState, useMemo,
} from 'react';
import { sensorAService } from '../services';

const SensorA = () => {
  const sms = useMemo(() => [
    'Sensor A',
    'Hello, Nicolas',
    'This is Sensor A Test 1',
    'This is Sensor A Test 2',
    'This is Sensor A Test 3',
  ], []);

  const [time, setTime] = useState(200);
  const sendMessage = (sms) => {
    sensorAService.sendMessage(sms);
  };

  const randomMessage = useCallback(() => {
    setTimeout(() => {
      const text = sms[Math.floor(Math.random() * 10)];
      if (text) sendMessage(text);
      setTime(Math.floor(Math.random() * 1000) + 200 + Math.floor(Math.random() * 300));
    }, time);
  }, [time, sms]);

  useEffect(() => {
    randomMessage();
  }, [randomMessage]);

  return <></>;
};
export default SensorA;
