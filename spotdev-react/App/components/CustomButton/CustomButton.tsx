import React from "react";
import styles from "./CustomButton.module.css"
import { CustomButtonProps } from "./CustomButton.types.tsx";

function CustomButton(props : Readonly<CustomButtonProps>) {
    const {isColored, buttonText, onClick } = props;
   
    
    const test = isColored ? `${styles.colorBtn}` : `${styles.borderBtn}`;
    
    return (
        <button 
            className={test}
            onClick={onClick}
        >
            {buttonText.toUpperCase()}
        </button>

    )
}
export default CustomButton;