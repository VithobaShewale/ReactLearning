import { Actions } from "./App"

export default function DigitButton({ calc, digit }) {
  return (
    <button
      onClick={() => calc({ type: Actions.add, payload: { digit } })}
    >
      {digit}
    </button>
  )
}