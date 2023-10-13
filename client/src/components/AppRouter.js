import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { LANDING_ROUTE } from "../utils/consts";
import MainLayout from "./MainLayout";
import Landing from "../pages/Landing";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const { user } = useContext(Context)

    return (
        <Routes>
            <Route path="/">
                <Route index element={<Landing />} />
            </Route>
            <Route path="/" element={<MainLayout />}>
                {user.isAuth === true && authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
            </Route>
            <Route path='*' element={<Navigate replace to={LANDING_ROUTE} />} />
        </Routes>
    )
})
export default AppRouter;