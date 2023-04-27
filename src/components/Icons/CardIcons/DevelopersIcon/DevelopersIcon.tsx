import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// developers.svg
const DevelopersIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="105" height="64" viewBox="0 0 105 64" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 2.23858 9.23858 0 12 0H93C95.7614 0 98 2.23858 98 5V55H105V59C105 61.7614 102.761 64 100 64H5C2.23857 64 0 61.7614 0 59V55H7V5ZM96 5V55H9V5C9 3.34315 10.3431 2 12 2H93C94.6569 2 96 3.34315 96 5ZM2 57H7H98H103V59C103 60.6569 101.657 62 100 62H5C3.34314 62 2 60.6569 2 59V57ZM30.8136 17.7072L20.4143 28.1065L30.8136 38.5059L29.3994 39.9201L17.5859 28.1065L29.3994 16.293L30.8136 17.7072ZM83.6922 28.1065L73.2928 17.7072L74.707 16.293L86.5206 28.1065L74.707 39.9201L73.2928 38.5059L83.6922 28.1065ZM52.5 48C63.2696 48 72 39.2696 72 28.5C72 17.7304 63.2696 9 52.5 9C41.7304 9 33 17.7304 33 28.5C33 39.2696 41.7304 48 52.5 48ZM40.3377 29.5788C37.9747 31.9418 37.9747 35.773 40.3377 38.136C42.7007 40.499 46.5318 40.499 48.8948 38.136L50.1253 36.9055L48.7111 35.4913L47.4806 36.7218C45.8987 38.3037 43.3338 38.3037 41.7519 36.7218C40.1699 35.1398 40.1699 32.575 41.7519 30.9931L48.0545 24.6905C49.6364 23.1085 52.2013 23.1085 53.7832 24.6905C55.3651 26.2724 55.3651 28.8372 53.7832 30.4192L51.5923 32.6101L53.0065 34.0243L55.1974 31.8334C57.5604 29.4704 57.5604 25.6392 55.1974 23.2762C52.8344 20.9133 49.0033 20.9132 46.6403 23.2762L40.3377 29.5788ZM65.2815 20.7546C67.6445 23.1176 67.6445 26.9488 65.2815 29.3118L58.9789 35.6144C56.6159 37.9774 52.7847 37.9774 50.4217 35.6144C48.0587 33.2514 48.0587 29.4202 50.4217 27.0572L52.6126 24.8663L54.0268 26.2805L51.8359 28.4714C50.254 30.0534 50.254 32.6182 51.8359 34.2002C53.4179 35.7821 55.9827 35.7821 57.5647 34.2002L63.8673 27.8976C65.4492 26.3156 65.4492 23.7508 63.8673 22.1688C62.2853 20.5869 59.7205 20.5869 58.1385 22.1688L56.908 23.3993L55.4938 21.9851L56.7243 20.7546C59.0873 18.3916 62.9185 18.3916 65.2815 20.7546Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
    <defs>
    <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="105" y1="-20.5283" x2="-35.7032" y2="35.8172" gradientUnits="userSpaceOnUse">
    <stop stop-color={gradientColor1}/>
    <stop offset="0.963542" stop-color={gradientColor2}/>
    </linearGradient>
    </defs>
    </svg>
  )
};

export default DevelopersIcon;