import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { LANDING_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const isAuth = false

    return (
        <Routes>
            <Routes>
                {isAuth === true && authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                <Route key={'unknown'} path="*" element={<Navigate replace to={LANDING_ROUTE} />} />
            </Routes>
        </Routes>
    )
}
export default AppRouter;