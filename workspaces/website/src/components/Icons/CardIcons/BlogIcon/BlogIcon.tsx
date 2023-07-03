import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
//
const BlogIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M98 3C98 1.34314 96.6569 0 95 0H20C18.3431 0 17 1.34315 17 3V60H5C2.23858 60 0 62.2386 0 65V87.7832C0 92.848 4.17759 97.1354 9.24055 97C9.59798 96.9904 9.5 97 9.5 97H89C93.9706 97 98 92.9706 98 88V3ZM15.3426 95C17.5641 93.3588 19 90.7217 19 87.7565V3C19 2.44772 19.4477 2 20 2H95C95.5523 2 96 2.44772 96 3V88C96 91.866 92.866 95 89 95H15.3426ZM17 62V87.7565C17 91.5496 13.9789 94.6526 10.1871 94.754L9.1871 94.7807C5.24924 94.886 2 91.7225 2 87.7832V65C2 63.3431 3.34315 62 5 62H17ZM31 54C31 52.8954 31.8954 52 33 52H82C83.1046 52 84 52.8954 84 54C84 55.1046 83.1046 56 82 56H33C31.8954 56 31 55.1046 31 54ZM33 64C31.8954 64 31 64.8954 31 66C31 67.1046 31.8954 68 33 68H71C72.1046 68 73 67.1046 73 66C73 64.8954 72.1046 64 71 64H33ZM31 78C31 76.8954 31.8954 76 33 76H75C76.1046 76 77 76.8954 77 78C77 79.1046 76.1046 80 75 80H33C31.8954 80 31 79.1046 31 78ZM34 11C32.8954 11 32 11.8954 32 13V42C32 43.1046 32.8954 44 34 44H81C82.1046 44 83 43.1046 83 42V13C83 11.8954 82.1046 11 81 11H34Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="98" y1="-31.1142" x2="-45.6475" y2="4.3087" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default BlogIcon;
