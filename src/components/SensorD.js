import {
  useCallback, useEffect, useState, useMemo,
} from 'react';

import { sensorDService } from '../services';

const SensorD = () => {
  const sms = useMemo(() => [
    'Sensor D',
    'Hello, Nicolas',
    'This is Sensor D Test 1',
    'This is Sensor D Test 2',
    'This is Sensor D Test 3',
  ], []);

  const [time, setTime] = useState(200);
  const sendMessage = (sms) => {
    sensorDService.sendMessage(sms);
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

export default SensorD;
