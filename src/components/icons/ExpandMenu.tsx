import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const ExpandMenu = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / expand menu">
      <G id="icon_24 / expand menu_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H3ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H3ZM2 18C2 17.4477 2.44772 17 3 17H18.8284L15.9498 14.1213C15.5592 13.7308 15.5592 13.0976 15.9498 12.7071C16.3403 12.3166 16.9734 12.3166 17.364 12.7071L21.6066 16.9497C21.9971 17.3403 21.9971 17.9734 21.6066 18.364L17.364 22.6066C16.9734 22.9971 16.3403 22.9971 15.9498 22.6066C15.5592 22.2161 15.5592 21.5829 15.9498 21.1924L18.1421 19H3C2.44772 19 2 18.5523 2 18Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default ExpandMenu;
