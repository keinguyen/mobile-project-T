import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";
const PhoneCallEnded = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <G id="filled-call-end-24px">
      <Path
        id="Stroke 1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9971 11.3349C6.35644 11.3356 8.97888 15.2379 5.38822 15.2391C1.92582 15.2396 0.583877 15.888 0.584488 11.5011C0.638444 11.0055 -0.272461 6.6029 11.997 6.6012C24.2679 6.59949 23.3603 11.0024 23.4142 11.498C23.4143 15.8962 22.0726 15.2361 18.6102 15.2365C15.0187 15.237 17.6377 11.3341 11.9971 11.3349Z"
        fill={props.color}
      />
    </G>
  </Svg>
);
export default PhoneCallEnded;
