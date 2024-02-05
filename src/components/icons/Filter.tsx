import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Filter = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / filter">
      <G id="icon_24 / filter_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.09288 2.57912C1.25674 2.22596 1.61067 2 2 2H22C22.3893 2 22.7433 2.22596 22.9071 2.57912C23.071 2.93229 23.015 3.34845 22.7636 3.64573L15 12.8261V21C15 21.3466 14.8205 21.6684 14.5257 21.8507C14.2309 22.0329 13.8628 22.0494 13.5528 21.8944L9.55278 19.8944C9.214 19.725 9 19.3788 9 19V12.8261L1.23643 3.64573C0.985031 3.34845 0.929022 2.93229 1.09288 2.57912ZM4.1553 4L10.7636 11.8143C10.9162 11.9948 11 12.2236 11 12.46V18.382L13 19.382V12.46C13 12.2236 13.0838 11.9948 13.2364 11.8143L19.8447 4H4.1553Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Filter;
