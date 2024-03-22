import classes from "./Regist.module.css";
import {useForm} from "react-hook-form";
import { apiService } from "../../api/axios.api";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContexts";


const Regist = () => {

    const {
        register,
        formState: {errors},
        handleSubmit,
        watch
    } = useForm()


    const navigate = useNavigate()

    const onSubmit = async(data) => {
        const dataUser = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.mail,
            password: data.password
        }
        console.log(dataUser)
        try {
            const res = await apiService.post('/api/v1/auth/register', dataUser)
            console.log(res);
            navigate('/login')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id={classes.form} className="flex_container full-page">
            <span className={classes.text_form}>Registration</span>
            <form id="flex_container" className={classes.formR} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="* Email"
                    {...register('mail', {required: true})}
                    aria-invalid={errors.mail ? 'true' : 'false'}
                    className={errors.mail && classes.errorInput}
                />
                {errors.mail?.type === 'required' && (
                    <p className={classes.error} role="alert">
                        Email Address is required
                    </p>
                )}

                <input
                    type=""
                    placeholder="* Username"
                    {...register('firstName', {required: true})}
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    className={errors.firstName && classes.errorInput}
                />
                {errors.firstName?.type === 'required' && (
                    <p role="alert" className={classes.error}>
                        First name is required
                    </p>
                )}

                <input
                    type="password"
                    placeholder="* Password"
                    {...register('password', {required: true})}
                    aria-invalid={errors.password ? 'true' : 'false'}
                    className={errors.password && classes.errorInput}
                />
                {errors.password?.type === 'required' && (
                    <p role="alert" className={classes.error}>
                        Passwords is required
                    </p>
                )}

                <input
                    type="password"
                    placeholder="* Confirm Password"
                    {...register('passwordConfirmation', {
                        required: 'Confirm passwords is required',
                        validate: value =>
                            value === watch('password') || "The passwords do not match"
                    })}
                    aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
                    className={errors.passwordConfirmation && classes.errorInput}
                />
                {errors.passwordConfirmation && (
                    <p role="alert" className={classes.error}>
                        {errors.passwordConfirmation.message}
                    </p>
                )}
                {/*<p>{errAlert}</p>*/}
                <button type='submit' className={classes.submitButton}>Submit</button>
            </form>
        </div>
    );
};

export default Regist;