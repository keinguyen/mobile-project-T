import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const MonitorSmartphone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / monitor-smartphone">
      <G id="icon_24 / monitor-smartphone_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 3C3.20435 3 2.44129 3.31607 1.87868 3.87868C1.31607 4.44129 1 5.20435 1 6V13C1 13.7956 1.31607 14.5587 1.87868 15.1213C2.44129 15.6839 3.20435 16 4 16H9V18H7C6.44772 18 6 18.4477 6 19C6 19.5523 6.44772 20 7 20H9.99117L10 20L10.0088 20H12C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18H11V16H12C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8V6C19 5.20435 18.6839 4.44129 18.1213 3.87868C17.5587 3.31607 16.7956 3 16 3H4ZM17 14C17 13.4477 17.4477 13 18 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H18C17.4477 21 17 20.5523 17 20V14ZM18 11C16.3431 11 15 12.3431 15 14V20C15 21.6569 16.3431 23 18 23H20C21.6569 23 23 21.6569 23 20V14C23 12.3431 21.6569 11 20 11H18Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default MonitorSmartphone;
