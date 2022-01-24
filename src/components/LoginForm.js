import useBasicInput from "./hooks/use-BasicInput";

const LoginForm = (props) => {
  
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    InputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useBasicInput((value) => value.trim() !== "");
  
  
  let formIsValid = false;

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    InputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
    reset: resetPassword
  } = useBasicInput((value) => value.trim() !== "");

 
  if (nameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid && !passwordIsValid) {
      return;
    }
    const enteredFormData = {
      id:enteredName,
      name:enteredName,
     password:enteredPassword
    };
    props.onSubmit(enteredName,enteredPassword);
   
    resetName();
    resetPassword();
    
  };
  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control ";
  const passwordInputClasses = passwordHasError
    ? "form-control invalid"
    : "form-control ";
  
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          {nameHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="name"
            value={enteredPassword}
            onBlur={passwordBlurHandler}
            onChange={passwordChangeHandler}
          />
          {passwordHasError && (
            <p className="error-text">password must not be empty</p>
          )}
        </div>
      </div>
     
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
       
      </div>
    </form>
  );
};

export default LoginForm;
