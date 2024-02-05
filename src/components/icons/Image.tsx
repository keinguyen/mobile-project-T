import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Image = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / image">
      <G id="icon_24 / image_2">
        <G id="Icon">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z"
            fill={props.color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8ZM6 8.5C6 7.11929 7.11929 6 8.5 6C9.88071 6 11 7.11929 11 8.5C11 9.88071 9.88071 11 8.5 11C7.11929 11 6 9.88071 6 8.5Z"
            fill={props.color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 11.5C14.3905 11.1095 15.0237 11.1095 15.4142 11.5L21.4142 16.0858C21.8047 16.4763 21.8047 17.1095 21.4142 17.5C21.0237 17.8905 20.3905 17.8905 20 17.5L14.7071 13.6213L5.70711 21.7071C5.31658 22.0976 4.68342 22.0976 4.29289 21.7071C3.90237 21.3166 3.90237 20.6834 4.29289 20.2929L14 11.5Z"
            fill={props.color}
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default Image;
