import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import NewAppointment from "./pages/NewAppointment"
import { ADD_USER, ADMIN_ROUTE, APPOINTMENTS_LIST_ROUTE, LOGIN_ROUTE, NEW_APPOINTMENT_ROUTE, REGISTRATION_ROUTE, REQUESTS_ROUTE, USER_ROUTE } from "./utils/consts"
import MakeNewAppt from "./pages/MakeNewAppt"
import AppointmentsPage from "./pages/AppointmentsPage"
import AppointmentInfo from "./pages/AppointmentInfo"
import UsersPage from "./pages/UsersPage"
import User from "./pages/User"
import AddUserPage from "./pages/AddUser"
import PhoneRequests from "./pages/PhoneRequests"
import RequestPage from "./pages/RequestPage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
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
    },
    {
        path: APPOINTMENTS_LIST_ROUTE + '/:appointment_id',
        Component: AppointmentInfo
    },
    {
        path: USER_ROUTE,
        Component: UsersPage
    },
    {
        path: USER_ROUTE + '/:login',
        Component: User
    },
    {
        path: ADD_USER,
        Component: AddUserPage
    },
    {
        path: REQUESTS_ROUTE,
        Component: PhoneRequests
    },
    {
        path: REQUESTS_ROUTE + '/:request_id',
        Component: RequestPage
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
    }
]