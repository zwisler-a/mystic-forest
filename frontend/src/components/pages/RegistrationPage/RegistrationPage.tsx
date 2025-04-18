import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import Header from "../../Header/Header";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (FormData: FormData) => {
    const email = FormData.get("email") as string;
    const birthday = FormData.get("birthday") as string;
    const question1 = FormData.get("question1") as string;

    console.log("Form submitted:", { email, birthday, question1 });
    navigate("/");
  };

  return (
    <>
      <Header />
      <main>
        <form action={handleSubmit} className="glass-effect card">
          <h2>Registration</h2>
          <div className="input-field">
            <input
              placeholder="Enter your Email"
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <div className="row">
              <div>
                <input
                  placeholder="DD"
                  type="number"
                  id="birthday"
                  name="birthday"
                  max={"31"}
                  required
                />
                <label htmlFor="birthday">Birthday</label>
              </div>
              <div>
                <input
                  placeholder="MM"
                  type="number"
                  id="birthmonth"
                  name="birthmonth"
                  max={"12"}
                  required
                />
                <label htmlFor="birthday">Birthmonth</label>
              </div>
            </div>
            <p className="hint">This will be your password pin.</p>
          </div>
          <div className="input-field">
            <input
              placeholder="Enter your Anki experience in years"
              type="number"
              id="question1"
              name="question1"
              step={"1"}
              min={"0"}
              max={"31"}
              required
            />
            <label htmlFor="question1">How long do you know Anki?</label>
          </div>
          <div className="input-field">
            <input
              placeholder="Enter your Anki experience in years"
              type="number"
              id="question1"
              name="question1"
              step={"1"}
              min={"0"}
              max={"31"}
              required
            />
            <label htmlFor="question2">How long do you know Anki?</label>
          </div>
          <div className="input-field">
            <input
              placeholder="Enter your Anki experience in years"
              type="number"
              id="question1"
              name="question1"
              step={"1"}
              min={"0"}
              max={"31"}
              required
            />
            <label htmlFor="question3">How long do you know Anki?</label>
          </div>
          <button className="glass-effect" type="submit">
            Register
          </button>
        </form>
      </main>
    </>
  );
};

export default RegistrationPage;
