import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// 
const ToolsAndResourcesIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M80.5099 80.518C82.853 78.1749 82.853 74.3759 80.5099 72.0327C78.1667 69.6896 74.3678 69.6896 72.0246 72.0327C69.6815 74.3759 69.6815 78.1749 72.0246 80.518C74.3677 82.8612 78.1667 82.8612 80.5099 80.518ZM79.0957 73.4469C80.6578 75.009 80.6578 77.5417 79.0957 79.1038C77.5336 80.6659 75.0009 80.6659 73.4388 79.1038C71.8767 77.5417 71.8767 75.009 73.4388 73.4469C75.0009 71.8848 77.5336 71.8848 79.0957 73.4469Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56497 32.435C0.447534 27.3176 -1.14048 20.0073 0.80092 13.5288C1.0113 12.8268 1.26313 12.1345 1.5564 11.4559L15.4645 25.364C16.2455 26.145 17.5118 26.145 18.2929 25.364L25.364 18.2929C26.145 17.5118 26.145 16.2455 25.364 15.4645L11.4559 1.5564C12.1345 1.26313 12.8268 1.0113 13.5288 0.80092C20.0073 -1.14048 27.3176 0.447534 32.435 5.56497C37.2605 10.3904 38.9478 17.1657 37.4969 23.3548L83.3467 69.2046C87.2519 73.1098 87.2519 79.4415 83.3467 83.3467C79.4415 87.2519 73.1098 87.2519 69.2046 83.3467L23.3548 37.4969C17.1657 38.9478 10.3904 37.2605 5.56497 32.435ZM70.6188 81.9325L23.9819 35.2956L22.8983 35.5497C17.3548 36.8493 11.2951 35.3367 6.97918 31.0208C2.67898 26.7206 1.16211 20.6871 2.43571 15.1636L14.0502 26.7782C15.6123 28.3403 18.145 28.3403 19.7071 26.7782L26.7782 19.7071C28.3403 18.145 28.3403 15.6123 26.7782 14.0502L15.1636 2.43571C20.6871 1.16211 26.7206 2.67898 31.0208 6.97918C35.3367 11.2951 36.8493 17.3548 35.5497 22.8983L35.2956 23.9819L81.9325 70.6188C85.0567 73.743 85.0567 78.8083 81.9325 81.9325C78.8083 85.0567 73.743 85.0567 70.6188 81.9325Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M75.0135 3.09049C74.2324 2.30945 72.9661 2.30945 72.185 3.09049L46.1229 29.1526L44.7087 27.7384L70.7708 1.67628C72.3329 0.114184 74.8656 0.114183 76.4277 1.67628L84.913 10.1616C86.4751 11.7237 86.4751 14.2563 84.913 15.8184L58.8508 41.8805L57.4366 40.4663L83.4987 14.4042C84.2798 13.6232 84.2798 12.3568 83.4987 11.5758L75.0135 3.09049Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M27.7382 44.709L29.1524 46.1232L9.57205 65.7035L3.34951 83.2397L20.8858 77.0172L40.4661 57.4369L41.8803 58.8511L21.9805 78.7509L2.03924 85.8268C1.24584 86.1084 0.480873 85.3434 0.7624 84.55L7.83832 64.6088L27.7382 44.709Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M73.5984 18.6469L54.6078 37.6375L53.1936 36.2233L72.1841 17.2327C72.5747 16.8422 73.2078 16.8422 73.5984 17.2327C73.9889 17.6232 73.9889 18.2564 73.5984 18.6469Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M37.6372 54.608L36.223 53.1938L17.7369 71.6799C17.3464 72.0704 17.3464 72.7036 17.7369 73.0941C18.1274 73.4847 18.7606 73.4847 19.1511 73.0941L37.6372 54.608Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M14.9089 68.8519L33.395 50.3658L31.9808 48.9516L13.4947 67.4377C13.1042 67.8283 13.1042 68.4614 13.4947 68.8519C13.8852 69.2425 14.5184 69.2425 14.9089 68.8519Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M48.9514 31.9811L50.3656 33.3953L69.3562 14.4047C69.7467 14.0142 69.7467 13.381 69.3562 12.9905C68.9656 12.6 68.3325 12.6 67.9419 12.9905L48.9514 31.9811Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86.2756" y1="-27.6733" x2="-40.3333" y2="3.23036" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86.2756" y1="-27.6733" x2="-40.3333" y2="3.23036" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86.2756" y1="-27.6733" x2="-40.3333" y2="3.23036" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86.2756" y1="-27.6733" x2="-40.3333" y2="3.23036" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86.2756" y1="-27.6733" x2="-40.3333" y2="3.23036" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86.2756" y1="-27.6733" x2="-40.3333" y2="3.23036" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86.2756" y1="-27.6733" x2="-40.3333" y2="3.23036" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86.2756" y1="-27.6733" x2="-40.3333" y2="3.23036" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default ToolsAndResourcesIcon;