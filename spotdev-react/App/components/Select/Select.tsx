import React, { useState } from "react";
import { SelectProps } from "./Select.types.tsx"
import styles from "./Select.module.css"

 
const Select = ({label, options, selectedOption}: SelectProps) => {
    const [optionDisplayed, setOptionDisplayed] = useState<string>(options[0][0]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    
    const toggleDropDown = () => {
        setShowDropdown(!showDropdown);
    };

    const onClickHandler = (option: string) => {
        setOptionDisplayed(option);
        selectedOption(option);
        setShowDropdown(!showDropdown)
    }

    return (
        <div className={`${styles.container}`}>  
            <h6 className={`${styles.h6}`}>{label}</h6>
            <button 
                onClick={() => toggleDropDown()}
                className={`${styles.selectOption}`}
            >
                <span>
                    {optionDisplayed}
                </span>   
            </button>
            
            {showDropdown && 
                <div className={`${styles.dropdownContainer}`}>
                    {options.map((option, index) => (
                    <div key={index+1}>
                        <button
                            onClick={(): void => {
                                onClickHandler(option[0]);
                            }}
                            className={`${styles.dropdownBtn}`}
                        >
                            <span className={`${styles.dropdownIconBtn}`}>
                                {option[0]}
                            </span>
                        </button>
                    </div>
                    ))}
                </div>
            } 
        </div>    
    );
}

export default Select;