import { Outlet } from "react-router";
import Menu from "./Menu";
import Footer from "./Footer";
import '../styles/App.css'

const App = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;