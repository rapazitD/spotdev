export type HistoryProps = {
    history: HistoryObj[];
    resetValues: Function;
}

export type HistoryObj = {
    id: number;
    firstNumber: number;
    secondNumber: number;
    operation: string;
    result: number;
}