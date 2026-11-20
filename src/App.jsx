import { useState } from "react";

import PeopleCounter from "./components/PeopleCounter.jsx";
import Summary from "./components/Summary.jsx";
import TipPicker from "./components/TipPicker.jsx";
import { formatMoney } from "./bill.js";

const BILL = 8400;

function App() {
  const [percent, setPercent] = useState(18);
  const [people, setPeople] = useState(3);

  return (
    <main>
      <h1>Split the Bill</h1>
      <p className="bill">Bill: {formatMoney(BILL)}</p>

      <TipPicker percent={percent} onChange={setPercent} />
      <PeopleCounter people={people} onChange={setPeople} />
      <Summary cents={BILL} percent={percent} people={people} />
    </main>
  );
}

export default App;
