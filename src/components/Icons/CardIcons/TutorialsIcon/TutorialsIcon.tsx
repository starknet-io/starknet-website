import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// 7.svg, tutorials.svg
const TutorialsIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} width="113" height="105" viewBox="0 0 113 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.66675 14C8.56218 14 7.66675 14.8954 7.66675 16C7.66675 17.1046 8.56218 18 9.66675 18H35.6667C36.7713 18 37.6667 17.1046 37.6667 16C37.6667 14.8954 36.7713 14 35.6667 14H9.66675Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M55.1667 44.7947L64.1667 39.5985C66.1667 38.4438 66.1667 35.5571 64.1667 34.4024L55.1667 29.2062C53.1668 28.0515 50.6667 29.4949 50.6667 31.8043V42.1966C50.6667 44.506 53.1667 45.9494 55.1667 44.7947ZM63.1667 36.1344C63.8334 36.5193 63.8334 37.4816 63.1667 37.8665L54.1667 43.0626C53.5001 43.4475 52.6667 42.9664 52.6667 42.1966V31.8043C52.6667 31.0345 53.5001 30.5534 54.1667 30.9383L63.1667 36.1344Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6667 57C67.7124 57 76.6667 48.0457 76.6667 37C76.6667 25.9543 67.7124 17 56.6667 17C45.6211 17 36.6667 25.9543 36.6667 37C36.6667 48.0457 45.6211 57 56.6667 57ZM56.6667 55C66.6079 55 74.6667 46.9411 74.6667 37C74.6667 27.0589 66.6079 19 56.6667 19C46.7256 19 38.6667 27.0589 38.6667 37C38.6667 46.9411 46.7256 55 56.6667 55Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6118 37C25.1144 32.5 21.2993 29 16.6667 29C11.6962 29 7.66675 33.0294 7.66675 38C7.66675 42.9706 11.6962 47 16.6667 47C21.2993 47 25.1144 43.5 25.6118 39H34.1667V37H25.6118ZM16.6667 45C12.8008 45 9.66675 41.866 9.66675 38C9.66675 34.134 12.8008 31 16.6667 31C20.5327 31 23.6667 34.134 23.6667 38C23.6667 41.866 20.5327 45 16.6667 45Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M87.7217 39C88.2191 43.5 92.0342 47 96.6667 47C101.637 47 105.667 42.9706 105.667 38C105.667 33.0294 101.637 29 96.6667 29C92.0342 29 88.2191 32.5 87.7217 37H79.6667V39H87.7217Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666748 5C0.666748 2.23858 2.90532 0 5.66675 0H107.667C110.428 0 112.667 2.23858 112.667 5V75C112.667 77.7614 110.428 80 107.667 80H5.66675C2.90533 80 0.666748 77.7614 0.666748 75V5ZM2.66675 10V65H110.667L110.667 10H2.66675ZM110.667 8H2.66675V5C2.66675 3.34315 4.00989 2 5.66675 2H107.667C109.324 2 110.667 3.34315 110.667 5V8ZM2.66675 75V67H110.667L110.667 75C110.667 76.6569 109.324 78 107.667 78H5.66675C4.0099 78 2.66675 76.6569 2.66675 75Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M33.6667 84C33.6667 83.4477 34.1145 83 34.6667 83H78.6667C79.219 83 79.6667 83.4477 79.6667 84V87C79.6667 87.5523 79.219 88 78.6667 88H34.6667C34.1145 88 33.6667 87.5523 33.6667 87V84Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="112.667" y1="-28.2264" x2="-46.1571" y2="21.1133" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="112.667" y1="-28.2264" x2="-46.1571" y2="21.1133" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="112.667" y1="-28.2264" x2="-46.1571" y2="21.1133" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="112.667" y1="-28.2264" x2="-46.1571" y2="21.1133" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="112.667" y1="-28.2264" x2="-46.1571" y2="21.1133" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="112.667" y1="-28.2264" x2="-46.1571" y2="21.1133" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="112.667" y1="-28.2264" x2="-46.1571" y2="21.1133" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      </defs>
    </svg>
  )
};

export default TutorialsIcon;