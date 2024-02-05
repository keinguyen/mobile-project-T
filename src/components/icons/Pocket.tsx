import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Pocket = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / pocket">
      <G id="icon_24 / pocket_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V11C21 13.3869 20.0518 15.6761 18.364 17.364C16.6761 19.0518 14.3869 20 12 20C10.8181 20 9.64778 19.7672 8.55585 19.3149C7.46392 18.8626 6.47177 18.1997 5.63604 17.364C3.94821 15.6761 3 13.3869 3 11V5C3 4.73478 3.10536 4.48043 3.29289 4.29289ZM20 2H4C3.20435 2 2.44129 2.31607 1.87868 2.87868C1.31607 3.44129 1 4.20435 1 5V11C1 13.9174 2.15893 16.7153 4.22183 18.7782C5.24327 19.7996 6.4559 20.6099 7.79048 21.1627C9.12506 21.7155 10.5555 22 12 22C14.9174 22 17.7153 20.8411 19.7782 18.7782C21.8411 16.7153 23 13.9174 23 11V5C23 4.20435 22.6839 3.44129 22.1213 2.87868C21.5587 2.31607 20.7957 2 20 2ZM8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289C6.90237 9.68342 6.90237 10.3166 7.29289 10.7071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.7071 10.7071C17.0976 10.3166 17.0976 9.68342 16.7071 9.29289C16.3166 8.90237 15.6834 8.90237 15.2929 9.29289L12 12.5858L8.70711 9.29289Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Pocket;
