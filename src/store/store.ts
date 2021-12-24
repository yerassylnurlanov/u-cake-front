import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupAxios } from 'lib';
import { persistReducer} from 'redux-persist'
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import counter from './counter';

const persistConfig = {
    key: 'root',
    storage
};

const reducers = combineReducers({
    counter
}) 

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStateType = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupAxios();