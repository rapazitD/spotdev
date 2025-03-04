import React, { useEffect, useState } from "react";
import { CalculatorCardProps, CaldulatorCardHistoryProps } from "./CalculatorCard.types.tsx"
import Dropdown from "../Dropdown/Dropdown.tsx";
import CustomButton from "../CustomButton/CustomButton.tsx";
import Card from "../Card/Card.tsx";
import styles from "./CalculatorFIelds.module.css"
import History from "../History/History.tsx";
import Select from "../Select/Select.tsx";
import CurencyComponent from "../CurencyComponent/CurencyComponent.tsx";

function TextComponent(props: Readonly<CalculatorCardProps>) {
    const { cardTitle, btnCalculateText, inputFieldText1, inputFieldText2 }= props;

    const [result, setResult] = useState<number>(0);
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [history, setHistory] = useState<CaldulatorCardHistoryProps>(null)
    const [historyId, setHistoryId] = useState<number>(0);
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
    const options: string[] = ["+", "-", "x", "/"]
    const [optionSelected, setOptionSelected] = useState<string>(options[0]);

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
        if (option === "x") {
            result = num1 * num2;
        }
        return result;
    }

    const createHistroy = (result: number) => {
        const historyObject: CaldulatorCardHistoryProps = {
            id: historyId,
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
            setHistoryId(historyId + 1);
            const historyObject = createHistroy(result)
            setHistory(historyObject);
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
    }, [firstNumber, secondNumber, optionSelected])
 
    const selectedOption = (option: string): void => {
        setOptionSelected(option);
    };

    const resetValues = () => {
        setHistory(null);
    };

    const resetCalculatorValues = () => {
        setFirstNumber('');
        setSecondNumber('');
    };

    // exchange zone
    const [historyToggle, setHistoryToggle] = useState<boolean>(false);
    const expandCard = historyToggle ? `${styles.expandedCard}` : `` ;
    const [curency1, setCurency1] = useState<string>('AED') // AED
    const [curency2, setCurency2] = useState<string>('AED')

    const test = () => {
        setHistoryToggle(!historyToggle)
    }

    const startCurrency = (option) => {
        setCurency1(option);
    }
    const endCurrency = (option) => {
        setCurency2(option)
    }

    const currencyCodes = {"result":"success","documentation":"https://www.exchangerate-api.com/docs","terms_of_use":"https://www.exchangerate-api.com/terms","supported_codes":[["AED","UAE Dirham"],["AFN","Afghan Afghani"],["ALL","Albanian Lek"],["AMD","Armenian Dram"],["ANG","Netherlands Antillian Guilder"],["AOA","Angolan Kwanza"],["ARS","Argentine Peso"],["AUD","Australian Dollar"],["AWG","Aruban Florin"],["AZN","Azerbaijani Manat"],["BAM","Bosnia and Herzegovina Convertible Mark"],["BBD","Barbados Dollar"],["BDT","Bangladeshi Taka"],["BGN","Bulgarian Lev"],["BHD","Bahraini Dinar"],["BIF","Burundian Franc"],["BMD","Bermudian Dollar"],["BND","Brunei Dollar"],["BOB","Bolivian Boliviano"],["BRL","Brazilian Real"],["BSD","Bahamian Dollar"],["BTN","Bhutanese Ngultrum"],["BWP","Botswana Pula"],["BYN","Belarusian Ruble"],["BZD","Belize Dollar"],["CAD","Canadian Dollar"],["CDF","Congolese Franc"],["CHF","Swiss Franc"],["CLP","Chilean Peso"],["CNY","Chinese Renminbi"],["COP","Colombian Peso"],["CRC","Costa Rican Colon"],["CUP","Cuban Peso"],["CVE","Cape Verdean Escudo"],["CZK","Czech Koruna"],["DJF","Djiboutian Franc"],["DKK","Danish Krone"],["DOP","Dominican Peso"],["DZD","Algerian Dinar"],["EGP","Egyptian Pound"],["ERN","Eritrean Nakfa"],["ETB","Ethiopian Birr"],["EUR","Euro"],["FJD","Fiji Dollar"],["FKP","Falkland Islands Pound"],["FOK","Faroese Króna"],["GBP","Pound Sterling"],["GEL","Georgian Lari"],["GGP","Guernsey Pound"],["GHS","Ghanaian Cedi"],["GIP","Gibraltar Pound"],["GMD","Gambian Dalasi"],["GNF","Guinean Franc"],["GTQ","Guatemalan Quetzal"],["GYD","Guyanese Dollar"],["HKD","Hong Kong Dollar"],["HNL","Honduran Lempira"],["HRK","Croatian Kuna"],["HTG","Haitian Gourde"],["HUF","Hungarian Forint"],["IDR","Indonesian Rupiah"],["ILS","Israeli New Shekel"],["IMP","Manx Pound"],["INR","Indian Rupee"],["IQD","Iraqi Dinar"],["IRR","Iranian Rial"],["ISK","Icelandic Króna"],["JEP","Jersey Pound"],["JMD","Jamaican Dollar"],["JOD","Jordanian Dinar"],["JPY","Japanese Yen"],["KES","Kenyan Shilling"],["KGS","Kyrgyzstani Som"],["KHR","Cambodian Riel"],["KID","Kiribati Dollar"],["KMF","Comorian Franc"],["KRW","South Korean Won"],["KWD","Kuwaiti Dinar"],["KYD","Cayman Islands Dollar"],["KZT","Kazakhstani Tenge"],["LAK","Lao Kip"],["LBP","Lebanese Pound"],["LKR","Sri Lanka Rupee"],["LRD","Liberian Dollar"],["LSL","Lesotho Loti"],["LYD","Libyan Dinar"],["MAD","Moroccan Dirham"],["MDL","Moldovan Leu"],["MGA","Malagasy Ariary"],["MKD","Macedonian Denar"],["MMK","Burmese Kyat"],["MNT","Mongolian Tögrög"],["MOP","Macanese Pataca"],["MRU","Mauritanian Ouguiya"],["MUR","Mauritian Rupee"],["MVR","Maldivian Rufiyaa"],["MWK","Malawian Kwacha"],["MXN","Mexican Peso"],["MYR","Malaysian Ringgit"],["MZN","Mozambican Metical"],["NAD","Namibian Dollar"],["NGN","Nigerian Naira"],["NIO","Nicaraguan Córdoba"],["NOK","Norwegian Krone"],["NPR","Nepalese Rupee"],["NZD","New Zealand Dollar"],["OMR","Omani Rial"],["PAB","Panamanian Balboa"],["PEN","Peruvian Sol"],["PGK","Papua New Guinean Kina"],["PHP","Philippine Peso"],["PKR","Pakistani Rupee"],["PLN","Polish Złoty"],["PYG","Paraguayan Guaraní"],["QAR","Qatari Riyal"],["RON","Romanian Leu"],["RSD","Serbian Dinar"],["RUB","Russian Ruble"],["RWF","Rwandan Franc"],["SAR","Saudi Riyal"],["SBD","Solomon Islands Dollar"],["SCR","Seychellois Rupee"],["SDG","Sudanese Pound"],["SEK","Swedish Krona"],["SGD","Singapore Dollar"],["SHP","Saint Helena Pound"],["SLE","Sierra Leonean Leone"],["SLL","Sierra Leonean Leone"],["SOS","Somali Shilling"],["SRD","Surinamese Dollar"],["SSP","South Sudanese Pound"],["STN","São Tomé and Príncipe Dobra"],["SYP","Syrian Pound"],["SZL","Eswatini Lilangeni"],["THB","Thai Baht"],["TJS","Tajikistani Somoni"],["TMT","Turkmenistan Manat"],["TND","Tunisian Dinar"],["TOP","Tongan Paʻanga"],["TRY","Turkish Lira"],["TTD","Trinidad and Tobago Dollar"],["TVD","Tuvaluan Dollar"],["TWD","New Taiwan Dollar"],["TZS","Tanzanian Shilling"],["UAH","Ukrainian Hryvnia"],["UGX","Ugandan Shilling"],["USD","United States Dollar"],["UYU","Uruguayan Peso"],["UZS","Uzbekistani So'm"],["VES","Venezuelan Bolívar Soberano"],["VND","Vietnamese Đồng"],["VUV","Vanuatu Vatu"],["WST","Samoan Tālā"],["XAF","Central African CFA Franc"],["XCD","East Caribbean Dollar"],["XDR","Special Drawing Rights"],["XOF","West African CFA franc"],["XPF","CFP Franc"],["YER","Yemeni Rial"],["ZAR","South African Rand"],["ZMW","Zambian Kwacha"],["ZWL","Zimbabwean Dollar"]]}

    return (
        <div className={`${styles.moduleContainer}`}>
            <Card customClass={`${expandCard} ${styles.container}`}>
                <h3>{cardTitle}</h3>
                <div className={`${styles.box}`}>
                    <div> 
                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="first-number">{inputFieldText1}<span className={`${styles.tooltip}`}>i</span></label>
                            <input 
                                type="number" 
                                id="first-number" 
                                placeholder="First number..."
                                value={firstNumber}
                                onChange={changeFirstNumber}
                                onClick={() => setFirstNumber("")}  
                            />
                        </div>
                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="first-number">{inputFieldText2}<span className={`${styles.tooltip}`}>i</span></label>
                            <input 
                                type="number" 
                                id="secondNumber" 
                                placeholder="Second number..."
                                value={secondNumber}
                                onChange={changeSecondNumber}
                                onClick={() => setSecondNumber("")}  
                            />
                        </div>
                    </div>
                    <div>
                    <Dropdown 
                        options={options} 
                        selectedOption={selectedOption}
                    />
                    </div>
                </div>
                
                <div className={`${styles.curencySection}`}>
                    <h3>Add Conversion ?</h3>
                    <label className={`${styles.switch}`}>
                        <input type="checkbox" />
                        <span onClick={test} className={`${styles.slider} ${styles.round}`}></span>
                    </label>
                </div>

                {historyToggle && 
                    <div className={`${styles.currencyContainer}`}>
                        <Select 
                            options={currencyCodes.supported_codes} 
                            label={"Start Currency"} 
                            selectedOption={startCurrency}>
                        </Select>
                        <Select 
                            options={currencyCodes.supported_codes} 
                            label={"Destination Currency"} 
                            selectedOption={endCurrency}>
                        </Select>
                    </div>
                }

                <div className={`${styles.buttonsSection}`}>
                    <CustomButton 
                        isColored={true}
                        buttonText={btnCalculateText}
                        onClick={()=> calculate(optionSelected)}
                    />
                    <CustomButton 
                        isColored={false}
                        buttonText="reset values"
                        onClick={()=> resetCalculatorValues()}
                    />
                </div> 
            </Card>
            
            <div className={`${styles.secondContainer}`}>
                <CurencyComponent
                    firstNumber={firstNumber}
                    secondNumber={secondNumber}
                    result={result}
                    operation={optionSelected} 
                    firstCurrency={curency1} 
                    secondCurrency={curency2}                
                />

                <History history={history} resetValues={resetValues}/>
            </div>
        </div>
    )
}
export default TextComponent;