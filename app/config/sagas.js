// 1. swap currency
// 2. if base currency changed
// 3. on init
import { takeEvery, select, call, put } from 'redux-saga/effects';

import {
    SWAP_CURRENCY,
    CHANGE_BASE_CURRENCY,
    GET_INITIAL_CONVERSION,
    CONVERSION_RESULT,
    CONVERSION_ERROR
} from '../actions/currencies';

const APP_ID = 'a8f568affcd6434b8f42de6907b8665b';

const getLatestRate = currency =>
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${APP_ID}`);

function* fetchLatestConversionRates(action) {
    try {
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }

        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if (result.error) {
            yield put({
                type: CONVERSION_ERROR,
                error: result.error
            });
        } else {
            yield put({
                type: CONVERSION_RESULT,
                result
            });
        }
    } catch (error) {
        yield put({
            type: CONVERSION_ERROR,
            error: error.message
        });
    }
}

export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
