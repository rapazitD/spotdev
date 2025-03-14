import React, { useEffect, useState } from "react";
import { CurrencyProps } from "./CurencyComponent.types.tsx";
import styles from "./CurencyComponent.module.css"
import Card from "../Card/Card.tsx";

 
const CurencyComponent = ({
    firstNumber, 
    secondNumber, 
    result, 
    operation, 
    firstCurrency, 
    secondCurrency,
    apiKey
} : CurrencyProps) => {
    const [convertedResult, setConvertedResult] = useState<number>(0);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataForPosts = async () => {
            try {
                const response = await fetch(
                    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${firstCurrency}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let postsData = await response.json();
                    setData(postsData);
                    
                    setError(null);
                } catch (err) {
                    setError(err.message);
                    setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDataForPosts();
    }, [firstCurrency]);

    // const data = {result:"success", documentation:"https://www.exchangerate-api.com/docs", terms_of_use:"https://www.exchangerate-api.com/terms", time_last_update_unix:1740528002, time_last_update_utc: "Wed, 26 Feb 2025 00:00:02 +0000", time_next_update_unix:1740614402, time_next_update_utc:"Thu, 27 Feb 2025 00:00:02 +0000", base_code:"USD", conversion_rates:{"USD":1,"AED":3.6725,"AFN":73.7759,"ALL":94.3495,"AMD":394.0833,"ANG":1.79,"AOA":918.6692,"ARS":1061.63,"AUD":1.5761,"AWG":1.79,"AZN":1.7005,"BAM":1.8616,"BBD":2,"BDT":121.4572,"BGN":1.8618,"BHD":0.376,"BIF":2965.3858,"BMD":1,"BND":1.3373,"BOB":6.906,"BRL":5.7781,"BSD":1,"BTN":87.1489,"BWP":13.7873,"BYN":3.2653,"BZD":2,"CAD":1.4279,"CDF":2853.7301,"CHF":0.8934,"CLP":943.0018,"CNY":7.2568,"COP":4109.5053,"CRC":505.6629,"CUP":24,"CVE":104.9537,"CZK":23.7488,"DJF":177.721,"DKK":7.0976,"DOP":62.1806,"DZD":134.6035,"EGP":50.5837,"ERN":15,"ETB":126.1123,"EUR":0.9518,"FJD":2.2923,"FKP":0.7898,"FOK":7.0985,"GBP":0.7898,"GEL":2.8135,"GGP":0.7898,"GHS":15.5105,"GIP":0.7898,"GMD":72.5869,"GNF":8629.2114,"GTQ":7.7008,"GYD":209.26,"HKD":7.7739,"HNL":25.5323,"HRK":7.1716,"HTG":131.2469,"HUF":382.0398,"IDR":16362.8346,"ILS":3.5801,"IMP":0.7898,"INR":87.1491,"IQD":1312.3279,"IRR":41998.9469,"ISK":138.7965,"JEP":0.7898,"JMD":157.3903,"JOD":0.709,"JPY":149.1802,"KES":129.3813,"KGS":87.3664,"KHR":4005.7661,"KID":1.576,"KMF":468.2702,"KRW":1431.4825,"KWD":0.3084,"KYD":0.8333,"KZT":499.0656,"LAK":21753.7432,"LBP":89500,"LKR":295.1568,"LRD":199.0251,"LSL":18.4059,"LYD":4.8945,"MAD":9.9342,"MDL":18.6367,"MGA":4744.7477,"MKD":58.7963,"MMK":2095.4993,"MNT":3490.6685,"MOP":8.0072,"MRU":40.0057,"MUR":46.3869,"MVR":15.461,"MWK":1746.4,"MXN":20.4721,"MYR":4.422,"MZN":63.9161,"NAD":18.4059,"NGN":1501.016,"NIO":36.7228,"NOK":11.112,"NPR":139.4383,"NZD":1.7462,"OMR":0.3845,"PAB":1,"PEN":3.684,"PGK":4.0689,"PHP":57.8974,"PKR":279.6032,"PLN":3.9419,"PYG":7893.3889,"QAR":3.64,"RON":4.7442,"RSD":111.7353,"RUB":86.5857,"RWF":1432.503,"SAR":3.75,"SBD":8.66,"SCR":14.4825,"SDG":452.6649,"SEK":10.6023,"SGD":1.3374,"SHP":0.7898,"SLE":22.8566,"SLL":22856.6481,"SOS":571.1557,"SRD":35.7763,"SSP":4401.3244,"STN":23.3199,"SYP":12934.6054,"SZL":18.4059,"THB":33.7456,"TJS":10.9559,"TMT":3.5,"TND":3.1491,"TOP":2.378,"TRY":36.4643,"TTD":6.7579,"TVD":1.576,"TWD":32.7599,"TZS":2571.7195,"UAH":41.7057,"UGX":3679.0815,"UYU":43.0399,"UZS":12891.9564,"VES":64.0191,"VND":25516.8889,"VUV":122.6175,"WST":2.8043,"XAF":624.3603,"XCD":2.7,"XDR":0.7612,"XOF":624.3603,"XPF":113.5839,"YER":246.9677,"ZAR":18.4121,"ZMW":28.3069,"ZWL":26.4844}}
    
    useEffect(() => {
        if (data !== null) {
            const res = result * Number(data.conversion_rates[secondCurrency]); 
            const resultRounded = Number(res.toFixed(2));       
            setConvertedResult(resultRounded);
        }
        setLoading(false);
    }, [result, firstCurrency, secondCurrency]);

    if(error) return <div>Error: {error}</div>    
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Card customClass={`${styles.curencyCard}`}>
                    <div className={`${styles.container}`}>
                        <div className={`${styles.calculation}`}>
                            <div className={`${styles.number}`}>{firstNumber !== '' ? firstNumber : 0}</div>
                            <div className={`${styles.operator}`}>{operation}</div>
                            <div className={`${styles.number}`}>{secondNumber !== '' ? secondNumber : 0}</div>
                        </div>
                        <div className={`${styles.result}`}>
                            <div className={`${styles.converted}`}>
                                <div className={`${styles.amount}`}>{result}</div>
                                <div className={`${styles.currency}`}>
                                    <div className={`${styles.currencyFlag}`}></div>
                                    <div className={`${styles.currencyName}`}>{firstCurrency}</div>
                                </div>
                            </div>
                            <div className={`${styles.converted}`}>
                                <div className={`${styles.large}`}>{convertedResult}</div>
                                <div className={`${styles.currency}`}>
                                    <div className={`${styles.currencyFlag}`}></div>
                                    <div className={`${styles.currencyName}`}>{secondCurrency}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            )} 
        </div>
    );
}

export default CurencyComponent;