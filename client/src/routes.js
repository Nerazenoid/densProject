import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import NewAppointment from "./pages/NewAppointment"
import TestPage from "./pages/TestPage"
import { ADMIN_ROUTE, LOGIN_ROUTE, NEW_APPOINTMENT_ROUTE, REGISTRATION_ROUTE, TEST_ROUTE } from "./utils/consts"

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
        path: NEW_APPOINTMENT_ROUTE,
        Component: NewAppointment
    },
    {
        path: TEST_ROUTE,
        Component: TestPage
    },
]