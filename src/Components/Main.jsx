import React, { useState } from "react";
import "../Style/General.css";
import "../Style/Main.css";

function Main() {
  const [toggle, setToggle] = useState(false);
  const [inputEvent, setInputEvent] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const [borderInputStyle, setBorderInputStyle] = useState({});

  function onChangeValue(e) {
    setInputEvent(e.target.value);
    setBorderInputStyle({});
  }

  function handleDarkMode() {
    setToggle((prevToggle) => !prevToggle);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!inputEvent) {
      setSubmit(false);
      setError("Empty field! Please fill up.");
      setInputEvent("");
      setBorderInputStyle({ border: "3px solid red" });
    } else if (!/\S+@\S+\.\S+/.test(inputEvent)) {
      setSubmit(false);
      setError("Please provide a valid email!");
      setBorderInputStyle({ border: "3px solid red" });
    } else if (!inputEvent.endsWith(".com")) {
      setSubmit(false);
      setError('Did you mean ".com"? Please provide a valid email!');
      setBorderInputStyle({ border: "3px solid red" });
    } else if (!inputEvent.includes("@")) {
      setSubmit(false);
      setError('Missing "@" in your input! Please provide a valid email!');
      setBorderInputStyle({ border: "3px solid red" });
    } else if (!inputEvent.includes("gmail") && !inputEvent.includes("yahoo") && !inputEvent.includes("Hotmail")) {
      setSubmit(false);
      setError('something is wrong? Please check your email.');
      setBorderInputStyle({ border: "3px solid red" });
    } 
    else {
      setSubmit(true);
      setError("");
      setBorderInputStyle({ border: "3px solid #02b66b" });
    }
  }

  return (
    <section
      className={
        toggle ? "Main-Apparel-Container bg-dark" : "Main-Apparel-Container"
      }
    >
      <div className="btn-dark-mode-container">
        <button
          className={toggle ? "btn-toggle change-color" : "btn-toggle"}
          onClick={handleDarkMode}
        >
          {toggle ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </button>
      </div>
      <div className="flex-column">
        <div className="Apparel-logo">
          <img src="logo.svg" alt="" />
        </div>
        <div className="hero-2">
          <img src="hero-mobile.jpg" alt="" />
        </div>
        <div className="Apparel-Content">
          <h1>
            <span>WE&lsquo;RE</span> COMING SOON
          </h1>
          <p>
            Hello fellow shoppers! We&lsquo;re currently building our new
            fashion store. Add your email below to stay up-to-date with
            announcements and our launch deals.
          </p>
          <form onSubmit={handleFormSubmit}>
            <input
              style={borderInputStyle}
              placeholder="Email Address"
              type="text"
              value={inputEvent}
              onChange={onChangeValue}
            />
            <button type="submit">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
          <div className="error-notified-container">
            {error && <small className="error">{error}</small>}
            {submit ? (
              <small className="notify">
                <i className="fa-solid fa-check-double"></i> You&#39;re all set! Expect exciting news coming your way.
              </small>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="Apparel-model">
        <img src="hero-desktop.jpg" alt="" />
      </div>
    </section>
  );
}

export default Main;
