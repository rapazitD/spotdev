import { CalculatorCardProps } from "../../CalculatorCard/CalculatorCard.types.ts";
import {type TextComponentProps} from "../../TextComponent/TextComponent.types.ts"

export type CalculatorProps = {
    fieldValues: TextComponentProps;
    cardValues: CalculatorCardProps;
}