import { CalculatorCardProps } from "../../CalculatorCard/CalculatorCard.types.ts";

export type fieldTypes = {
    textTitle: string;
    textSection: string;
    calculateText: string;
}

export type CalculatorProps = {
    fieldValues: fieldTypes;
    cardValues: CalculatorCardProps;
    calculateText:  string;
}