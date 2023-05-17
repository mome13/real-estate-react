type Props = {
  width?: number;
};

const DownArrow = ({ width = 16 }: Props) => {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      role="img"
      width={width}
      fill="#808080"
      style={{ pointerEvents: "none" }}
    >
      <path
        stroke="none"
        d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z"
      ></path>
    </svg>
  );
};

export default DownArrow;
