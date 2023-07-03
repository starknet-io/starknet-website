import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// 3.svg, deposit-withdraw.svg
const DepositAndWithdrawIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} width="106" height="104" viewBox="0 0 106 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6667 20C5.1439 20 0.666748 15.5228 0.666748 9.99999C0.666748 4.47715 5.1439 0 10.6667 0C15.8521 0 20.1157 3.94668 20.6174 9H35.6667C40.6373 9 44.6667 13.0294 44.6667 18V25H42.6667V18C42.6667 14.134 39.5327 11 35.6667 11H20.6174C20.1156 16.0533 15.8521 20 10.6667 20ZM13.4601 9.99956L8.8132 14.6464L9.5203 15.3536L14.8743 9.99956L9.5203 4.64557L8.8132 5.35268L13.4601 9.99956Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M43.6667 62C49.1896 62 53.6667 57.5228 53.6667 52C53.6667 46.4772 49.1896 42 43.6667 42C38.1439 42 33.6667 46.4772 33.6667 52C33.6667 57.5228 38.1439 62 43.6667 62Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M63.6667 27H23.6667C20.353 27 17.6667 29.6863 17.6667 33V71.0341C17.6667 74.3478 20.353 77.0341 23.6667 77.0341H63.6667C66.9804 77.0341 69.6667 74.3478 69.6667 71.0341V71.0275L69.6667 71.0001L69.6667 33C69.6667 29.6863 66.9804 27 63.6667 27ZM67.6667 52.0002V48.3864C67.6667 47.0684 66.5983 46 65.2803 46H55.1993C54.8343 45.2982 54.4044 44.6285 53.9138 44H65.2803C66.1604 44 66.9799 44.2592 67.6667 44.7053V39.3864C67.6667 38.0684 66.5983 37 65.2803 37H22.0531C20.7352 37 19.6667 38.0684 19.6667 39.3864V44.7053C20.3536 44.2592 21.1731 44 22.0531 44H33.4197C32.929 44.6285 32.4992 45.2982 32.1342 46H22.0531C20.7352 46 19.6667 47.0684 19.6667 48.3864V52L25.0021 52.0001C28.8423 52.0002 31.4018 55.1578 32.5404 57.8809C34.3725 62.2622 39.2771 64.9889 43.6668 64.9889C48.073 64.9889 53.0986 62.2464 54.9723 57.8614C56.1266 55.1598 58.6858 52.0002 62.5247 52.0002H67.6667ZM22.2555 74.7439C22.6944 74.9094 23.17 75 23.6667 75H63.6667C65.8758 75 67.6667 73.2091 67.6667 71L67.6667 54.0002H62.5247C59.8888 54.0002 57.8471 56.2233 56.8114 58.6472C54.5735 63.8848 48.7394 66.9889 43.6668 66.9889C38.5958 66.9889 32.884 63.8869 30.6953 58.6524C29.6784 56.2206 27.638 54.0002 25.0021 54.0001L19.6668 54L19.6668 71C19.6668 72.7124 20.7428 74.1734 22.2555 74.7439ZM67.6667 35.7053V33C67.6667 30.7909 65.8758 29 63.6667 29H23.6667C21.4576 29 19.6667 30.7909 19.6667 33V35.7053C20.3536 35.2592 21.1731 35 22.0531 35H65.2803C66.1604 35 66.9799 35.2592 67.6667 35.7053Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M44.6667 79V86C44.6667 89.866 47.8008 93 51.6667 93H67.7161C68.2178 87.9467 72.4814 84 77.6667 84C83.1896 84 87.6667 88.4771 87.6667 94C87.6667 99.5228 83.1896 104 77.6667 104C72.4814 104 68.2179 100.053 67.7161 95H51.6667C46.6962 95 42.6667 90.9706 42.6667 86V79H44.6667ZM75.8132 98.6464L80.4601 93.9995L75.8132 89.3526L76.5203 88.6455L81.8743 93.9995L76.5203 99.3535L75.8132 98.6464Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="87.6667" y1="-33.3585" x2="-42.1973" y2="-6.84171" gradientUnits="userSpaceOnUse">
        <stop stopColor={gradientColor1}/>
        <stop offset="0.963542" stopColor={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="87.6667" y1="-33.3585" x2="-42.1973" y2="-6.84171" gradientUnits="userSpaceOnUse">
        <stop stopColor={gradientColor1}/>
        <stop offset="0.963542" stopColor={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="87.6667" y1="-33.3585" x2="-42.1973" y2="-6.84171" gradientUnits="userSpaceOnUse">
        <stop stopColor={gradientColor1}/>
        <stop offset="0.963542" stopColor={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="87.6667" y1="-33.3585" x2="-42.1973" y2="-6.84171" gradientUnits="userSpaceOnUse">
        <stop stopColor={gradientColor1}/>
        <stop offset="0.963542" stopColor={gradientColor2}/>
      </linearGradient>
      </defs>
    </svg>
  )
};

export default DepositAndWithdrawIcon;
