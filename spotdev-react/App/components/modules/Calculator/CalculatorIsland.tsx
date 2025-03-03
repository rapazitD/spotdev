import { CalculatorProps } from "./Calculator.type.tsx"
import TextComponent from "../../TextComponent/TextComponent.tsx";
import React from "react";
import CalculatorCard from "../../CalculatorCard/index.tsx";
import classes from "./Calculator.module.css"

const CalculatorIsland = (props: CalculatorProps) => {    
    const { fieldValues } = props;
    const {textTitle, textSection, calculateText } = fieldValues;
    
    return (
        <div className={`${classes.container}`}>
            <TextComponent textTitle={textTitle} textSection={textSection} />
            <CalculatorCard 
                cardTitle={"Calculation title"} 
                btnCalculateText={calculateText}                
            >
            </CalculatorCard>
        </div>
    );
};

export default CalculatorIsland;