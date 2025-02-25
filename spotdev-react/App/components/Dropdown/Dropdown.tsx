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
    }

    return (
        <>  
            <button 
                onClick={() => toggleDropDown()}
                className={`${styles.button}`}
            >
                    {optionDisplayed} 
            </button>
                {showDropdown && 
                    <div>
                        {options.map((option, index) => (
                        <div key={index+1}>
                            <button
                                onClick={(): void => {
                                    onClickHandler(option);
                                }}
                                className={`${styles.button}`}
                            >
                                {option}
                            </button>
                        </div>
                        ))}
                    </div>
                } 
        </>
    );
}

export default Dropdown;