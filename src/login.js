const Login = () => {
  const Google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={Google}>Login with Google</button>
      <br />
      <button>Login With Facebook</button>
    </div>
  );
};

export default Login;
