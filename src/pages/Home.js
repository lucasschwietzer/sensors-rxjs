import { useCallback, useEffect, useState } from 'react';

import ViewObject from '../components/ViewObject';
import {
  sensorAService,
  sensorBService,
  sensorCService,
  sensorDService,
} from '../services';
import SensorA from '../components/SensorA';
import SensorB from '../components/SensorB';
import SensorC from '../components/SensorC';
import SensorD from '../components/SensorD';

const Home = () => {
  const [messageA, setMessageA] = useState(null);
  const [messageB, setMessageB] = useState(null);
  const [messageC, setMessageC] = useState(null);
  const [messageD, setMessageD] = useState(null);
  const [canView, setCanView] = useState(false);

  useEffect(() => {
    let t1 = null;
    sensorAService.onMessage().subscribe((message) => {
      if (message) {
        setMessageA(message.text);
        clearTimeout(t1);
        t1 = setTimeout(() => {
          setMessageA('No data');
        }, 1300);
      }
    });
  }, [setMessageA]);

  useEffect(() => {
    let t1 = null;
    sensorBService.onMessage().subscribe((message) => {
      if (message) {
        setMessageB(message.text);
        clearTimeout(t1);
        t1 = setTimeout(() => {
          setMessageB('No data');
        }, 1300);
      }
    });
  }, [setMessageB]);

  useEffect(() => {
    let t1 = null;
    sensorCService.onMessage().subscribe((message) => {
      if (message) {
        setMessageC(message.text);
        clearTimeout(t1);
        t1 = setTimeout(() => {
          setMessageC('No data');
        }, 1300);
      }
    });
  }, [setMessageC]);

  useEffect(() => {
    let t1 = null;
    sensorDService.onMessage().subscribe((message) => {
      if (message) {
        setMessageD(message.text);
        clearTimeout(t1);
        t1 = setTimeout(() => {
          setMessageD('No data');
        }, 1300);
      }
    });
  }, [setMessageD]);

  const checkCanView = useCallback(() => {
    if (messageA && messageB && messageC && messageD) {
      setCanView(true);
    }
  }, [setCanView, messageA, messageB, messageC, messageD]);

  useEffect(() => {
    checkCanView();
  }, [checkCanView]);

  return (
    <div>
      <h1>Sensors with rxjs</h1>
      {canView ? (
        <ViewObject
          messageA={messageA}
          messageB={messageB}
          messageC={messageC}
          messageD={messageD}
        />
      ) : (
        ''
      )}
      <SensorA />
      <SensorB />
      <SensorC />
      <SensorD />
    </div>
  );
};
export default Home;
