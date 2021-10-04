//Within App.js, import the useReducer hook, our application's reducer and initialState object.
import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import {
  applyNumber,
  changeOperation,
  clearDisplay,
  setMemory,
  recallMemory,
  clearMemory,
} from "./actions/";

function App() {
  //Use useReducer hook to get access to the application state and the dispatch function.
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="https://www.lambdaschool.com">
          <img width="40px" src="./Lambda-Logo-Red.png" alt="lambda logo" />{" "}
          Lambda Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch(setMemory(state.total))}
                value={"M+"}
              />
              <CalcButton
                onClick={() => dispatch(recallMemory())}
                value={"MR"}
              />
              <CalcButton
                onClick={() => dispatch(clearMemory())}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(applyNumber(1))} value={1} />
              <CalcButton onClick={() => dispatch(applyNumber(2))} value={2} />
              <CalcButton onClick={() => dispatch(applyNumber(3))} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(applyNumber(4))} value={4} />
              <CalcButton onClick={() => dispatch(applyNumber(5))} value={5} />
              <CalcButton onClick={() => dispatch(applyNumber(6))} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(applyNumber(7))} value={7} />
              <CalcButton onClick={() => dispatch(applyNumber(8))} value={8} />
              <CalcButton onClick={() => dispatch(applyNumber(9))} value={9} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch(changeOperation("+"))}
                value={"+"}
              />
              <CalcButton
                onClick={() => dispatch(changeOperation("*"))}
                value={"*"}
              />
              <CalcButton
                onClick={() => dispatch(changeOperation("-"))}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                onClick={() => dispatch(clearDisplay())}
                value={"CE"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
