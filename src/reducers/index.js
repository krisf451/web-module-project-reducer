import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  SET_MEMORY,
  CLEAR_MEMORY,
  RECALL_MEMORY,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return null;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };

    //When `M+` is pressed, the current memory value should be set to the current total value. Test by seeing the result of memory in the UI.
    case SET_MEMORY:
      return {
        ...state,
        memory: action.payload,
      };
    //When `MR` is pressed, the current memory value should be applied to the current total value(See the APPLY_NUMBER case). Test by adding a value to memory and then seeing if the total updates correctly when pressed.
    case RECALL_MEMORY:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };
    //When `MC` is pressed, the current memory value should be set to zero. Test by adding a value to memory and then seeing the memory value reset to zero when pressed.
    case CLEAR_MEMORY:
      return {
        ...state,
        memory: 0,
      };
    default:
      return state;
  }
};

export default reducer;
