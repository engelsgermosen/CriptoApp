import { Navigate, Outlet } from "react-router";
import Menu from "./Menu";
import Footer from "./Footer";
import '../styles/App.css'

const App = () => {

    if (!localStorage.getItem('token')) return <Navigate to='/login' />

    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;