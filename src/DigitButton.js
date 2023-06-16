import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, Digit }) {
return <button onClick={()  => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {Digit} })}
    >
        {Digit}
        </button>

}