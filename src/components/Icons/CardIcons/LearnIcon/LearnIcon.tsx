import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// 
const LearnIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="97" height="98" viewBox="0 0 97 98" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7067 9.70711C20.3162 10.0976 19.683 10.0976 19.2925 9.70711L11.2925 1.70711C10.902 1.31658 10.902 0.683417 11.2925 0.292893C11.683 -0.0976311 12.3162 -0.0976311 12.7067 0.292893L20.7067 8.29289C21.0973 8.68342 21.0973 9.31658 20.7067 9.70711ZM17.9996 30.5C17.9996 13.6553 31.6549 0 48.4996 0C65.3443 0 78.9996 13.6553 78.9996 30.5C78.9996 39.6953 75.2992 52.2391 64.4966 59.4951C61.8928 61.244 59.9996 64.0128 59.9996 67.1494V76H55.9996V58C55.9996 55.2386 53.7611 53 50.9996 53H46.9996C44.2382 53 41.9996 55.2386 41.9996 58V76H38.0034V66.6063C38.0034 63.4922 36.1456 60.7293 33.5376 59.0274C22.7138 51.9643 17.9996 40.2479 17.9996 30.5ZM53.9996 58V76H43.9996V58C43.9996 56.3431 45.3428 55 46.9996 55H50.9996C52.6565 55 53.9996 56.3431 53.9996 58ZM57.9996 35C57.9996 39.9706 53.9702 44 48.9996 44C44.0291 44 39.9996 39.9706 39.9996 35C39.9996 30.0294 44.0291 26 48.9996 26C53.9702 26 57.9996 30.0294 57.9996 35ZM59.9996 35C59.9996 41.0751 55.0748 46 48.9996 46C42.9245 46 37.9996 41.0751 37.9996 35C37.9996 28.9249 42.9245 24 48.9996 24C55.0748 24 59.9996 28.9249 59.9996 35ZM33.9996 80C33.9996 78.8954 34.8951 78 35.9996 78H61.9996C63.1042 78 63.9996 78.8954 63.9996 80C63.9996 81.1046 63.1042 82 61.9996 82V92C61.9996 95.3137 59.3133 98 55.9996 98H41.9996C38.6859 98 35.9996 95.3137 35.9996 92V82C34.8951 82 33.9996 81.1046 33.9996 80ZM23.7067 55.2929C24.0973 55.6834 24.0973 56.3166 23.7067 56.7071L15.7067 64.7071C15.3162 65.0976 14.683 65.0976 14.2925 64.7071C13.902 64.3166 13.902 63.6834 14.2925 63.2929L22.2925 55.2929C22.683 54.9024 23.3162 54.9024 23.7067 55.2929ZM73.2925 56.7071C72.902 56.3166 72.902 55.6834 73.2925 55.2929C73.683 54.9024 74.3162 54.9024 74.7067 55.2929L82.7067 63.2929C83.0973 63.6834 83.0973 64.3166 82.7067 64.7071C82.3162 65.0976 81.683 65.0976 81.2925 64.7071L73.2925 56.7071ZM77.7067 9.70711C77.3162 10.0976 76.683 10.0976 76.2925 9.70711C75.902 9.31658 75.902 8.68342 76.2925 8.29289L84.2925 0.292893C84.683 -0.0976311 85.3162 -0.0976311 85.7067 0.292893C86.0973 0.683417 86.0973 1.31658 85.7067 1.70711L77.7067 9.70711ZM13.3137 34.657C13.3137 35.2093 12.866 35.657 12.3137 35.657H1C0.447715 35.657 0 35.2093 0 34.657C0 34.1047 0.447715 33.657 1 33.657H12.3137C12.866 33.657 13.3137 34.1047 13.3137 34.657ZM84.6855 35.657C84.1333 35.657 83.6855 35.2093 83.6855 34.657C83.6855 34.1047 84.1333 33.657 84.6855 33.657H95.9993C96.5515 33.657 96.9993 34.1047 96.9993 34.657C96.9993 35.2093 96.5515 35.657 95.9993 35.657H84.6855Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="96.9992" y1="-31.434" x2="-45.5093" y2="2.99541" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default LearnIcon;