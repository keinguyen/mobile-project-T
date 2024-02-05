import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Volume = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / volume">
      <G id="icon_24 / volume_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4332 4.0987C11.7797 4.26522 12 4.6156 12 5V19C12 19.3844 11.7797 19.7348 11.4332 19.9013C11.0867 20.0678 10.6755 20.021 10.3753 19.7809L5.64922 16H2C1.44772 16 1 15.5523 1 15V9C1 8.44772 1.44772 8 2 8H5.64922L10.3753 4.21913C10.6755 3.979 11.0867 3.93218 11.4332 4.0987ZM10 7.08063L6.62469 9.78087C6.44738 9.92272 6.22707 10 6 10H3V14H6C6.22707 14 6.44738 14.0773 6.62469 14.2191L10 16.9194V7.08063Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Volume;
