export const getAllETHRates = async () => {
    try {
        const request = await fetch(
            `https://api.coinbase.com/v2/exchange-rates?currency=eth`
        )
        const ethResponse = await request.json()

        return ethResponse.data.rates
    } catch (e) {
        console.error('Unable to retrieve ETH rates', e)
    }
    return 0
}
export const getETHRate = async (currency) => {
    const allRates = await getAllETHRates()
    const ratesMap = new Map(Object.entries(allRates))
    return ratesMap.get(currency.toUpperCase())
}

