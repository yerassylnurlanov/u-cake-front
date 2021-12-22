import { hot } from 'react-hot-loader/root';
import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from 'store';
// import { DetectDeviceProvider } from './detect-device';
import { Router } from './router';
import { ErrorBoundary } from 'features/error-boundary';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from './global-styles/global-styles';
// import { ErrorModal } from 'features/error-modal';



export const _App: FC = () => (
    <Suspense fallback={null}>
        <ErrorBoundary>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <GlobalStyles />
                    {/* <ErrorModal /> */}
                    {/* <DetectDeviceProvider> */}
                    <Router />
                    {/* </DetectDeviceProvider> */}
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    </Suspense>
);

export const App = hot(() => <_App />);
