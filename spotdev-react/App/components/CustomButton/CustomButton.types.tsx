import { MouseEventHandler } from "react";

export type test = {
    calculateText?: string;
}

export type CustomButtonProps = {
    isColored: boolean;
    buttonText?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    fieldValues?: test;
}