import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// yellow.svg, orange.svg, green.svg
const CoursesIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="92" height="97" viewBox="0 0 92 97" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.5 0.0136542C3.76201 0.273095 0 4.19722 0 9V16C0 18.7614 2.23858 21 5 21H14V19H5C3.34315 19 2 17.6569 2 16V9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9V88C16 92.8028 19.762 96.7269 24.5 96.9863V97H83C87.9706 97 92 92.9706 92 88V80C92 77.2386 89.7614 75 87 75H37C34.2386 75 32 77.2386 32 80V88C32 91.866 28.866 95 25 95C21.134 95 18 91.866 18 88V9C18 6.17273 16.6963 3.64996 14.6573 2H73C76.866 2 80 5.13401 80 9V73H82V9C82 4.02944 77.9706 0 73 0H8.5V0.0136542ZM30.6573 95H83C86.866 95 90 91.866 90 88V80C90 78.3431 88.6569 77 87 77H37C35.3431 77 34 78.3431 34 80V88C34 90.8273 32.6963 93.35 30.6573 95Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M26 50C26 48.8954 26.8954 48 28 48H70C71.1046 48 72 48.8954 72 50C72 51.1046 71.1046 52 70 52H28C26.8954 52 26 51.1046 26 50Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M36 56C34.8954 56 34 56.8954 34 58C34 59.1046 34.8954 60 36 60H62C63.1046 60 64 59.1046 64 58C64 56.8954 63.1046 56 62 56H36Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M30 66C30 64.8954 30.8954 64 32 64H66C67.1046 64 68 64.8954 68 66C68 67.1046 67.1046 68 66 68H32C30.8954 68 30 67.1046 30 66Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M49 12C41.268 12 35 18.268 35 26C35 33.732 41.268 40 49 40C56.732 40 63 33.732 63 26C63 18.268 56.732 12 49 12ZM55.9395 20.9395L58.0608 23.0608L48.0001 33.1214L42.4395 27.5608L44.5608 25.4395L48.0001 28.8788L55.9395 20.9395Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="92" y1="-31.1132" x2="-43.7762" y2="0.319765" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="92" y1="-31.1132" x2="-43.7762" y2="0.319765" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="92" y1="-31.1132" x2="-43.7762" y2="0.319765" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="92" y1="-31.1132" x2="-43.7762" y2="0.319765" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="92" y1="-31.1132" x2="-43.7762" y2="0.319765" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default CoursesIcon;
