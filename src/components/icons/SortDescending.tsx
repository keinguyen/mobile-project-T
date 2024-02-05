import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const SortDescending = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / sort-descending">
      <G id="icon_24 / sort-descending_2">
        <Path
          id="chevron-up"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071C18.3166 11.0976 17.6834 11.0976 17.2929 10.7071L12 5.41421L6.70711 10.7071C6.31658 11.0976 5.68342 11.0976 5.29289 10.7071Z"
          fill="#DCE0E4"
        />
        <Path
          id="Descending"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.29289 13.2929C5.68342 12.9024 6.31658 12.9024 6.70711 13.2929L12 18.5858L17.2929 13.2929C17.6834 12.9024 18.3166 12.9024 18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929Z"
          fill="#356BF5"
        />
      </G>
    </G>
  </Svg>
);
export default SortDescending;
