exports.main = async (context, sendResponse) => {
    const API_KEY = process.env.EXCHANGE_RATE_API_KEY; // Securely stored in .env

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        sendResponse({ statusCode: 200, body: JSON.stringify(data) });
    } catch (error) {
        sendResponse({ statusCode: 500, body: JSON.stringify({ error: "Failed to fetch exchange rates" }) });
    }
};