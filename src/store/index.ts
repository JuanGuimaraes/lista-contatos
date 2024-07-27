import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducer/contactReducer'


const store = configureStore({
    reducer: {
    contatos: contatosReducer,

    }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store
