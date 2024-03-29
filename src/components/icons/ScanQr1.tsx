import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const ScanQr1 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / scan-qr-1">
      <G id="icon_24 / scan-qr-1_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 2H5C3.34315 2 2 3.34315 2 5V8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8V5C4 4.44772 4.44771 4 5 4H8C8.55229 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2ZM2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16V19C4 19.5523 4.44772 20 5 20H8C8.55229 20 9 20.4477 9 21C9 21.5523 8.55229 22 8 22H5C3.34315 22 2 20.6569 2 19V16ZM21 15C20.4477 15 20 15.4477 20 16V19C20 19.5523 19.5523 20 19 20H16C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22H19C20.6569 22 22 20.6569 22 19V16C22 15.4477 21.5523 15 21 15ZM22 8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5C20 4.44771 19.5523 4 19 4H16C15.4477 4 15 3.55228 15 3C15 2.44772 15.4477 2 16 2H19C20.6569 2 22 3.34315 22 5V8ZM1 11C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H1Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default ScanQr1;
