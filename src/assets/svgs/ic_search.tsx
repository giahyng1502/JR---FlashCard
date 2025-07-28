import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const IconSearch = (props:any) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 16 16"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        {...props}
    >
        <Path d="m11.25 11.25 3 3" />
        <Circle cx={7.5} cy={7.5} r={4.75} />
    </Svg>
);
export default IconSearch;
