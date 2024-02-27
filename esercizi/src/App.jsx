import { Counter } from "./Counter";
import { MyList } from "./MyList";
import { Welcome } from "./Welcome";
import { Container } from "./Container1";
import { LanguageContext } from "./LanguageContext";

export function App() {
  return (
     
    <Container title={<h1>My Awesome Application</h1>}>
      <LanguageContext.Provider value="en">
        <hr />
        <Welcome />
        <Counter initialValue={42} />
        <MyList
          items={[
            { id: 1, name: "Davide" },
            { id: 2, name: "Ivo" },
            { id: 3, name: "Romolo" },
            { id: 4, name: "Matteo" },
          ]}
        />
        
      </LanguageContext.Provider>
    </Container>
  );
}
