import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const MessageCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / message-circle">
      <G id="icon_24 / message-circle_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 11.5C20 6.06975 14.0662 2.30981 9.15085 4.79256L9.14706 4.79447L9.14706 4.79447C5.52859 6.60292 3.95644 11.2139 5.79259 14.8491C5.91281 15.0871 5.933 15.3632 5.84868 15.6162L4.58114 19.4188L8.38377 18.1513C8.63671 18.067 8.91286 18.0872 9.15085 18.2074C14.0074 20.6604 20.0139 16.8409 20 11.5026L20 11.5ZM22 11.4988C21.9992 4.61375 14.5263 -0.161513 8.25103 3.00641C3.78429 5.24011 1.77605 10.7956 3.82398 15.3657L2.05131 20.6837C1.93154 21.0431 2.02506 21.4392 2.29289 21.7071C2.56072 21.9749 2.95689 22.0684 3.31622 21.9486L8.63396 20.1761C14.7713 22.9322 22.0163 18.1596 22 11.4988Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default MessageCircle;
