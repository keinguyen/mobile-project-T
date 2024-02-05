import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const MarkAsRead = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / mark as read">
      <G id="icon_24 / mark as read_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L5.5 16.0858L2.70711 13.2929C2.31658 12.9024 1.68342 12.9024 1.29289 13.2929C0.902369 13.6834 0.902369 14.3166 1.29289 14.7071L4.79289 18.2071C5.18342 18.5976 5.81658 18.5976 6.20711 18.2071L14.7071 9.70711ZM22.2071 8.29289C22.5976 8.68342 22.5976 9.31658 22.2071 9.70711L13.7071 18.2071C13.3165 18.5976 12.6834 18.5976 12.2928 18.2071L10.0428 15.9571L11.4571 14.5429L13 16.0858L20.7928 8.29289C21.1834 7.90237 21.8165 7.90237 22.2071 8.29289Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default MarkAsRead;
