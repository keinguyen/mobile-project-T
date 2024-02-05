import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const TriangleRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / triangle-right">
      <G id="icon_24 / triangle-right_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.81507 8.10556L14.0938 11.3778C14.5086 11.695 14.5086 12.3104 14.0938 12.6276L9.81507 15.8998C9.4836 16.1533 9 15.9216 9 15.5092V8.49612C9 8.08379 9.4836 7.85206 9.81507 8.10556Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default TriangleRight;
