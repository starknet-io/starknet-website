import React from 'react';
import { CardIconProps } from "../IconInterface";
// 5.svg
const HowSNWorksIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const gradientIdPrefix = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg filter={filter} border-radius={borderRadius} width="107" height="106" viewBox="0 0 107 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M77 21C77 25.9706 81.0294 30 86 30C90.9706 30 95 25.9706 95 21C95 16.0294 90.9706 12 86 12C81.0294 12 77 16.0294 77 21Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M68 0C66.3431 0 65 1.34315 65 3V39C65 40.6569 66.3431 42 68 42H104C105.657 42 107 40.6569 107 39V3C107 1.34315 105.657 0 104 0H68ZM67 3C67 2.44772 67.4477 2 68 2H104C104.552 2 105 2.44772 105 3V39C105 39.5523 104.552 40 104 40H68C67.4477 40 67 39.5523 67 39V3Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M12 35C12 39.6326 15.5001 43.4476 20 43.9451V51.5H22V43.9451C26.5 43.4476 30 39.6326 30 35C30 30.0294 25.9706 26 21 26C16.0294 26 12 30.0294 12 35Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 17C0 15.3431 1.34315 14 3 14H39C40.6569 14 42 15.3431 42 17V53C42 54.6569 40.6569 56 39 56H3C1.34315 56 0 54.6569 0 53V17ZM3 16C2.44772 16 2 16.4477 2 17V53C2 53.5523 2.44772 54 3 54H39C39.5523 54 40 53.5523 40 53V17C40 16.4477 39.5523 16 39 16H3Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M21 94C16.0294 94 12 89.9706 12 85C12 80.3674 15.5001 76.5524 20 76.0549V67H22V76.0549C26.1716 76.5161 29.4839 79.8284 29.9451 84H38.5V86H29.9451C29.4476 90.5 25.6326 94 21 94Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 67C0 65.3431 1.34315 64 3 64H39C40.6569 64 42 65.3431 42 67V103C42 104.657 40.6569 106 39 106H3C1.34315 106 0 104.657 0 103V67ZM3 66C2.44772 66 2 66.4477 2 67V103C2 103.552 2.44772 104 3 104H39C39.5523 104 40 103.552 40 103V67C40 66.4477 39.5523 66 39 66H3Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M62.0549 84H53V86H62.0549C62.5524 90.5 66.3674 94 71 94C75.9706 94 80 89.9706 80 85C80 80.3674 76.5 76.5524 72 76.0549V67H70V76.0549C65.8284 76.5161 62.5161 79.8284 62.0549 84Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M53 64C51.3431 64 50 65.3431 50 67V103C50 104.657 51.3431 106 53 106H89C90.6569 106 92 104.657 92 103V67C92 65.3431 90.6569 64 89 64H53ZM52 67C52 66.4477 52.4477 66 53 66H89C89.5523 66 90 66.4477 90 67V103C90 103.552 89.5523 104 89 104H53C52.4477 104 52 103.552 52 103V67Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M50 43.8284C50 41.1557 53.2314 39.8172 55.1213 41.7071L59.2124 45.7982L63.2929 41.7177L64.7071 43.1319L60.6266 47.2124L64.2929 50.8787C66.1828 52.7686 64.8443 56 62.1716 56H53C51.3431 56 50 54.6569 50 53V43.8284ZM53.7071 43.1213C53.0771 42.4914 52 42.9375 52 43.8284V53C52 53.5523 52.4477 54 53 54H62.1716C63.0625 54 63.5086 52.9229 62.8787 52.2929L53.7071 43.1213Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M20 57V62.5H22V57H20Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M43 84H48.5V86H43V84Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="107" y1="-34" x2="-49.8546" y2="4.64746" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      </defs>
    </svg>
  )
};

export default HowSNWorksIcon;