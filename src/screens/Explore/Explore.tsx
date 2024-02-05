import React, { useState } from 'react';
import { Box, Button } from '@src/components';
import { ExploreProps } from './Explore.type';
import { useScrollToTop } from '@react-navigation/native';
import MillicastWidgetPublisher from './MillicastWidgetPublisher';
import MillicastWidgetViewer from './MillicastWidgetViewer';
import axios from 'axios';
import { generateRandomString } from '@src/utils/random-string';

export const Explore: React.FC<ExploreProps> = ({}) => {
  const ref = React.useRef(null);
  const [dolbyData, setDoldyData] = useState<{
    token: string;
    streamName: string;
  }>();
  useScrollToTop(ref);
  const startStream = async () => {
    console.log(
      '******  ******',
      `http://192.168.1.2:5000/api/dolby/token/${generateRandomString(
        10,
      )}/${generateRandomString(10)}`,
    );

    const dolby = await axios.get(
      `http://192.168.1.2:5000/api/dolby/token/${generateRandomString(
        10,
      )}/${generateRandomString(10)}`,
    );

    console.log('****** tok ******', dolby.data.data.token);
    console.log('****** tok ******', dolby.data.data.streams[0].streamName);
    setDoldyData({
      streamName: dolby.data.data.streams[0].streamName,
      token: dolby.data.data.token,
    });
  };

  const sendDolyData = async () => {
    await axios.post('http://192.168.1.2:5000/api/conversation/create', {
      streamName: dolbyData?.streamName,
      accountId: 'JZac6x',
    });
  };

  return (
    <Box flex={1}>
      <Button label="Start Stream" onPress={startStream} />
      <Button label="Send dolby data" onPress={sendDolyData} />
      {!dolbyData ? (
        <></>
      ) : (
        <>
          <MillicastWidgetPublisher
            streamName={dolbyData.streamName}
            token={dolbyData.token}
          />
          <MillicastWidgetViewer
            accountID="JZac6x"
            streamName={dolbyData.streamName}
          />
        </>
      )}
    </Box>
  );
};
