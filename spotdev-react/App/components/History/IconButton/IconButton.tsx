import React, { MouseEventHandler, useEffect, useState } from "react";
import styles from "./IconButton.module.css"
import BackArrow from "./assets/BackArrow.tsx"
import Exit from "./assets/Exit.tsx";
import List from "./assets/List.tsx";

export type BtnProps = {
    buttonText: string;
    textColor: string;
    color: string;
    type: 'back' | 'delete' | 'copy';
    onClick: MouseEventHandler<HTMLButtonElement>;
    isIconButton?: boolean;
}
 
const ClearButton = ({buttonText, textColor, color, type, onClick, isIconButton} : BtnProps) => {
    const [showButton, setShowButton] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if (windowWidth < 993) {
            setShowButton(true)
        }
    }, []);

    const handleHoverIn = () => {
        setShowButton(true);
    }

    const handleHoverOut = () => {
        setShowButton(false);
    }

    return (
        <button onClick={onClick}>
                <div
                    onMouseEnter={handleHoverIn} 
                    onMouseLeave={handleHoverOut}
                    className={isIconButton ? `${styles.containerIconBtn}` :`${styles.container}`}
                    style={{backgroundColor: color}}
                >   
                    <div className={isIconButton ? `${styles.iconBtnIcon}` : `${styles.icon}`}>
                        {type === "back" && 
                            <BackArrow 
                                fill={color} 
                                width="16px" 
                                height="18px"
                            />
                        }
                        {type === "delete" && 
                            <Exit
                                fill={color} 
                                width="16px" 
                                height="18px" 
                            />
                        }
                        {type === "copy" && 
                            <List
                                fill={color} 
                                width="16px" 
                                height="18px" 
                            />
                        }
                    </div>
                {showButton && !isIconButton &&
                    <div className={`${styles.textContainer}`} style={{ color: textColor }}>
                        {buttonText.toUpperCase()}
                    </div>
                }
        </div>
        </button>
        
    );
};

export default ClearButton;