import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const CheckCircle2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / check-circle2">
      <G id="icon_24 / check-circle2_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.1183 9.57254C17.4939 9.16706 17.4939 8.50964 17.1183 8.10416C16.7428 7.69868 16.1339 7.69868 15.7583 8.10416L10.5205 13.7595L8.2416 11.2989C7.86606 10.8935 7.25718 10.8935 6.88163 11.2989C6.50609 11.7044 6.50609 12.3618 6.88163 12.7673L9.73593 15.8492C10.1692 16.317 10.8718 16.317 11.3051 15.8492L17.1183 9.57254Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default CheckCircle2;
