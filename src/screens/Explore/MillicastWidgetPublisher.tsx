import { Director, Publish, PublishConnectOptions } from '@millicast/sdk';
import { Box, Button } from '@src/components';
import React, { useState } from 'react';
import { MediaStream, RTCView, mediaDevices } from 'react-native-webrtc';

interface IMillicastWidgetPublisher {
  streamName: string;
  token: string;
}

const MillicastWidgetPublisher: React.FC<IMillicastWidgetPublisher> = (
  props,
) => {
  const { streamName, token } = props;
  let millicastPublish: Publish;
  const [mediaStream, setMediaStream] = useState<MediaStream>();
  const [stream, setStream] = useState<MediaStream>();

  const startLive = async () => {
    if (!mediaStream) {
      try {
        const userMedia = await mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            frameRate: { ideal: 30 },
            facingMode: 'environment',
          },
          audio: true,
        });

        const tokenGenerator = () =>
          Director.getPublisher({
            token,
            streamName,
          });
        millicastPublish = new Publish(streamName, tokenGenerator);
        console.log('****** millicastPublish ******', millicastPublish);

        setStream(userMedia);
        setMediaStream(userMedia);
        const broadcastOptions: PublishConnectOptions = {
          mediaStream: userMedia,
          codec: 'vp8',
        };

        await millicastPublish.connect(broadcastOptions);
      } catch (error) {
        console.log('****** error ******', error);
      }
    }
  };

  const stopLive = async () => {
    millicastPublish?.stop();
    mediaStream?.release();
    stream?.release();
    setMediaStream(undefined);
    setStream(undefined);
  };

  const switchCamera = () => {
    stream?.getVideoTracks().forEach((track) => {
      track._switchCamera();
    });
  };

  return (
    <Box flex={1} backgroundColor={'danger'}>
      {stream ? (
        <RTCView
          streamURL={stream.toURL()}
          style={{ width: '100%', height: '100%' }}
          objectFit="contain"
        />
      ) : null}
      <Box style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Button label="Start Live" onPress={startLive} />
        <Button label="Stop live" onPress={stopLive} />
        <Button label="Switch camera" onPress={switchCamera} />
      </Box>
    </Box>
  );
};

export default MillicastWidgetPublisher;
