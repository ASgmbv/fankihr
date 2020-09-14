import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.871 12.8h5.13a1 1 0 01.993 1.107l-.449 4.15L17.13 11.2H12a1 1 0 01-.994-1.107l.45-4.15L6.87 12.8zm4.24 10.2a.998.998 0 01-.994-1.107l.77-7.093H5a1 1 0 01-.83-1.556l7.888-11.8a1 1 0 011.825.663L13.114 9.2H19a1.001 1.001 0 01.831 1.556l-7.889 11.8a.998.998 0 01-.83.444z"
        fill="#000"
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={4}
        y={1}
        width={16}
        height={22}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.871 12.8h5.13a1 1 0 01.993 1.107l-.449 4.15L17.13 11.2H12a1 1 0 01-.994-1.107l.45-4.15L6.87 12.8zm4.24 10.2a.998.998 0 01-.994-1.107l.77-7.093H5a1 1 0 01-.83-1.556l7.888-11.8a1 1 0 011.825.663L13.114 9.2H19a1.001 1.001 0 01.831 1.556l-7.889 11.8a.998.998 0 01-.83.444z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#prefix__a)">
        <path className="svg-icon" d="M0 0h24v24H0z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
