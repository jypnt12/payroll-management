import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
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
import Dashboard from './pages/Dashboard.jsx';
import RegisterForm from './pages/RegisterForm.jsx';
import store from './store';
import { Provider } from 'react-redux';
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index= {true} path='/' element={<LoginForm/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
