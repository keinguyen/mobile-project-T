import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Search = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / search">
      <G id="icon_24 / search_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8856 17.2544 14.5971 16.042 15.8557C16.0075 15.8822 15.9744 15.9112 15.9428 15.9428C15.9112 15.9744 15.8822 16.0075 15.8557 16.042C14.5971 17.2544 12.8856 18 11 18C7.13401 18 4 14.866 4 11ZM16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.707 20.2928C22.0975 20.6833 22.0975 21.3165 21.707 21.707C21.3165 22.0975 20.6833 22.0975 20.2928 21.707L16.6177 18.0319Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Search;
