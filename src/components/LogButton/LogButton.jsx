import { useAuth } from "../../contexts/AuthContexts";
import { useNavigate } from "react-router";


const LogButton = () => {
    
    const {isAuth, setIsAuth} = useAuth()
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('token')
        setIsAuth(null)
        navigate('/login')
    }

    return(
        <section>
            <button onClick={() => logOut()}>LogOut</button>
        </section>
    )
};

export default LogButton;