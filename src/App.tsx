import { useState } from "react";
import Button from "./components/common/Button/Button";
import { ButtonVariant } from "./components/common/Button/Button.constants";

export function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
        variant={ButtonVariant.Default}
      >
        <div>Quero adotar</div>
      </Button>
      {count}
    </>
  );
}
