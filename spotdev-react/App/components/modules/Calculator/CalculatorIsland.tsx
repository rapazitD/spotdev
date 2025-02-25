import { CalculatorProps } from "./Calculator.type.tsx"
import TextComponent from "../../TextComponent/TextComponent.tsx";
import React from "react";
import CalculatorCard from "../../CalculatorCard/index.tsx";

const CalculatorIsland = (props: CalculatorProps) => {    
    const { fieldValues } = props;
    const {textTitle, textSection } = fieldValues;
    console.log(fieldValues);
    
    
    return (
        <div>
            <TextComponent textTitle={textTitle} textSection={textSection} />
            <p>test</p>
            <CalculatorCard cardTitle={"test title"} firstNumber={5} secondNumber={5}></CalculatorCard>
        </div>
    );
};

export default CalculatorIsland;