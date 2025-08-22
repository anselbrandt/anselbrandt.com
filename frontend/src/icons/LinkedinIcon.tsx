import React from "react";

interface Props {
  width: number;
  height: number;
}

export const LinkedInIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="LinkedIn icon"
    >
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M7.2 9.6H4.8V19.2H7.2V9.6ZM6 8.4C6.96 8.4 7.68 7.68 7.68 6.72C7.68 5.76 6.96 5.04 6 5.04C5.04 5.04 4.32 5.76 4.32 6.72C4.32 7.68 5.04 8.4 6 8.4ZM19.2 19.2H16.8V14.16C16.8 12.72 16.8 10.8 14.64 10.8C12.48 10.8 12.24 12.48 12.24 14.04V19.2H9.84V9.6H12.12V10.92H12.16C12.52 10.2 13.44 9.36 14.88 9.36C17.76 9.36 19.2 11.16 19.2 13.92V19.2Z"
        fill="white"
      />
    </svg>
  );
};
