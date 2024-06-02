import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={styles.form}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={styles.signUp}>Sign Up</h3>
        <input style={styles.formInput} placeholder="Username" />
        <input style={styles.formInput} placeholder="Email" />
        <input style={styles.formInput} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={styles.btns}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.btn1}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.btn1}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
  
}
const styles = {
  form:{
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  signUp:{ 
    fontSize: "2rem",
   letterSpacing: 2 
  },
  formInput:{ padding: 10 },
  btns:{
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  btn1:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}
