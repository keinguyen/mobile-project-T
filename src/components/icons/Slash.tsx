import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Slash = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / slash">
      <G id="icon_24 / slash_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.38231 4.9681C7.92199 3.73647 9.87499 3 12 3C16.9706 3 21 7.02944 21 12C21 14.125 20.2635 16.078 19.0319 17.6177L6.38231 4.9681ZM4.9681 6.38231C3.73647 7.92199 3 9.87499 3 12C3 16.9706 7.02944 21 12 21C14.125 21 16.078 20.2635 17.6177 19.0319L4.9681 6.38231ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Slash;
