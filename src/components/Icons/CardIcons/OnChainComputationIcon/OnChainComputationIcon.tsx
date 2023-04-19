import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// on-chain-computation.svg
const OnChainComputationIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="103" height="106" viewBox="0 0 103 106" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M50 21C50 24.3137 52.6863 27 56 27C59.3137 27 62 24.3137 62 21C62 17.6863 59.3137 15 56 15C52.6863 15 50 17.6863 50 21ZM52 21C52 23.2091 53.7909 25 56 25C58.2091 25 60 23.2091 60 21C60 18.7909 58.2091 17 56 17C53.7909 17 52 18.7909 52 21Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M86 27C82.6863 27 80 24.3137 80 21C80 17.6863 82.6863 15 86 15C89.3137 15 92 17.6863 92 21C92 24.3137 89.3137 27 86 27Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M50 53C50 56.3137 52.6863 59 56 59C59.3137 59 62 56.3137 62 53C62 49.6863 59.3137 47 56 47C52.6863 47 50 49.6863 50 53ZM52 53C52 55.2091 53.7909 57 56 57C58.2091 57 60 55.2091 60 53C60 50.7909 58.2091 49 56 49C53.7909 49 52 50.7909 52 53Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M86 59C82.6863 59 80 56.3137 80 53C80 49.6863 82.6863 47 86 47C89.3137 47 92 49.6863 92 53C92 56.3137 89.3137 59 86 59Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M56 91C52.6863 91 50 88.3137 50 85C50 81.6863 52.6863 79 56 79C59.3137 79 62 81.6863 62 85C62 88.3137 59.3137 91 56 91Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M80 85C80 88.3137 82.6863 91 86 91C89.3137 91 92 88.3137 92 85C92 81.6863 89.3137 79 86 79C82.6863 79 80 81.6863 80 85ZM82 85C82 87.2091 83.7909 89 86 89C88.2091 89 90 87.2091 90 85C90 82.7909 88.2091 81 86 81C83.7909 81 82 82.7909 82 85Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M20 21C20 24.3137 22.6863 27 26 27C29.3137 27 32 24.3137 32 21C32 17.6863 29.3137 15 26 15C22.6863 15 20 17.6863 20 21Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 53C20 56.3137 22.6863 59 26 59C29.3137 59 32 56.3137 32 53C32 49.6863 29.3137 47 26 47C22.6863 47 20 49.6863 20 53ZM22 53C22 55.2091 23.7909 57 26 57C28.2091 57 30 55.2091 30 53C30 50.7909 28.2091 49 26 49C23.7909 49 22 50.7909 22 53Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M26 91C22.6863 91 20 88.3137 20 85C20 81.6863 22.6863 79 26 79C29.3137 79 32 81.6863 32 85C32 88.3137 29.3137 91 26 91Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0H4C1.79086 0 0 1.79086 0 4V102C0 104.209 1.79086 106 4 106H6C8.20914 106 10 104.209 10 102V86H12V96.06C12 97.6837 13.3163 99 14.94 99H37.06C38.6837 99 40 97.6837 40 96.06V86H42V96.06C42 97.6837 43.3163 99 44.94 99H67.06C68.6837 99 70 97.6837 70 96.06V86H72V96.06C72 97.6837 73.3163 99 74.94 99H97.06C98.6837 99 100 97.6837 100 96.06V86H102C102.552 86 103 85.5523 103 85C103 84.4477 102.552 84 102 84H100V73.94C100 72.3163 98.6837 71 97.06 71H74.94C73.3163 71 72 72.3163 72 73.94V84H70V73.94C70 72.3163 68.6837 71 67.06 71H44.94C43.3163 71 42 72.3163 42 73.94V84H40V73.94C40 72.3163 38.6837 71 37.06 71H14.94C13.3163 71 12 72.3163 12 73.94V84H10V54H12V64.06C12 65.6837 13.3163 67 14.94 67H37.06C38.6837 67 40 65.6837 40 64.06V54H42V64.06C42 65.6837 43.3163 67 44.94 67H67.06C68.6837 67 70 65.6837 70 64.06V54H72V64.06C72 65.6837 73.3163 67 74.94 67H97.06C98.6837 67 100 65.6837 100 64.06V54H102C102.552 54 103 53.5523 103 53C103 52.4477 102.552 52 102 52H100V41.94C100 40.3163 98.6837 39 97.06 39H74.94C73.3163 39 72 40.3163 72 41.94V52H70V41.94C70 40.3163 68.6837 39 67.06 39H44.94C43.3163 39 42 40.3163 42 41.94V52H40V41.94C40 40.3163 38.6837 39 37.06 39H14.94C13.3163 39 12 40.3163 12 41.94V52H10V22H12V32.06C12 33.6837 13.3163 35 14.94 35H37.06C38.6837 35 40 33.6837 40 32.06V22H42V32.06C42 33.6837 43.3163 35 44.94 35H67.06C68.6837 35 70 33.6837 70 32.06V22H72V32.06C72 33.6837 73.3163 35 74.94 35H97.06C98.6837 35 100 33.6837 100 32.06V22H102C102.552 22 103 21.5523 103 21C103 20.4477 102.552 20 102 20H100V9.94C100 8.31628 98.6837 7 97.06 7H74.94C73.3163 7 72 8.31629 72 9.94V20H70V9.94C70 8.31628 68.6837 7 67.06 7H44.94C43.3163 7 42 8.31629 42 9.94V20H40V9.94C40 8.31628 38.6837 7 37.06 7H14.94C13.3163 7 12 8.31629 12 9.94V20H10V4C10 1.79086 8.20914 0 6 0ZM44 32.06C44 32.5791 44.4209 33 44.94 33H67.06C67.5791 33 68 32.5791 68 32.06V9.94C68 9.42085 67.5791 9 67.06 9H44.94C44.4209 9 44 9.42085 44 9.94V32.06ZM98 9.94C98 9.42085 97.5791 9 97.06 9H74.94C74.4209 9 74 9.42085 74 9.94V32.06C74 32.5791 74.4209 33 74.94 33H97.06C97.5791 33 98 32.5791 98 32.06V9.94ZM44 64.06C44 64.5791 44.4209 65 44.94 65H67.06C67.5791 65 68 64.5791 68 64.06V41.94C68 41.4209 67.5791 41 67.06 41H44.94C44.4209 41 44 41.4209 44 41.94V64.06ZM98 41.94C98 41.4209 97.5791 41 97.06 41H74.94C74.4209 41 74 41.4209 74 41.94V64.06C74 64.5791 74.4209 65 74.94 65H97.06C97.5791 65 98 64.5791 98 64.06V41.94ZM44 96.06C44 96.5791 44.4209 97 44.94 97H67.06C67.5791 97 68 96.5791 68 96.06V73.94C68 73.4209 67.5791 73 67.06 73H44.94C44.4209 73 44 73.4209 44 73.94V96.06ZM98 73.94C98 73.4209 97.5791 73 97.06 73H74.94C74.4209 73 74 73.4209 74 73.94V96.06C74 96.5791 74.4209 97 74.94 97H97.06C97.5791 97 98 96.5791 98 96.06V73.94ZM2 4C2 2.89543 2.89543 2 4 2H6C7.10457 2 8 2.89543 8 4V102C8 103.105 7.10457 104 6 104H4C2.89543 104 2 103.105 2 102V4ZM14 9.94C14 9.42085 14.4209 9 14.94 9H37.06C37.5791 9 38 9.42085 38 9.94V32.06C38 32.5791 37.5791 33 37.06 33H14.94C14.4209 33 14 32.5791 14 32.06V9.94ZM14 41.94C14 41.4209 14.4209 41 14.94 41H37.06C37.5791 41 38 41.4209 38 41.94V64.06C38 64.5791 37.5791 65 37.06 65H14.94C14.4209 65 14 64.5791 14 64.06V41.94ZM14 73.94C14 73.4209 14.4209 73 14.94 73H37.06C37.5791 73 38 73.4209 38 73.94V96.06C38 96.5791 37.5791 97 37.06 97H14.94C14.4209 97 14 96.5791 14 96.06V73.94Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="103" y1="-34" x2="-48.6276" y2="1.96296" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default OnChainComputationIcon;