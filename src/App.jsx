
import Landing from "./backoffice/Landing"
import LoginForm from "./pages/LoginForm"
import RegisterForm from "./pages/RegisterForm"


function App() {

  const user = localStorage.getItem('user_details')

  const renderPage = () => {
    if (user) {
      return (<LoginForm/>)
    } else {
      return (<Landing />)
    }
  }

  return (
    <div>
      {renderPage()}
    </div>
  )
}

export default App
