import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const OnboardingTips = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / onboarding-tips">
      <G id="icon_24 / onboarding-tips_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4V14C2 14.7956 2.31607 15.5587 2.87868 16.1213C3.44129 16.6839 4.20435 17 5 17H9.58579L6.29289 20.2929C5.90237 20.6834 5.90237 21.3166 6.29289 21.7071C6.68342 22.0976 7.31658 22.0976 7.70711 21.7071L12 17.4142L16.2929 21.7071C16.6834 22.0976 17.3166 22.0976 17.7071 21.7071C18.0976 21.3166 18.0976 20.6834 17.7071 20.2929L14.4142 17H19C19.7957 17 20.5587 16.6839 21.1213 16.1213C21.6839 15.5587 22 14.7957 22 14V4C22.5523 4 23 3.55228 23 3C23 2.44772 22.5523 2 22 2H21H3H2ZM12.0007 15H11.9993H5C4.73478 15 4.48043 14.8946 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14V4H20V14C20 14.2652 19.8946 14.5196 19.7071 14.7071C19.5196 14.8946 19.2652 15 19 15H12.0007ZM8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8H10C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6H8ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H16C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10H8Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default OnboardingTips;
