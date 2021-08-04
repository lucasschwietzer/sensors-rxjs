import {
  useCallback, useEffect, useState, useMemo,
} from 'react';

import { sensorCService } from '../services';

const SensorC = () => {
  const sms = useMemo(() => ['Sensor C', 'Hello, Nicolas', 'This is Sensor C Test 1', 'This is Sensor C Test 2', 'This is Sensor C Test 3'], []);

  const [time, setTime] = useState(200);
  const sendMessage = (sms) => {
    sensorCService.sendMessage(sms);
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

export default SensorC;
