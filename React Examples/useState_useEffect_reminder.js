import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [developerInfo, setDeveloperInfo] = useState({
    name: "Marcus",
    lang: "JavaScript",
    yearsXP: 0,
    isEmployed: false
  });
  const { name, lang, yearsXP, isEmployed } = developerInfo;

  useEffect(() => {
    document.title = name;
  }, [name]);

  const hangleLanguageChange = () => {
    if (lang === "Python") {
      setDeveloperInfo({ ...developerInfo, yearsXP: 0, lang: "JavaScript" });
    } else {
      setDeveloperInfo({ ...developerInfo, yearsXP: 0, lang: "Python" });
    }
  };

  const hangleYearsChange = e => {
    if (e.target.value >= 0) {
      setDeveloperInfo({ ...developerInfo, yearsXP: e.target.value });
    }
  };

  const handleEmpoymentStatus = () => {
    setDeveloperInfo(prevState => ({
      ...prevState,
      isEmployed: !prevState.isEmployed
    }));
  };

  const handleChangeName = e => {
    const newName = e.target.value;
    setDeveloperInfo(prevState => ({
      ...prevState,
      name: newName
    }));
  };
  return (
    <div style={styles.main}>
      <div>
        <button onClick={hangleLanguageChange} style={styles.button}>
          Change lang
        </button>
      </div>
      <div>
        <button onClick={handleEmpoymentStatus} style={styles.button}>
          Change Employment Status
        </button>
      </div>
      <div>
        <input
          style={styles.input}
          type="text"
          placeholder="Your username"
          onChange={handleChangeName}
        />
      </div>
      <div>
        <input
          style={styles.input}
          type="number"
          value={yearsXP}
          onChange={hangleYearsChange}
        />
      </div>
      <p>I am learning {lang}</p>
      <p>
        I have {yearsXP} {yearsXP > 1 || yearsXP === 0 ? "Years" : "Year"} of
        experience
      </p>
      <p>Employed: {isEmployed ? "Employed" : "Unemployed"}</p>
    </div>
  );
}

const styles = {
  main: {
    marginTop: "20px",
    display: "grid",
    gridTemplateRows: "20% 40% 30%",
    gridGap: "10px"
  },
  button: {
    display: "inline-block",
    padding: "0.46em 1.6em",
    border: "0.1em solid #000000",
    margin: "0 0.2em 0.2em 0",
    borderR1adius: "0.12em",
    boxSizing: "border-box",
    textDecoration: "none",
    fontFamily: "'Roboto',sans-serif",
    fontWeight: "300",
    color: "#000000",
    textShadow: "0 0.04em 0.04em rgba(0,0,0,0.35)",
    backgroundColor: "yellow",
    textAlign: "center "
  },
  input: {
    margin: "0 .25rem",
    minWidth: "125px",
    border: "1px solid #eee",
    padding: "10px",
    borderLeft: "3px solid",
    borderRadius: "5px"
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
