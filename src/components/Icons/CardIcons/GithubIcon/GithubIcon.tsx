import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// 
const GithubIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="95" height="92" viewBox="0 0 95 92" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M47.1636 0C35.9645 0.000464396 25.131 3.98585 16.6015 11.243C8.072 18.5002 2.40311 28.5557 0.609165 39.6101C-1.18478 50.6646 1.01328 61.9967 6.81006 71.5788C12.6068 81.1609 21.624 88.3677 32.2482 91.9097C34.6064 92.3225 35.4907 90.9076 35.4907 89.6694C35.4907 89.2802 35.4836 88.5778 35.4743 87.6611C35.4615 86.3995 35.4446 84.7319 35.4365 82.9164C35.4335 82.2548 35.4317 81.5737 35.4317 80.8853C34.7352 81.0135 34.069 81.1167 33.4318 81.1967C23.2288 82.4789 20.4608 77.8407 19.573 75.3437C18.5263 72.7635 16.8671 70.477 14.7387 68.6818C13.088 67.7974 10.7298 65.6161 14.6797 65.5573C16.1879 65.7209 17.6345 66.2458 18.8968 67.0873C20.1591 67.9288 21.1999 69.0621 21.9311 70.3914C22.5762 71.5502 23.4436 72.5703 24.4836 73.3933C25.5236 74.2163 26.7157 74.826 27.9918 75.1875C29.2678 75.549 30.6027 75.6551 31.9198 75.4997C33.2369 75.3444 34.5104 74.9307 35.6674 74.2824C35.804 72.6785 36.3274 71.1443 37.178 69.8048C37.599 69.142 38.1001 68.5268 38.6742 67.9744C37.8726 67.8844 37.0683 67.7775 36.2664 67.6488C26.5691 66.0924 17.2148 61.3494 17.2148 44.6875C17.1485 40.0001 18.8782 35.4651 22.049 32.0123C20.6072 27.9384 20.7759 23.4677 22.5207 19.514C22.5207 19.514 26.4705 18.2759 35.4906 24.3483C43.2079 22.2258 51.355 22.2258 59.0723 24.3483C68.0923 18.217 72.0423 19.514 72.0423 19.514C73.7873 23.4676 73.956 27.9385 72.5139 32.0123C75.6943 35.4591 77.4255 39.9982 77.3482 44.6875C77.3482 61.4194 67.926 66.1094 58.2116 67.654C57.418 67.7802 56.6224 67.8854 55.8299 67.9744C56.3825 68.5346 56.8728 69.15 57.2938 69.8095C57.7302 70.4931 58.092 71.2242 58.3716 71.9905C58.9209 73.496 59.1398 75.1021 59.0134 76.6997C59.0134 80.8986 58.9872 84.5489 58.9698 86.99C58.961 88.2162 58.9544 89.1374 58.9544 89.6696C58.9544 90.9077 59.8387 92.3815 62.1969 91.9099C72.8024 88.339 81.7936 81.1153 87.5657 71.5283C93.3378 61.9413 95.515 50.615 93.7086 39.5712C91.9022 28.5275 86.2299 18.4851 77.7041 11.2367C69.1783 3.98838 58.3541 0.00582425 47.1636 0ZM61.6928 89.9691C71.7905 86.5339 80.3492 79.6369 85.8523 70.4967C91.3798 61.316 93.4646 50.4698 91.7348 39.8941C90.005 29.3184 84.5731 19.7016 76.4087 12.7605C68.2445 5.81958 57.8795 2.00584 47.1637 2M61.6928 89.9691C61.3895 90.0184 61.2103 89.9984 61.1251 89.9796C61.0776 89.9692 61.0525 89.9578 61.0428 89.9529C61.0332 89.9479 61.03 89.945 61.0292 89.9443C61.027 89.9423 60.9544 89.8589 60.9544 89.6696C60.9544 89.1447 60.9609 88.2362 60.9696 87.0174C60.974 86.4082 60.9789 85.7215 60.9838 84.9664C60.9985 82.7272 61.0132 79.9054 61.0134 76.7755C61.1486 74.9189 60.8887 73.0543 60.2504 71.3049C60.0203 70.6741 59.7428 70.0636 59.4212 69.4781C63.779 68.6969 68.2155 67.2227 71.8095 64.2082C76.4335 60.3297 79.3449 54.1817 79.3482 44.7036C79.4234 39.9017 77.7896 35.2428 74.7603 31.5485C75.9687 27.3075 75.6626 22.7634 73.872 18.7064L73.5124 17.8917L72.6662 17.6138L72.0423 19.514C72.6662 17.6138 72.6643 17.6132 72.6623 17.6126L72.6583 17.6113L72.65 17.6086L72.6323 17.603L72.622 17.5998C72.6126 17.597 72.6027 17.594 72.5922 17.5909C72.5806 17.5875 72.5683 17.584 72.5554 17.5804C72.5362 17.5751 72.5157 17.5696 72.4936 17.5639C72.4197 17.5449 72.3294 17.5243 72.2225 17.5043C72.0087 17.4643 71.73 17.4271 71.3849 17.4097C70.6935 17.3748 69.7464 17.4201 68.5305 17.6742C66.2364 18.1539 63.0014 19.3734 58.7118 22.1843C51.209 20.28 43.3487 20.2804 35.8461 22.1856C31.5573 19.4009 28.3263 18.1839 26.0389 17.6977C24.8268 17.4401 23.8836 17.3887 23.1959 17.4172C22.8527 17.4314 22.5756 17.4654 22.3631 17.5026C22.3416 17.5064 22.3207 17.5102 22.3006 17.514H21.2172L20.6909 18.7065C18.9002 22.7643 18.5944 27.3094 19.8035 31.5512C16.7831 35.2488 15.1503 39.9027 15.2148 44.7014C15.2176 54.1498 18.1132 60.2963 22.7196 64.1824C26.2944 67.1983 30.709 68.6843 35.0569 69.4714C34.4722 70.5573 34.057 71.7319 33.8307 72.9544C33.1461 73.2378 32.4244 73.4264 31.6856 73.5135C30.6297 73.638 29.5597 73.5529 28.5369 73.2632C27.514 72.9735 26.5583 72.4847 25.7247 71.825C24.8921 71.1661 24.1975 70.3496 23.6806 69.4222C22.7946 67.8135 21.5343 66.4419 20.0062 65.4231C18.4764 64.4033 16.7233 63.7673 14.8955 63.569L14.773 63.5557L14.6499 63.5575C13.6126 63.573 12.4575 63.7092 11.6067 64.3339C11.1011 64.7052 10.6851 65.2657 10.5575 65.9927C10.4393 66.6656 10.6099 67.2462 10.7889 67.6391C11.1267 68.3805 11.7283 68.9702 12.1891 69.3584C12.6311 69.7307 13.125 70.0668 13.5933 70.3336C15.3941 71.8916 16.8029 73.8527 17.7044 76.0582C18.2819 77.6619 19.5332 80.0451 22.4342 81.6718C24.9559 83.0858 28.4883 83.7956 33.4378 83.2107C33.4435 84.3461 33.4524 85.4166 33.4613 86.3574C33.4659 86.844 33.4705 87.2936 33.4746 87.6988C33.4838 88.6063 33.4907 89.2909 33.4907 89.6694C33.4907 89.7465 33.4762 89.8134 33.4579 89.8591C33.4415 89.9003 33.4279 89.9113 33.4277 89.9115C33.4266 89.9125 33.4213 89.9172 33.4072 89.9243C33.393 89.9315 33.3621 89.945 33.3077 89.9574C33.2114 89.9792 33.0261 90.0003 32.7248 89.9601C22.6189 86.5499 14.0439 79.6724 8.52129 70.5436C2.97032 61.3678 0.865464 50.5162 2.58334 39.9305C4.30121 29.3448 9.72972 19.7158 17.8975 12.7663C26.0651 5.81707 36.4387 2.00071 47.1625 2" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="94.3275" y1="-29.5094" x2="-43.6998" y2="5.0337" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default GithubIcon;