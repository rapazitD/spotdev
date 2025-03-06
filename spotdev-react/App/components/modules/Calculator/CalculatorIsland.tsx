import { CalculatorProps } from "./Calculator.type.tsx"
import TextComponent from "../../TextComponent/TextComponent.tsx";
import React from "react";
import CalculatorCard from "../../CalculatorCard/index.tsx";
import classes from "./Calculator.module.css"

const CalculatorIsland = (props: CalculatorProps) => {    
    const { fieldValues, apiKey } = props;
    const {textTitle, textSection, calculateText, inputFieldOne, inputFieldTwo, primaryColor } = fieldValues;
    
    return (
        <div className={`${classes.container}`}>
            <TextComponent textTitle={textTitle} textSection={textSection} />
            <CalculatorCard 
                cardTitle={"Calculation title"} 
                btnCalculateText={calculateText}
                inputFieldText1={inputFieldOne}
                inputFieldText2={inputFieldTwo}
                primaryColor={primaryColor}
                apiKey={apiKey}              
            >
            </CalculatorCard>
        </div>
    );
};

export default CalculatorIsland;