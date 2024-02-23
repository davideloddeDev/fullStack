import { Counter } from "./Counter";
import { MyForm } from "./MyForm";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>La Mia App</h1>
      <hr />
      <Welcome name="Davide" age={30} />
      <Counter initialValue={30} />
      <MyForm />
    </div>
  );
}
