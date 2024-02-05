import { Box } from '@src/components';
import React, { useEffect, useState } from 'react';
import { RTCView } from 'react-native-webrtc';
import { Director, View as MillicastView } from '@millicast/sdk';

interface IMillicastWidgetViewer {
  streamName: string;
  accountID: string;
}

const MillicastWidgetViewer: React.FC<IMillicastWidgetViewer> = (props) => {
  const { accountID, streamName } = props;
  const [streamURL, setStreamURL] = useState();

  useEffect(() => {
    // Define your subscribe function as an asynchronous function
    async function subscribe(streamName, accountID) {
      console.log(streamName, accountID);
      const tokenGenerator = () =>
        Director.getSubscriber({
          streamName: streamName,
          streamAccountId: accountID,
        });

      const millicastView = new MillicastView(
        streamName,
        tokenGenerator,
        undefined,
      );

      millicastView.on('track', (event) => {
        console.log(`My event is ${event}`);
        const videoUrl = event.streams[0].toURL();
        if (!videoUrl) return null;

        setStreamURL(videoUrl);
      });

      try {
        await millicastView.connect();
      } catch (e) {
        console.log('Connection failed. Reason:', e);
      }
    }

    subscribe(streamName, accountID);
  }, [accountID, streamName]);

  return (
    <Box>
      <RTCView streamURL={streamURL} style={{ width: 480, height: 320 }} />
    </Box>
  );
};

export default MillicastWidgetViewer;
