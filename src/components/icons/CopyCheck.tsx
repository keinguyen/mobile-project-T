import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const CopyCheck = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / copy-check">
      <G id="icon_24 / copy-check_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 4C3 3.45228 3.45228 3 4 3H14C14.5477 3 15 3.45228 15 4C15 4.55228 15.4477 5 16 5C16.5523 5 17 4.55228 17 4C17 2.34772 15.6523 1 14 1H4C2.34772 1 1 2.34772 1 4V14C1 15.6523 2.34772 17 4 17C4.55228 17 5 16.5523 5 16C5 15.4477 4.55228 15 4 15C3.45228 15 3 14.5477 3 14V4ZM10 9C9.44771 9 9 9.44771 9 10V20C9 20.5523 9.44771 21 10 21H20C20.5523 21 21 20.5523 21 20V10C21 9.44771 20.5523 9 20 9H10ZM7 10C7 8.34315 8.34315 7 10 7H20C21.6569 7 23 8.34315 23 10V20C23 21.6569 21.6569 23 20 23H10C8.34315 23 7 21.6569 7 20V10ZM18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L11.2929 15.7071C10.9024 15.3166 10.9024 14.6834 11.2929 14.2929C11.6834 13.9024 12.3166 13.9024 12.7071 14.2929L14 15.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default CopyCheck;