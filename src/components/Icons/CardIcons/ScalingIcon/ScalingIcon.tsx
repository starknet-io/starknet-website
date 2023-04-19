import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// unlimited_scale.svg
const ScalingIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M90.8787 20.293C92.7686 22.1829 96 20.8444 96 18.1717V9.00015C96 7.34329 94.6569 6.00015 93 6.00015L83.8284 6.00015C81.1557 6.00015 79.8172 9.23157 81.7071 11.1215L90.8787 20.293ZM94 18.1717C94 19.0626 92.9229 19.5088 92.2929 18.8788L83.1213 9.70725C82.4914 9.07729 82.9375 8.00015 83.8284 8.00015L93 8.00015C93.5523 8.00015 94 8.44786 94 9.00015V18.1717Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0C22.2386 0 20 2.23858 20 5V60H3C1.34315 60 0 61.3431 0 63V99C0 100.657 1.34315 102 3 102H39C40.6569 102 42 100.657 42 99V82H97C99.7614 82 102 79.7614 102 77V5C102 2.23858 99.7614 0 97 0H25ZM42 80H97C98.6569 80 100 78.6569 100 77V5C100 3.34315 98.6569 2 97 2H25C23.3431 2 22 3.34315 22 5V60H39C39.3263 60 39.6405 60.0521 39.9346 60.1484L47.3495 52.7335C44.6386 49.5826 43 45.4827 43 41C43 31.0589 51.0589 23 61 23C65.4827 23 69.5826 24.6386 72.7335 27.3495L85.293 14.79L86.7072 16.2043L74.1755 28.7359C77.1688 31.9502 79 36.2613 79 41C79 50.9411 70.9411 59 61 59C56.2613 59 51.9502 57.1688 48.7359 54.1755L41.5278 61.3837C41.8267 61.8502 42 62.4048 42 63V80ZM20 62H3C2.44772 62 2 62.4477 2 63V99C2 99.5523 2.44772 100 3 100H39C39.5523 100 40 99.5523 40 99V82H29.9451C29.4476 86.5 25.6326 90 21 90C16.0294 90 12 85.9706 12 81C12 76.3674 15.5001 72.5524 20 72.0549V62ZM40 80H29.9451C29.7394 78.1395 28.9666 76.4499 27.8034 75.108L39.9964 62.915C39.9988 62.943 40 62.9714 40 63V80ZM38.083 62L26.3333 73.7497C25.0934 72.8361 23.6108 72.233 22 72.0549V62H38.083Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="102" y1="-32.717" x2="-47.6843" y2="3.81911" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="102" y1="-32.717" x2="-47.6843" y2="3.81911" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default ScalingIcon;