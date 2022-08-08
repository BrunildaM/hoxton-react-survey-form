import { useState } from "react";

type Answer = {
  review: string;
  email: string;
  username: string;
  consistency: number;
  colour: number;
  logo: number;
  bestFeatures: string[];
  worstFeatures: string[];
  timeSpent: string[];
};

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  const initialForm = {
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: [],
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>

          <h3>
            What would you say that are the best features of your rubber duck?
          </h3>
          <li>
            <label>
              <input type="checkbox" name="bestFeatures" value='colour'/>
              It's yellow!
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="bestFeatures" value='sound' />
              It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="bestFeatures" value='logo'/>
              It has a logo!
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="bestFeatures" value='size'/>
              Its big!
            </label>
          </li>

          <h3>
            What would you say that are the worst bits of your rubber duck?
          </h3>
          <li>
            <label>
              <input type="checkbox" name="worstFeatures" value='colour'/>
              It's yellow!
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="worstFeatures" value='sound' />
              It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="worstFeatures" value='logo'/>
              It has a logo!
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="worstFeatures" value='size'/>
              Its big!
            </label>
          </li>

          <h3>How do you rate your rubber duck consistency?</h3>
          
          <div className="form__group">
          <label>
              <input type="radio" name="consistency" value='1'/>
              1
            </label>
            <label>
              <input type="radio" name="consistency" value='2'/>
              2
            </label>
            <label>
              <input type="radio" name="consistency" value='3'/>
              3
            </label>
            <label>
              <input type="radio" name="consistency" value='4'/>
              4
            </label>
            
          </div>


          <h3>How do you rate your rubber duck colour?</h3>

          <div className="form__group">
          <label>
              <input type="radio" name="colour" value='1'/>
              1
            </label>
            <label>
              <input type="radio" name="colour" value='2'/>
              2
            </label>
            <label>
              <input type="radio" name="colour" value='3'/>
              3
            </label>
            <label>
              <input type="radio" name="colour" value='4'/>
              4
            </label>
            
          </div>

          <h3>How do you rate your rubber duck logo?</h3>

          <div className="form__group">
          <label>
              <input type="radio" name="logo" value='1'/>
              1
            </label>
            <label>
              <input type="radio" name="logo" value='2'/>
              2
            </label>
            <label>
              <input type="radio" name="logo" value='3'/>
              3
            </label>
            <label>
              <input type="radio" name="logo" value='4'/>
              4
            </label>
            
          </div>

          <h3>How do you like to spend time with your rubber duck</h3>

          <li>
            <label>
              <input type="checkbox" name="timeSpent" value='swimming'/>
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="timeSpent" value='bathing' />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="timeSpent" value='chatting'/>
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="timeSpent" value='noTime'/>
              I don't spend time with it
            </label>
          </li>

          <h3>What else have you got to say about your rubber duck?</h3>

          <h3>Put your name here (if you feel like it):</h3>

          <h3>Leave us your email pretty please??</h3>

          <button className="form__submit">Submit survey</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
