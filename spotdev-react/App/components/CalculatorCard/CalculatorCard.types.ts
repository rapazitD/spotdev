export type CalculatorCardProps = {
    cardTitle: string;
    btnCalculateText: string;
    inputFieldText1: string;
    inputFieldText2: string;
    primaryColor: string;
    apiKey: string;
}

export type CaldulatorCardHistoryProps = {
    id: number;
    firstNumber: number;
    secondNumber: number;
    operation: string;
    result: number;
}