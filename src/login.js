const Login = () => {
  const Google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const Facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const Twitter = () => {
    window.open("http://localhost:5000/auth/twitter", "_self");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={Google}>Login with Google</button>
      <br />
      <button onClick={Facebook}>Login With Facebook</button>
      <br />
      <button onClick={Twitter}>Login With Twitter</button>

    </div>
  );
};

export default Login;
