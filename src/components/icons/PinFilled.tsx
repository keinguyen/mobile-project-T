import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const PinFilled = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / pin-filled">
      <G id="icon_24 / pin-filled_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.70717 19.9707L7.65692 15.0209L3.89769 11.2617C3.50717 10.8712 3.50717 10.238 3.89769 9.84751L4.19575 9.54945C4.37506 9.37014 4.61579 9.26565 4.86923 9.25712L8.59613 9.13173L13.6672 4.06066L13.3136 3.70711C12.9231 3.31658 12.9231 2.68342 13.3136 2.29289C13.7042 1.90237 14.3373 1.90237 14.7279 2.29289L21.7991 9.36409C22.1896 9.75462 22.1896 10.3878 21.7991 10.7783C21.4085 11.1688 20.7754 11.1688 20.3848 10.7783L20.0313 10.4248L14.9602 15.4958L14.8348 19.2227C14.8263 19.4762 14.7218 19.7169 14.5425 19.8962L14.2444 20.1943C13.8539 20.5848 13.2208 20.5848 12.8302 20.1943L9.071 16.435L4.12125 21.3848L2.56926 21.9022C2.33472 21.9804 2.11159 21.7572 2.18978 21.5227L2.70717 19.9707Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default PinFilled;