import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const ArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / arrow-left">
      <G id="icon_24 / arrow-left_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4142 4.00008C12.8048 3.60955 12.8048 2.97639 12.4142 2.58586C12.0237 2.19534 11.3905 2.19534 11 2.58586L2.29289 11.293C1.90237 11.6835 1.90237 12.3166 2.29289 12.7072L11 21.4143C11.3905 21.8048 12.0237 21.8048 12.4142 21.4143C12.8048 21.0237 12.8048 20.3906 12.4142 20L5.41422 13.0001H22C22.5523 13.0001 23 12.5523 23 12.0001C23 11.4478 22.5523 11.0001 22 11.0001H5.41422L12.4142 4.00008Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default ArrowLeft;
