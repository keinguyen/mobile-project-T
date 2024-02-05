import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const AlertOctagon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / alert-octagon">
      <G id="icon_24 / alert-octagon_2">
        <G id="Icon">
          <Path
            d="M16.1 23H7.9C7.6 23 7.4 22.9 7.2 22.7L1.3 16.8C1.1 16.7 1 16.4 1 16.1V7.9C1 7.6 1.1 7.4 1.3 7.2L7.2 1.3C7.3 1.1 7.6 1 7.9 1H16.2C16.5 1 16.7 1.1 16.9 1.3L22.8 7.2C22.9 7.3 23 7.6 23 7.9V16.2C23 16.5 22.9 16.7 22.7 16.9L16.8 22.8C16.7 22.9 16.4 23 16.1 23ZM8.3 21H15.8L21.1 15.7V8.3L15.7 3H8.3L3 8.3V15.8L8.3 21Z"
            fill={props.color}
          />
          <Path
            d="M12 13C11.4 13 11 12.6 11 12V8C11 7.4 11.4 7 12 7C12.6 7 13 7.4 13 8V12C13 12.6 12.6 13 12 13Z"
            fill={props.color}
          />
          <Path
            d="M12 17C11.7 17 11.5 16.9 11.3 16.7C11.1 16.5 11 16.3 11 16C11 15.9 11 15.7 11.1 15.6C11.2 15.5 11.2 15.4 11.3 15.3C11.6 15 12 14.9 12.4 15.1C12.5 15.1 12.5 15.1 12.6 15.2C12.6 15.2 12.7 15.3 12.8 15.3C12.9 15.4 13 15.5 13 15.6C13 15.7 13 15.9 13 16C13 16.1 13 16.3 12.9 16.4C12.8 16.5 12.8 16.6 12.7 16.7C12.5 16.9 12.3 17 12 17Z"
            fill={props.color}
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default AlertOctagon;
