import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
const EyeOff = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / eye-off">
      <G id="icon_24 / eye-off_2" clipPath="url(#clip0_118_2305)">
        <G id="Icon">
          <Path
            d="M12 21C4.5 21 0.3 12.8 0.1 12.4C-1.49012e-08 12.1 -1.49012e-08 11.8 0.1 11.5C1.4 9.1 3.2 7 5.5 5.3C5.9 4.9 6.5 5 6.9 5.5C7.2 5.9 7.2 6.6 6.7 6.9C4.8 8.3 3.3 10 2.1 12C3 13.6 6.6 19 12 19C13.9 19 15.8 18.3 17.3 17.1C17.7 16.8 18.4 16.9 18.7 17.3C19 17.7 18.9 18.4 18.5 18.7C16.7 20.2 14.4 21 12 21ZM20.8 16.2C20.6 16.2 20.3 16.1 20.2 16C19.8 15.6 19.7 15 20.1 14.6C20.8 13.8 21.4 13 21.9 12.1C21 10.5 17.4 5.1 12 5.1C11.4 5.1 10.7 5.2 10.1 5.3C9.6 5.3 9.1 5 8.9 4.5C8.7 4 9.1 3.4 9.6 3.3C10.4 3.1 11.2 3 12 3C19.5 3 23.7 11.2 23.9 11.6C24 11.9 24 12.2 23.9 12.5C23.3 13.7 22.5 14.8 21.6 15.9C21.4 16.1 21.1 16.2 20.8 16.2ZM11.9 16.1C10.9 16.1 9.9 15.7 9.2 15C8.4 14.3 8 13.3 7.9 12.2C7.9 11.1 8.2 10.1 9 9.3C9.1 9.2 9.1 9.2 9.2 9.1C9.6 8.7 10.2 8.7 10.6 9.1C11 9.5 11 10.1 10.6 10.5L10.5 10.6C10.1 11 9.9 11.5 10 12C10 12.5 10.2 13 10.6 13.4C11.4 14.2 12.7 14.1 13.4 13.3C13.8 12.9 14.4 12.9 14.8 13.3C15.2 13.7 15.2 14.3 14.8 14.7C14.1 15.6 13 16.1 11.9 16.1Z"
            fill={props.color}
          />
          <Path
            d="M23 24C22.7 24 22.5 23.9 22.3 23.7L0.3 1.7C-0.1 1.3 -0.1 0.7 0.3 0.3C0.7 -0.1 1.3 -0.1 1.7 0.3L23.7 22.3C24.1 22.7 24.1 23.3 23.7 23.7C23.5 23.9 23.3 24 23 24Z"
            fill={props.color}
          />
        </G>
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_118_2305">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EyeOff;
