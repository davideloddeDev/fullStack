import { Counter } from "./Counter";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div className="app">
      <h1>La Mia App</h1>
      <hr />
      <Welcome name="Davide" age={30} />
      <Counter initialValue={30} />
      <MyForm />
      <MyList items={[
        {id: 1, name: 'Davide'},
        {id: 2, name: 'Ivo'},
        {id: 3, name: 'Romolo'},
        {id: 4, name: 'Matteo'}

      ]}/>
    </div>
  );
}
