import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const ArrowUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / arrow-up">
      <G id="icon_24 / arrow-up_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2928 12.4142C19.6834 12.8048 20.3165 12.8048 20.707 12.4142C21.0976 12.0237 21.0976 11.3905 20.707 11L12 2.29289C11.6094 1.90237 10.9763 1.90237 10.5857 2.29289L1.87864 11C1.48812 11.3905 1.48812 12.0237 1.87864 12.4142C2.26917 12.8048 2.90234 12.8048 3.29286 12.4142L10.2928 5.41422L10.2928 22C10.2928 22.5523 10.7406 23 11.2928 23C11.8451 23 12.2928 22.5523 12.2928 22L12.2928 5.41422L19.2928 12.4142Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default ArrowUp;
