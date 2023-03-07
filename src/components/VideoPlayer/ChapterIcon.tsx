type PlayerIconProps = {
  width?: number;
  height?: number;
};
export function ChapterIcon(props: PlayerIconProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="16" fill="#160F2E" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.25 16C6.25 10.6152 10.6152 6.25 16 6.25C21.3848 6.25 25.75 10.6152 25.75 16C25.75 21.3848 21.3848 25.75 16 25.75C10.6152 25.75 6.25 21.3848 6.25 16ZM12.25 13.5625C12.25 12.8376 12.8376 12.25 13.5625 12.25H18.4375C19.1624 12.25 19.75 12.8376 19.75 13.5625V18.4375C19.75 19.1624 19.1624 19.75 18.4375 19.75H13.5625C12.8376 19.75 12.25 19.1624 12.25 18.4375V13.5625Z"
        fill="#FFE7DE"
      />
    </svg>
  );
}
