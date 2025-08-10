import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisable, setAlertVisablility] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisablility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisablility(true)}>Button</Button>
    </div>
  );
}

export default App;
