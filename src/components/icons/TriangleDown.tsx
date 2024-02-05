import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const TriangleDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / triangle-down">
      <G id="icon_24 / triangle-down_2">
        <Path
          id="Icon"
          d="M12.6222 14.3939L15.8944 10.1151C16.1479 9.78365 15.9162 9.30005 15.5039 9.30005L8.49076 9.30005C8.07843 9.30005 7.8467 9.78365 8.1002 10.1151L11.3724 14.3939C11.6896 14.8087 12.305 14.8087 12.6222 14.3939Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default TriangleDown;
