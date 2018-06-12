export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUT = 'CHANGE_CURRENCY_AMOUT';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';
export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION';
export const CONVERSION_RESULT = 'CONVERSION_RESULT';
export const CONVERSION_ERROR = 'CONVERSION_ERROR';

export const swapCurrency = () => ({
    type: SWAP_CURRENCY
});

export const changeCurrencyAmout = amount => ({
    type: CHANGE_CURRENCY_AMOUT,
    amount: parseFloat(amount)
});

export const changeBaseCurrency = currency => ({
    type: CHANGE_BASE_CURRENCY,
    currency
});

export const changeQuoteCurrency = currency => ({
    type: CHANGE_QUOTE_CURRENCY,
    currency
});

export const getInitialConversion = () => ({
    type: GET_INITIAL_CONVERSION
});
