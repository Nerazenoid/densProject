import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Landing from "./pages/Landing"
import TestPage from "./pages/TestPage"
import { ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TEST_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LANDING_ROUTE,
        Component: Landing
    },
    {
        path: TEST_ROUTE,
        Component: TestPage
    }
]