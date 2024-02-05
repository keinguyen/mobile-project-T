import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const PriorityMedium = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / priority-medium">
      <G id="icon_24 / priority-medium_2">
        <Path
          id="Icon"
          d="M16.8 10.8C17.4627 10.8 18 11.3373 18 12C18 12.6628 17.4627 13.2 16.8 13.2L7.2 13.2C6.53726 13.2 6 12.6628 6 12C6 11.3373 6.53726 10.8 7.2 10.8L16.8 10.8Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default PriorityMedium;
