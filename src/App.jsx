
import Landing from "./backoffice/Landing";
import LoginForm from "./pages/LoginForm";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const user = localStorage.getItem('user_details')
  console.log(user)

  // const renderPage = () => {
  //   if (!user) {
  //     return (<Outlet/>)
  //   } else {
  //     return (<Landing />)
  //   }
  // }

  return (
    <div>
      <ToastContainer/>
      <Outlet/>
      {/* {renderPage()} */}
    </div>
  )
}

export default App
