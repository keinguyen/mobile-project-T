import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const CalendarDays = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / calendar-days">
      <G id="icon_24 / calendar-days_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H7V2C7 1.44772 7.44772 1 8 1ZM7 5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44771 19.5523 5 19 5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5ZM20 11H4V20C4 20.5523 4.44771 21 5 21H19C19.5523 21 20 20.5523 20 20V11ZM7 14C7 13.4477 7.44772 13 8 13H8.01C8.56228 13 9.01 13.4477 9.01 14C9.01 14.5523 8.56228 15 8.01 15H8C7.44772 15 7 14.5523 7 14ZM11 14C11 13.4477 11.4477 13 12 13H12.01C12.5623 13 13.01 13.4477 13.01 14C13.01 14.5523 12.5623 15 12.01 15H12C11.4477 15 11 14.5523 11 14ZM15 14C15 13.4477 15.4477 13 16 13H16.01C16.5623 13 17.01 13.4477 17.01 14C17.01 14.5523 16.5623 15 16.01 15H16C15.4477 15 15 14.5523 15 14ZM7 18C7 17.4477 7.44772 17 8 17H8.01C8.56228 17 9.01 17.4477 9.01 18C9.01 18.5523 8.56228 19 8.01 19H8C7.44772 19 7 18.5523 7 18ZM11 18C11 17.4477 11.4477 17 12 17H12.01C12.5623 17 13.01 17.4477 13.01 18C13.01 18.5523 12.5623 19 12.01 19H12C11.4477 19 11 18.5523 11 18ZM15 18C15 17.4477 15.4477 17 16 17H16.01C16.5623 17 17.01 17.4477 17.01 18C17.01 18.5523 16.5623 19 16.01 19H16C15.4477 19 15 18.5523 15 18Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default CalendarDays;
