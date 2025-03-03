import React from "react";
import { TextComponentProps } from "./TextComponent.types.tsx"
import styles from "./TextComponent.module.css"

function TextComponent(props: Readonly<TextComponentProps>) {
    const { textTitle, textSection }= props;

    return (
        <div className={`${styles.container}`}>
            <h1>{textTitle}</h1>
            <p>{textSection}</p>
        </div>
    )

}
export default TextComponent;