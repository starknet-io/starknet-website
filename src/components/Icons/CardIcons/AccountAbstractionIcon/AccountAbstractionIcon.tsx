import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// 1.svg
const AccountAbstractionIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 29.9451C15.5001 29.4476 12 25.6326 12 21C12 16.0294 16.0294 12 21 12C25.9706 12 30 16.0294 30 21C30 25.6326 26.5 29.4476 22 29.9451V37.5H20V29.9451Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H39C40.6569 0 42 1.34315 42 3V39C42 40.6569 40.6569 42 39 42H3C1.34315 42 0 40.6569 0 39V3ZM3 2C2.44772 2 2 2.44772 2 3V39C2 39.5523 2.44772 40 3 40H39C39.5523 40 40 39.5523 40 39V3C40 2.44772 39.5523 2 39 2H3Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
        <path d="M21 93C16.0294 93 12 88.9706 12 84C12 79.3674 15.5001 75.5524 20 75.0549V66H22V75.0549C26.1716 75.5161 29.4839 78.8284 29.9451 83H38.5V85H29.9451C29.4476 89.5 25.6326 93 21 93Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 66C0 64.3431 1.34315 63 3 63H25.9837C24.3531 60.3608 23.0027 57.6051 22 54.808V61.5H20V45.5H20.0415C20.0139 44.9985 20 44.4984 20 44L22 44C22 50.2669 24.391 56.9533 28.3535 63H39C40.6569 63 42 64.3431 42 66V76.8113C47.756 80.6502 54.1814 83 60.5 83V85C59.9999 85 59.4998 84.9864 59 84.9596V85L43 85V83H49.7178C47.0608 82.031 44.471 80.7397 42 79.1919V102C42 103.657 40.6569 105 39 105H3C1.34315 105 0 103.657 0 102V66ZM40 75.3978V66C40 65.4477 39.5523 65 39 65H29.7384C31.0762 66.8313 32.557 68.5893 34.1562 70.2422C35.9742 72.1213 37.9352 73.8543 40 75.3978ZM27.2881 65C28.8976 67.3421 30.7248 69.5719 32.7188 71.6328C34.9457 73.9346 37.3947 76.0403 40 77.8657V102C40 102.552 39.5523 103 39 103H3C2.44772 103 2 102.552 2 102V66C2 65.4477 2.44772 65 3 65H27.2881Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
        <path d="M75.0549 85C75.5524 89.5 79.3674 93 84 93C88.9706 93 93 88.9706 93 84C93 79.0294 88.9706 75 84 75C79.3674 75 75.5524 78.5 75.0549 83H66V85H75.0549Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M66 63C64.3431 63 63 64.3431 63 66V102C63 103.657 64.3431 105 66 105H102C103.657 105 105 103.657 105 102V66C105 64.3431 103.657 63 102 63H66ZM65 66C65 65.4477 65.4477 65 66 65H102C102.552 65 103 65.4477 103 66V102C103 102.552 102.552 103 102 103H66C65.4477 103 65 102.552 65 102V66Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
        <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="105" y1="-33.6793" x2="-49.0868" y2="3.93144" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="105" y1="-33.6793" x2="-49.0868" y2="3.93144" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="105" y1="-33.6793" x2="-49.0868" y2="3.93144" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="105" y1="-33.6793" x2="-49.0868" y2="3.93144" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="105" y1="-33.6793" x2="-49.0868" y2="3.93144" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="105" y1="-33.6793" x2="-49.0868" y2="3.93144" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        </defs>
    </svg>
  )
};

export default AccountAbstractionIcon;