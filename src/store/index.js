import heroes from '../reducer/index';
import filters from '../reducer/filter';
import popup from '../reducer/popup';
import {configureStore} from '@reduxjs/toolkit';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {heroes, filters, popup},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV != 'production',
})

export default store;