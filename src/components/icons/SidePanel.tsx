import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const SidePanel = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / side panel">
      <G id="icon_24 / side panel_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H8V4H5ZM10 4V20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H10ZM5 22H9H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H9H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22ZM14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289C12.9024 8.68342 12.9024 9.31658 13.2929 9.70711L15.5858 12L13.2929 14.2929C12.9024 14.6834 12.9024 15.3166 13.2929 15.7071C13.6834 16.0976 14.3166 16.0976 14.7071 15.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L14.7071 8.29289Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default SidePanel;
