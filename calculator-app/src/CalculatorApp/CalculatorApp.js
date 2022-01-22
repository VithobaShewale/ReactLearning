import 'bootstrap/dist/css/bootstrap.min.css';
import NumberButtons from '../Components/NumberButtons/NumberButtons';
function CalculatorApp() {
  return (
    <table className="table">
      <tbody>
        <tr>
          <NumberButtons />
        </tr>
      </tbody>
    </table>

  )
}
export default CalculatorApp;