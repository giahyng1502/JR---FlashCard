import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IconSound = (props : any) => (
    <Svg
        width={18}
        height={18}
        viewBox="0 0 10 8"
        fill="none"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.91102 7.95937L7.18221 7.33893C8.80674 5.44991 8.80674 2.56216 7.18218 0.67314L7.911 0.0527278C9.80746 2.30608 9.80743 5.70602 7.91102 7.95937ZM6.06329 1.62566L5.33363 2.2468C6.20499 3.23861 6.20496 4.77349 5.33365 5.7653L6.06332 6.38644C7.20639 5.02991 7.20639 2.98216 6.06329 1.62566ZM4.19856 0L1.7713 2.0324H0V6.00886H1.77403L4.19856 8V0ZM0.934231 3.02652H2.09518L3.26433 2.04745V5.97682L2.09244 5.01474H0.934231V3.02652Z"
            fill={props.color}
        />
    </Svg>
);
export default IconSound;
