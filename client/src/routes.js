import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import NewAppointment from "./pages/NewAppointment"
import { ADMIN_ROUTE, APPOINTMENTS_LIST_ROUTE, LOGIN_ROUTE, MAKE_NEW_APPT_ROUTE, NEW_APPOINTMENT_ROUTE, REGISTRATION_ROUTE, TEST_ROUTE } from "./utils/consts"
import MakeNewAppt from "./pages/MakeNewAppt"
import AppointmentsPage from "./pages/AppointmentsPage"

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
        path: NEW_APPOINTMENT_ROUTE + '/:doctor_id',
        Component: MakeNewAppt
    },
    {
        path: APPOINTMENTS_LIST_ROUTE,
        Component: AppointmentsPage
    }
]