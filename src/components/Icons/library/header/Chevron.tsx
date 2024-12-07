import { FC } from "react";

type ChevronIconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export const ChevronIcon: FC<ChevronIconProps> = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-right ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
};
