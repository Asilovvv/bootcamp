import classes from "./LoginConfirm.module.css";
import { useForm } from "react-hook-form";
const LoginConfirm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id={classes.form} className="flex_container full-page">
      <span className={classes.text_form}>Registration</span>
      <form
        id="flex_container"
        className={classes.formR}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          placeholder="* Email"
          {...register("mail", { required: true })}
          aria-invalid={errors.mail ? "true" : "false"}
          className={errors.mail && classes.errorInput}
        />
        {errors.mail?.type === "required" && (
          <p className={classes.error} role="alert">
            Email Address is required
          </p>
        )}

        <input
          type="password"
          placeholder="* Password"
          {...register("password", { required: true })}
          aria-invalid={errors.password ? "true" : "false"}
          className={errors.password && classes.errorInput}
        />
        {errors.password?.type === "required" && (
          <p role="alert" className={classes.error}>
            Passwords is required
          </p>
        )}
        <input
          type="phone number"
          placeholder="* Phone number"
          {...register("phoneNumber", {
            required: true,
            pattern: /^[+0-9]+$/,
          })}
          aria-invalid={errors.phoneNumber ? "true" : "false"}
          className={errors.phoneNumber && classes.errorInput}
        />
        {errors.phoneNumber && (
          <p className={classes.error} role="alert">
            Please enter a valid phone number (only integers are allowed).
          </p>
        )}

        <input
          type="password"
          placeholder="* Confirm Password"
          {...register("passwordConfirmation", {
            required: "Confirm passwords is required",
            validate: (value) =>
              value === watch("password") || "The passwords do not match",
          })}
          aria-invalid={errors.passwordConfirmation ? "true" : "false"}
          className={errors.passwordConfirmation && classes.errorInput}
        />
        {errors.passwordConfirmation && (
          <p role="alert" className={classes.error}>
            {errors.passwordConfirmation.message}
          </p>
        )}
        {/*<p>{errAlert}</p>*/}
        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginConfirm;
