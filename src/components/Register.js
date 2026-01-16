import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {state: {name: nameRef.current.value, email: emailRef.current.value}});
  }

  return (
    <div className="container">
      <h1>Register Interest in a Course</h1>

      <p>
        Make sure to secure your place in the courses you are interested in!
        The School of Infocomm at Republic Polytechnic offers industry-relevant
        modules designed to equip you with practical skills and knowledge for
        your future career in technology.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
