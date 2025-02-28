import React, { useEffect, useState } from "react";
import { HistoryProps } from "./History.types.tsx"
import Card from "../Card/Card.tsx"
import styles from "./History.module.css"
import CustomButton from "../CustomButton/CustomButton.tsx";
 
const History = ({history, resetValues} : HistoryProps) => {
    const [showHistory, setShowHistory] = useState<boolean>(false);
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
    
    const onClickHandler = () => {
        resetValues();
        setShowHistory(false);
    }
    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }
        if (history.length > 0) {
            setShowHistory(true);
        }
    }, [history])
    
    return (
        <Card customClass={`${styles.card}`}>
            <h3>Calculation History</h3>
            <CustomButton 
                isColored={false}
                buttonText="clear values"
                onClick={()=> onClickHandler()}
            />
            <div className={`${styles.historyContainer}`}>
                {showHistory ? (
                    <div>
                        {history.map((el) => (
                            <Card key={el.id}>
                                <div >
                                    {el.id}. {el.firstNumber} {el.operation} {el.secondNumber} = {el.result}
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p>ss</p>
                )} 
            </div>
            
        </Card>
    );
};

export default History;