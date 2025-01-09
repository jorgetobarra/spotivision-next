export function Loader() {
  return (
    <div className="loader flex flex-row items-center justify-center">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="none"
          strokeWidth="4"
          fill="lightgray"
        >
          <animate
            attributeName="r"
            from="20"
            to="20"
            begin="0s"
            dur="1.4s"
            values="20;10;20"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            from="1"
            to="0"
            begin="0s"
            dur="1.4s"
            values="1;0;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            from="2"
            to="2"
            begin="0s"
            dur="1.4s"
            values="2;0;2"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <p className="pl-2 text-text dark:text-darkText"> Loading...</p>
    </div>
  );
}
