import DigitButton from "./DigitButton"
import Operation from "./Operation"
import "./styles.css"
import React from "react"

export const Actions = {
  add: "add-digit",
  select: "select-operation",
  clear: "clear",
  delete: "delete-digit",
  evaluate: "evaluate",
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "÷":
      computation = prev / current
      break
    default:
      break
  }

  return computation.toString()
}


function App() {
  const [currentOperand, setCurrentOperand] = React.useState("")
  const [previousOperand, setPreviousOperand] = React.useState("")
  const [operation, setOperation] = React.useState("")

  const calc = React.useCallback(
    (action) => {
      switch (action.type) {
        case Actions.add:
          setCurrentOperand((prev) => prev + action.payload.digit)
          break
        case Actions.select:
          setOperation(action.payload.operation)
          setPreviousOperand(currentOperand)
          setCurrentOperand("")
          break
        case Actions.clear:
          setCurrentOperand("")
          setPreviousOperand("")
          setOperation("")
          break
        case Actions.delete:
          setCurrentOperand(currentOperand.slice(0, -1))
          break
        case Actions.evaluate:
          setCurrentOperand(evaluate({
            currentOperand,
            previousOperand,
            operation,
          }))
          setPreviousOperand("")
          setOperation("")
          break
        default:
          break
      }
    },
    [currentOperand, previousOperand, operation]
  )


  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      
        <button
          className="span-two"
          onClick={() => calc({ type: Actions.clear })}
        >
          AC
        </button>
        <button onClick={() => calc({ type: Actions.delete })}>
          DEL
        </button>
        <Operation operation="÷" />
        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <Operation operation="*" />
        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <Operation operation="+" />
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <Operation operation="-" />
        <DigitButton digit="." />
        <DigitButton digit="0" />
        <button
          className="span-two"
          onClick={() => calc({ type: Actions.evaluate })}
        >
          =
        </button>
      
    </div>
  )
}

export default App