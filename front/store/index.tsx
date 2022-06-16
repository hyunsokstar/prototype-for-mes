import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
// import logger from 'redux-logger';

import reducer from './reducer';

const store = (context:any) => configureStore({ 
    reducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
});

// export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper(store, {
    debug: process.env.NODE_ENV !== 'production',
});