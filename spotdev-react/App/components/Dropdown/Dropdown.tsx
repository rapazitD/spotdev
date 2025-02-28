import React, { useState } from "react";
import { DropdownProps } from "./Dropdown.types.tsx"
import styles from "./Dropdown.module.css"
 
const Dropdown = ({options, selectedOption} : DropdownProps) => {
    const [optionDisplayed, setOptionDisplayed] = useState<string>(options[0]);
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
        <>  
            <button 
                onClick={() => toggleDropDown()}
                className={`${styles.button}`}
            >
                <span className={`${styles.dropdownIconBtn}`}>
                    {optionDisplayed}
                </span>   
            </button>
                {showDropdown && 
                    <div className={`${styles.dropdownContainer}`}>
                        {options.map((option, index) => (
                        <div key={index+1}>
                            <button
                                onClick={(): void => {
                                    onClickHandler(option);
                                }}
                                className={`${styles.dropdownBtn}`}
                            >
                                <span className={`${styles.dropdownIconBtn}`}>
                                    {option}
                                </span>
                            </button>
                        </div>
                        ))}
                    </div>
                } 
        </>
    );
}

export default Dropdown;