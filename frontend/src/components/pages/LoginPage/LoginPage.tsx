import { Link } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div className="background"></div>
      <div className="spacer"></div>
      <header>
        <h1>Mystic Forest</h1>
        <div className="subheading">Hannah, Anki & Kiara await you</div>
      </header>
      <main>
        <h2>Login</h2>
        <Link className="glass-effect" to="/">
          Login
        </Link>
      </main>
    </>
  );
};

export default LoginPage;