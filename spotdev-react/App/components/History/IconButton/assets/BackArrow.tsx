import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
    width?: string;
    height?: string;
    fill?: string;
}

const BackArrow = ({width, height, fill} : SvgProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99943 4.27278C8.44416 3.85312 9.98753 3.92679 11.3857 4.48214C12.7839 5.0375 13.9572 6.04288 14.7203 7.33945C15.4833 8.63603 15.7926 10.1499 15.5993 11.6419C15.406 13.1338 14.7211 14.5189 13.6528 15.5782C12.5845 16.6374 11.1937 17.3106 9.70015 17.4913C8.20659 17.672 6.69541 17.3499 5.40534 16.5759C4.11527 15.8019 3.11986 14.6201 2.57636 13.2172C2.03286 11.8144 1.97226 10.2705 2.40413 8.82934" stroke="#544DB4"/>
            <path d="M9.38315 7.14688L6.41544 3.93179L9.63053 0.964076" stroke="#544DB4"/>
        </svg> 
    );
  };
  
  export default BackArrow;