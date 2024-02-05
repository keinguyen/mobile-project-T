import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Refer = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / refer">
      <G id="icon_24 / refer_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6173 2.07615C13.991 1.92137 14.4211 2.00692 14.7071 2.29292L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L14.7071 21.7071C14.4211 21.9931 13.991 22.0787 13.6173 21.9239C13.2436 21.7691 13 21.4045 13 21V17H2C1.44772 17 1 16.5523 1 16V8.00003C1 7.44774 1.44772 7.00003 2 7.00003H13V3.00003C13 2.59557 13.2436 2.23093 13.6173 2.07615ZM15 5.41424V8.00003C15 8.55231 14.5523 9.00003 14 9.00003H3V15H14C14.5523 15 15 15.4477 15 16V18.5858L20.5858 12L15 5.41424Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Refer;
