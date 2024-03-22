import {Route, Routes} from "react-router-dom";
import Regist from "../pages/Regist/Regist.jsx";
import Login from "../pages/Login/Login.jsx";
import LoginConfirm from "../pages/LoginConfirm/LoginConfirm.jsx";
import Purchase from "../pages/Purchase/Purchase.jsx";
import LogButton from "../components/LogButton/LogButton.jsx";
import { useAuth } from "../contexts/AuthContexts.jsx";
const Router = () => {
    const{isAuth, setIsAuth} = useAuth()
    console.log(isAuth)

    return (
        <>
        {isAuth && <LogButton/>}
            <Routes>
                {!isAuth ?
                    <>
                        <Route path={"/login"} element={<Login />}/>
                        <Route path={"/register"} element={<Regist />}/>
                    </> :
                    <>
                        <Route path={"/purchase"} element={<Purchase />}/>
                    </>
                }
            </Routes>
        </>
    );
};

export default Router;