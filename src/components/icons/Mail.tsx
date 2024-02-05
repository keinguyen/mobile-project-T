import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Mail = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / mail">
      <G id="icon_24 / mail_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.10657 5.55397C3.27194 5.22693 3.61203 5 4 5H20C20.388 5 20.7281 5.22697 20.8935 5.55406L12.0001 11.7794L3.10657 5.55397ZM3 7.92068V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V7.9208L12.5735 13.8193C12.2292 14.0603 11.7709 14.0603 11.4266 13.8193L3 7.92068ZM23 6.01775V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34772 2.34772 3 4 3H20C21.6443 3 22.987 4.33478 22.9999 5.97618C23.0002 5.99004 23.0003 6.0039 23 6.01775Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Mail;
