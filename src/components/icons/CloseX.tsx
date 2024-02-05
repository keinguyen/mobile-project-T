import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const CloseX = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / close x">
      <G id="icon_24 / close x_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.91408 4.49992C5.52355 4.1094 4.89039 4.1094 4.49986 4.49992C4.10934 4.89045 4.10934 5.52361 4.49986 5.91414L10.5858 12L4.49986 18.0859C4.10934 18.4764 4.10934 19.1095 4.49986 19.5001C4.89039 19.8906 5.52355 19.8906 5.91408 19.5001L12 13.4142L18.0857 19.4999C18.4763 19.8904 19.1094 19.8904 19.5 19.4999C19.8905 19.1094 19.8905 18.4762 19.5 18.0857L13.4142 12L19.4142 6.00007C19.8047 5.60955 19.8047 4.97638 19.4142 4.58586C19.0236 4.19533 18.3905 4.19533 18 4.58586L12 10.5858L5.91408 4.49992Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default CloseX;
