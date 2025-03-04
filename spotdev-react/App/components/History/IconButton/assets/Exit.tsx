import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
    width?: string;
    height?: string;
    fill?: string;
}

const Exit = ({width, height, fill} : SvgProps) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.749756 1.00012L12.7495 12.9998" stroke="#E24040" strokeWidth="0.988483"/>
            <path d="M0.749756 12.9998L12.7495 1.00004" stroke="#E24040" strokeWidth="0.988483"/>
        </svg>
    );
  };
  
  export default Exit;