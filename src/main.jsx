import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './routes/root.jsx';
import LoginForm from './pages/LoginForm.jsx';
import DailyTimeRecord from './pages/DailyTimeRecord.jsx';
import Employees from './pages/Employees.jsx';
import Payslip from './pages/Payslip.jsx';
import Payments from './pages/Payments.jsx';
import ResponsiveAppBar from './pages/Holidays.jsx';
import Schedule from './pages/Schedule.jsx';
import TimeIn from './pages/TimeIn.jsx';
import Reports from './pages/Reports.jsx';
import Landing from './backoffice/Landing.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Approvals",
    element: <LoginForm/>
  },
  {
    path: "/DailyTimeRecord",
    element: <DailyTimeRecord/>
  },
  {
    path: "/Employees",
    element: <Employees/>
  },
  {
    path: "/Payments",
    element: <Payments/>
  },
  {
    path: "/Payslip",
    element: <Payslip/>
  },
  {
    path: "/Report",
    element: <Reports/>
  },
  {
    path: "/Schedule",
    element: <Schedule/>
  },
  {
    path: "/timein",
    element: <TimeIn/>
  },
  {
    path: "/holidays",
    element: <ResponsiveAppBar/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
