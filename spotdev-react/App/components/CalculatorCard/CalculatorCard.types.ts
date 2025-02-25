export type CalculatorCardProps = {
    cardTitle: string;
    firstNumber: number;
    secondNumber: number;
}

export type History = {
    id: number;
    firstNumber: number;
    secondNumber: number;
    operation: string;
    result: number;
}