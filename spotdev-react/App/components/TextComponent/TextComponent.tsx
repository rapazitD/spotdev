import React from "react";
import { TextComponentProps } from "./TextComponent.types.tsx"

function TextComponent(props: Readonly<TextComponentProps>) {
    const { textTitle, textSection }= props;

    return (
        <div>
            <h1>{textTitle}</h1>
            <p>{textSection}</p>
        </div>
    )

}
export default TextComponent;