import * as React from "react";
import Svg, { Polyline } from "react-native-svg";
const IconCheck = (props : any) => (
    <Svg
        fill={props.color}
        viewBox="0 0 24 24"
        width={18}
        height={18}
        {...props}
    >
        <Polyline
            id="primary"
            points="5 12 10 17 19 8"
            style={{
                fill: "none",
                stroke: "rgb(0, 0, 0)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 3,
            }}
        />
    </Svg>
);
export default IconCheck;
