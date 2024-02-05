import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const CollapseMenu = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / collapse menu">
      <G id="icon_24 / collapse menu_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H3ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H12ZM5.4853 17L8.36397 14.1213C8.75449 13.7308 8.75449 13.0976 8.36397 12.7071C7.97344 12.3166 7.34028 12.3166 6.94975 12.7071L2.70711 16.9498C2.31659 17.3403 2.31659 17.9734 2.70711 18.364L6.94975 22.6066C7.34028 22.9971 7.97344 22.9971 8.36397 22.6066C8.75449 22.2161 8.75449 21.5829 8.36397 21.1924L6.17157 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H5.4853Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default CollapseMenu;
