import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
const UserX = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / user-x">
      <G id="icon_24 / user-x_2" clipPath="url(#clip0_118_2243)">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 7C5.5 5.34315 6.84315 4 8.5 4C10.1569 4 11.5 5.34315 11.5 7C11.5 8.65685 10.1569 10 8.5 10C6.84315 10 5.5 8.65685 5.5 7ZM8.5 2C5.73858 2 3.5 4.23858 3.5 7C3.5 9.76142 5.73858 12 8.5 12C11.2614 12 13.5 9.76142 13.5 7C13.5 4.23858 11.2614 2 8.5 2ZM5 14C3.67392 14 2.40215 14.5268 1.46447 15.4645C0.526784 16.4021 0 17.6739 0 19V21C0 21.5523 0.447715 22 1 22C1.55228 22 2 21.5523 2 21V19C2 18.2044 2.31607 17.4413 2.87868 16.8787C3.44129 16.3161 4.20435 16 5 16H12C12.7956 16 13.5587 16.3161 14.1213 16.8787C14.6839 17.4413 15 18.2043 15 19V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V19C17 17.6739 16.4732 16.4021 15.5355 15.4645C14.5979 14.5268 13.3261 14 12 14H5ZM17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289L20.5 9.08579L22.2929 7.29289C22.6834 6.90237 23.3166 6.90237 23.7071 7.29289C24.0976 7.68342 24.0976 8.31658 23.7071 8.70711L21.9142 10.5L23.7071 12.2929C24.0976 12.6834 24.0976 13.3166 23.7071 13.7071C23.3166 14.0976 22.6834 14.0976 22.2929 13.7071L20.5 11.9142L18.7071 13.7071C18.3166 14.0976 17.6834 14.0976 17.2929 13.7071C16.9024 13.3166 16.9024 12.6834 17.2929 12.2929L19.0858 10.5L17.2929 8.70711C16.9024 8.31658 16.9024 7.68342 17.2929 7.29289Z"
          fill={props.color}
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_118_2243">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UserX;