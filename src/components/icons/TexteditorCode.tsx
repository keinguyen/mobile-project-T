import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const TexteditorCode = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / texteditor-code">
      <G id="icon_24 / texteditor-code_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4545 4.2983C15.6192 3.77115 15.3254 3.21028 14.7983 3.04554C14.2712 2.88081 13.7103 3.1746 13.5455 3.70175L8.54554 19.7017C8.38081 20.2289 8.6746 20.7898 9.20175 20.9545C9.72889 21.1192 10.2898 20.8254 10.4545 20.2983L15.4545 4.2983ZM6.70711 7.29289C7.09763 7.68342 7.09763 8.31658 6.70711 8.70711L3.41421 12L6.70711 15.2929C7.09763 15.6834 7.09763 16.3166 6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289ZM17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L18.7071 16.7071C18.3166 17.0976 17.6834 17.0976 17.2929 16.7071C16.9024 16.3166 16.9024 15.6834 17.2929 15.2929L20.5858 12L17.2929 8.70711C16.9024 8.31658 16.9024 7.68342 17.2929 7.29289Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default TexteditorCode;