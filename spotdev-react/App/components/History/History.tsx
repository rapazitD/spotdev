import React, { useEffect, useState } from "react";
import { HistoryObj, HistoryProps } from "./History.types.tsx"
import Card from "../Card/Card.tsx"
import styles from "./History.module.css"
import IconButton from "./IconButton/IconButton.tsx";
 
const History = ({history, resetValues} : HistoryProps) => {
    const [showHistory, setShowHistory] = useState<boolean>(false);
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
    const [historyArr, setHistoryArr] = useState<HistoryObj[]>([]);

    const onClickHandler = () => {
        resetValues();
        setShowHistory(false);
    }
    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }
        if (history !== null) {
            setShowHistory(true);
            setHistoryArr([...historyArr, history]);
            console.log('test', historyArr)
        } else {
            setShowHistory(false);
        }
    }, [history])

    
    const removeItem = (id: number) => {
        const newArray: HistoryObj[] = historyArr.filter(obj => obj.id !== id);
        setHistoryArr(newArray);
        if (historyArr.length === 0) {
            setShowHistory(false);
        }
    };

    const copyItem = () => {

    };

    return (
        <Card customClass={`${styles.card}`}>
            <div className={`${styles.titleSection}`}>
                <h3>Calculation History</h3>
                <IconButton 
                    color="#DEDCFF"
                    textColor="#544DB4" 
                    buttonText={"clear history"}
                    type="back" 
                    onClick={() => onClickHandler()}
                />
            </div>
            <div className={`${styles.historyContainer}`}>
                {showHistory ? (
                    <div>
                        {historyArr.map((el) => (
                            <div className={`${styles.historyCard}`} key={el.id}>
                                <div className={`${styles.iconSection}`}>
                                    <IconButton 
                                        buttonText="delete"
                                        textColor="#E24040"
                                        color="#ffffff" 
                                        type="delete"
                                        isIconButton={true}
                                        onClick={() => removeItem(el.id)}                                     
                                    />
                                    <IconButton 
                                        buttonText="list"
                                        textColor="#E24040"
                                        color="#ffffff" 
                                        type="copy"
                                        isIconButton={true}
                                        onClick={() => copyItem()}                                     
                                    />
                                </div>
                                <div className={`${styles.dataSection}`}>
                                    {el.firstNumber} {el.operation} {el.secondNumber} = {el.result}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={`${styles.infoText}`}>Press CALCULATE to start saving your results</div>
                )} 
            </div>
        </Card>
    );
};

export default History;