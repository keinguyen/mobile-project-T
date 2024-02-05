import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const CheckFullfill = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / check-fullfill">
      <G id="icon_24 / check-fullfill_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.1183 9.57254C17.4939 9.16706 17.4939 8.50964 17.1183 8.10416C16.7428 7.69868 16.1339 7.69868 15.7583 8.10416L10.5205 13.7595L8.2416 11.2989C7.86606 10.8935 7.25718 10.8935 6.88163 11.2989C6.50609 11.7044 6.50609 12.3618 6.88163 12.7673L9.73593 15.8492C10.1692 16.317 10.8718 16.317 11.3051 15.8492L17.1183 9.57254Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default CheckFullfill;
