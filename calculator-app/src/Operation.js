import { Actions } from "./App"

export default function Operation({ calc, operation }) {
  return (
    <button
      onClick={() =>
        calc({ type: Actions.operation, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}