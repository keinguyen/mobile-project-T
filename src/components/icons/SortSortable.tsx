import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const SortSortable = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / sort-sortable">
      <G id="icon_24 / sort-sortable_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L12 5.41421L17.2929 10.7071C17.6834 11.0976 18.3166 11.0976 18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289L12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L5.29289 9.29289ZM6.70711 13.2929C6.31658 12.9024 5.68342 12.9024 5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071L11.2929 20.7071C11.6834 21.0976 12.3166 21.0976 12.7071 20.7071L18.7071 14.7071C19.0976 14.3166 19.0976 13.6834 18.7071 13.2929C18.3166 12.9024 17.6834 12.9024 17.2929 13.2929L12 18.5858L6.70711 13.2929Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default SortSortable;
