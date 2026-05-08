const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login as Responder</button>
        </form>
        <p>
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
