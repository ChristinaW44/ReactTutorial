import ListGroup from "./components/ListGroup";

function App() {
  let items = ["1", "2", "3", "4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Numbers"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
