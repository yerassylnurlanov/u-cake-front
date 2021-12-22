import React, { lazy, memo } from 'react';
import { Suspense } from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

const MainPageScreen =  lazy(() => import('pages/main'))

const _Router = () => {

    return(
        <BrowserRouter basename="/">
            <Suspense fallback={"<div>Загрузка...</div>"}>
                <Routes>
                    <Route path="/"   element={<MainPageScreen/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export const Router = memo(_Router);