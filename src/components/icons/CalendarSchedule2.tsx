import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const CalendarSchedule2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / calendar-Schedule2">
      <G id="icon_24 / calendar-Schedule2_2">
        <Path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2ZM15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929ZM5 14C5 10.134 8.13401 7 12 7C15.866 7 19 10.134 19 14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14ZM12 5C7.02944 5 3 9.02944 3 14C3 18.9706 7.02944 23 12 23C16.9706 23 21 18.9706 21 14C21 9.02944 16.9706 5 12 5Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default CalendarSchedule2;
