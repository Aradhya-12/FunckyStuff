import ChessBoard from "./ChessBoard";
import "./styles.css";
import TimeFormater from "./TimeFormater";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TimeFormater />
      <ChessBoard/>
    </div>
  );
}
