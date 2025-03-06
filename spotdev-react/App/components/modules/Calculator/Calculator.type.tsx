import { CalculatorCardProps } from "../../CalculatorCard/CalculatorCard.types.ts";

export type fieldTypes = {
    textTitle: string;
    textSection: string;
    calculateText: string;
    inputFieldOne: string;
    inputFieldTwo: string;
    primaryColor: string;
}

export type CalculatorProps = {
    fieldValues: fieldTypes;
    cardValues: CalculatorCardProps;
    calculateText:  string;
    apiKey: string;
}