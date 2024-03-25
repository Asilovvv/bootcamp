
import classes from "./Header.module.css"
import { Form, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import LogButton from "../LogButton/LogButton";



const Header = () => {
    const{isAuth, setIsAuth} = useAuth()
  return (

    <section>
        {!isAuth ? <>
            <NavLink to={`/login`}>
                <button className={classes.form_purchase}>Login</button>
                    </NavLink>

                    <NavLink to={`/register`}>
                        <button className={classes.login_register}>Register</button>
                    </NavLink>        

        </> : <div>
        {isAuth && <LogButton/>}
        <NavLink to={`/form`}>
                <button className={classes.form_purchase}>Form</button>
                    </NavLink>

                    <NavLink to={`/purchase`}>
                        <button className={classes.form_purchase}>Purchase</button>
                    </NavLink>

            </div>}
            
</section>

  );
};

export default Header;
