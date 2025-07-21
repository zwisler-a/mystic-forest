import { Link } from "react-router";
import Header from "../../../shared/Header/Header.tsx";

const LoginPage = () => {
  return (
    <>
      <Header />
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
