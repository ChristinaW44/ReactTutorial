import ListGroup from "./components/ListGroup";

function App() {
  let items = ["1", "2", "3", "4"];

  return (
    <div>
      <ListGroup items={items} heading="Numbers" />
    </div>
  );
}

export default App;
