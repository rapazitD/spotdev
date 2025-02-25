import React, { useEffect, useState } from "react";
import { CalculatorCardProps, History } from "./CalculatorCard.types.tsx"
import Dropdown from "../Dropdown/Dropdown.tsx";

function TextComponent(props: Readonly<CalculatorCardProps>) {
    const { cardTitle }= props;
    const [result, setResult] = useState(0);
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [history, setHistory] = useState<History[]>([])
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

    const calculateResult = (option: string) => {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);

        let result: number | string = 0;
        if (option === "+") {
            result = num1 + num2;
        }
        if (option === "-") {
            result = num1 - num2;
        }
        if (option === "/") {
            if (num2 === 0) {
                return "divisionError";
            }
            result = num1 / num2;
        }
        if (option === "*") {
            result = num1 * num2;
        }
        return result;
    }

    const createHistroy = (result: number) => {
        const historyObject: History = {
            id: history.length + 1,
            firstNumber: Number(firstNumber),
            secondNumber: Number(secondNumber),
            operation: optionSelected,
            result: result
        }
        return historyObject;
    }

    const calculate = (option: string) => {
        const resultReceived = calculateResult(option)

        if (resultReceived === "divisionError") {
            alert('Dvision by zero is not allowed !')
        } else {
            const result: number = resultReceived;

            setResult(result);
            const historyObject = createHistroy(result)
            setHistory([...history, historyObject]);
        }
    }

    const changeFirstNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstNumber(e.target.value);
    }

    const changeSecondNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondNumber(e.target.value);
    }

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }
        
        calculate(optionSelected);
    }, [firstNumber, secondNumber])

    const options: string[] = ["+", "-", "*", "/"]
    
    const [optionSelected, setOptionSelected] = useState<string>(options[0]);
 
    const selectedOption = (option: string): void => {
        setOptionSelected(option);
    };

    return (
        <div>
            <h3>{cardTitle}</h3>
            <label htmlFor="firstNumber">First number:</label>
            <input 
                id="firstNumber" 
                name="age" 
                type="number" 
                placeholder="First number..." 
                value={firstNumber}
                onChange={changeFirstNumber}
                onClick={() => setFirstNumber("")} 
            />
            <label htmlFor="secondNumber">Second number:</label>
            <input id="secondNumber" 
                name="age" 
                type="number" 
                placeholder="Second number..." 
                value={secondNumber}
                onChange={changeSecondNumber}
                onClick={() => setSecondNumber("")}  
            />
            <button onClick={() => calculate(optionSelected)}>Calculate</button>
            <p>Result: {result}</p>
            
            <h1>Render history: </h1>
            <ul>
                {history.map((el) => (
                <li key={el.id}>
                    {el.id}. {el.firstNumber} {el.operation} {el.secondNumber} = {el.result}
                </li>
                ))}
            </ul>
                
            <Dropdown options={options} selectedOption={selectedOption}>

            </Dropdown>
            <p>Selected {optionSelected}</p>
        </div>
    )

}
export default TextComponent;