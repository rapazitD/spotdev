import React from "react";
import { CardProps } from "./Card.types.tsx"
import styles from "./Card.module.css"
 
const Card = ({children, customClass } : CardProps) => {
    
    return (
        <div className={`${styles.card} ${customClass}`} >
            {children}
        </div>
    );
}

export default Card;