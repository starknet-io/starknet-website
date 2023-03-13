import React from 'react';
import { CardIconProps } from "../IconInterface";

const OnrampIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const gradientIdPrefix = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
      <path d="M81.2681 76C82.0379 74.6667 83.9624 74.6667 84.7322 76L92.5264 89.5C93.2962 90.8333 92.334 92.5 90.7944 92.5H75.2059C73.6663 92.5 72.7041 90.8333 73.4739 89.5L81.2681 76Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M66 84H74.5V82H66V84Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M82 66V73H84V66H82Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M104 67C104 64.2386 101.761 62 99 62H67C64.2386 62 62 64.2386 62 67V99C62 101.761 64.2386 104 67 104H99C101.761 104 104 101.761 104 99V67ZM99 64C100.657 64 102 65.3431 102 67V99C102 100.657 100.657 102 99 102H67C65.3431 102 64 100.657 64 99V67C64 65.3431 65.3431 64 67 64H99Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M53.5576 24.585C53.6245 24.4205 53.6579 24.243 53.6579 24.0527C53.6579 23.8367 53.6245 23.6464 53.5576 23.4818C53.4959 23.3121 53.3956 23.1578 53.2567 23.019C53.1127 22.8801 52.925 22.7541 52.6936 22.641C52.4673 22.5227 52.1921 22.407 51.8681 22.2938C51.3487 22.1087 50.8755 21.9132 50.4486 21.7075C50.0218 21.5018 49.6592 21.2626 49.3609 20.9901C49.0574 20.7175 48.8234 20.4012 48.6589 20.0412C48.4943 19.676 48.412 19.244 48.412 18.7451C48.412 18.308 48.4866 17.9094 48.6357 17.5494C48.7849 17.1842 48.9957 16.8679 49.2683 16.6005C49.5409 16.333 49.87 16.117 50.2558 15.9525C50.6415 15.7879 51.0709 15.6825 51.5441 15.6362V13.9775H52.7784V15.6516C53.2413 15.7133 53.6579 15.8393 54.0282 16.0296C54.3985 16.2199 54.7148 16.4668 54.9771 16.7702C55.2342 17.0788 55.4322 17.4414 55.5711 17.858C55.7151 18.2694 55.7871 18.7323 55.7871 19.2466H53.6425C53.6425 18.9174 53.6013 18.6294 53.519 18.3825C53.4367 18.1357 53.321 17.9325 53.1719 17.7731C53.0381 17.6342 52.8761 17.5288 52.6858 17.4568C52.5007 17.3848 52.295 17.3488 52.0687 17.3488C51.8064 17.3488 51.5775 17.3848 51.3821 17.4568C51.1918 17.5237 51.0349 17.6188 50.9115 17.7422C50.7881 17.8708 50.6955 18.02 50.6338 18.1897C50.5772 18.3594 50.5489 18.5445 50.5489 18.7451C50.5489 18.9457 50.5772 19.1257 50.6338 19.2851C50.6955 19.4394 50.7984 19.5834 50.9424 19.7172C51.0812 19.8509 51.2664 19.9795 51.4978 20.1029C51.7292 20.2212 52.0173 20.342 52.3618 20.4655C52.8813 20.6609 53.3519 20.864 53.7736 21.0749C54.1953 21.2806 54.5579 21.5198 54.8613 21.7924C55.1596 22.0701 55.3885 22.3915 55.5479 22.7567C55.7125 23.1167 55.7948 23.5436 55.7948 24.0373C55.7948 24.4899 55.7202 24.8988 55.5711 25.2639C55.4219 25.6239 55.2085 25.9351 54.9308 26.1974C54.6531 26.4597 54.3188 26.6705 53.9279 26.83C53.537 26.9843 53.0999 27.0845 52.6164 27.1308V28.6429H51.3898V27.1308C50.9526 27.0897 50.5284 26.9945 50.1169 26.8454C49.7055 26.6911 49.3429 26.4699 49.0292 26.1819C48.7103 25.8939 48.4557 25.5313 48.2654 25.0942C48.0751 24.6519 47.98 24.1222 47.98 23.505H50.1323C50.1323 23.8753 50.1863 24.1864 50.2943 24.4385C50.4023 24.6853 50.5438 24.8808 50.7186 25.0248C50.8884 25.1739 51.0838 25.2793 51.3049 25.3411C51.5261 25.4028 51.7524 25.4336 51.9838 25.4336C52.277 25.4336 52.5316 25.3976 52.7476 25.3256C52.9636 25.2485 53.141 25.143 53.2799 25.0093C53.4033 24.891 53.4959 24.7496 53.5576 24.585Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M52 10C45.9249 10 41 14.9249 41 21C41 27.0751 45.9249 32 52 32C58.0751 32 63 27.0751 63 21C63 14.9249 58.0751 10 52 10ZM43 21C43 16.0294 47.0294 12 52 12C56.9706 12 61 16.0294 61 21C61 25.9706 56.9706 30 52 30C47.0294 30 43 25.9706 43 21Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M35 22H39.5V20H35V22Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M65 22H69.5V20H65V22Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M36 1.38277e-06C33.2386 1.50348e-06 31 2.23858 31 5L31 37C31 39.7614 33.2386 42 36 42L68 42C70.7614 42 73 39.7614 73 37V5C73 2.23858 70.7614 1.20706e-07 68 0L36 1.38277e-06ZM33 5C33 3.34315 34.3432 2 36 2L68 2C69.6569 2 71 3.34315 71 5V37C71 38.6569 69.6569 40 68 40L36 40C34.3432 40 33 38.6569 33 37V5Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M21 74C25.9706 74 30 78.0294 30 83C30 87.9706 25.9706 92 21 92C16.0294 92 12 87.9706 12 83C12 78.0294 16.0294 74 21 74Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M37.5 84H32V82H37.5V84Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M20 73V66H22V73H20Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.39876e-06 67C1.51947e-06 64.2386 2.23858 62 5 62H37C39.7614 62 42 64.2386 42 67L42 99C42 101.761 39.7614 104 37 104H5C2.23858 104 -1.20706e-07 101.761 0 99L1.39876e-06 67ZM5 64C3.34315 64 2 65.3432 2 67L2 99C2 100.657 3.34315 102 5 102H37C38.6569 102 40 100.657 40 99L40 67C40 65.3431 38.6569 64 37 64H5Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M22 29C22 25.134 25.134 22 29 22V20C24.0294 20 20 24.0294 20 29L20 60H22L22 29Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M75 22C78.866 22 82 25.134 82 29V60H84V29C84 24.0294 79.9706 20 75 20V22Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M57 84H44V82H57V84Z" fill="url(#paint15_linear_2334_238720)"/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.89399" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default OnrampIcon;