import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// trustlessness.svg
const TrustlessnessIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="106" height="106" viewBox="0 0 106 106" fill="none">
      <path d="M92 26C92 32.6274 86.6274 38 80 38C73.3726 38 68 32.6274 68 26C68 19.3726 73.3726 14 80 14C86.6274 14 92 19.3726 92 26Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M54 4V7H39.9997C32.6895 7 26.3435 11.1284 23.1661 17.1808C24.0938 17.0615 25.0397 17 25.9999 17C26.6523 17 27.298 17.0284 27.9359 17.084C30.6684 13.3929 35.0546 11 39.9997 11H54V41H39.9997C32.7498 41 26.7012 35.8567 25.3038 29.0199C23.9286 29.0985 22.6155 29.4087 21.4028 29.9121C23.2063 38.5287 30.8473 45 39.9997 45H54V48C54 50.2091 55.7909 52 58 52H102C104.209 52 106 50.2091 106 48V4C106 1.79086 104.209 0 102 0H58C55.7909 0 54 1.79086 54 4ZM58 50C56.8954 50 56 49.1046 56 48V4C56 2.89543 56.8954 2 58 2L102 2C103.105 2 104 2.89543 104 4V48C104 49.1046 103.105 50 102 50H58Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M14 80C14 86.6274 19.3726 92 26 92C32.6274 92 38 86.6274 38 80C38 73.3726 32.6274 68 26 68C19.3726 68 14 73.3726 14 80Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7 54H4C1.79086 54 0 55.7909 0 58V102C0 104.209 1.79086 106 4 106H48C50.2091 106 52 104.209 52 102V58C52 55.7909 50.2091 54 48 54H45V49H41V54H11V40C11 31.7157 17.7157 25 26 25C33.2568 25 39.31 30.1531 40.6999 36.9997H44.7644C43.326 27.9319 35.4725 21 26 21C15.5066 21 7 29.5066 7 40V54ZM2 58C2 56.8954 2.89543 56 4 56H48C49.1046 56 50 56.8954 50 58V102C50 103.105 49.1046 104 48 104H4C2.89543 104 2 103.105 2 102V58Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="106" y1="-34" x2="-49.5543" y2="3.96888" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="106" y1="-34" x2="-49.5543" y2="3.96888" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="106" y1="-34" x2="-49.5543" y2="3.96888" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="106" y1="-34" x2="-49.5543" y2="3.96888" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default TrustlessnessIcon;
