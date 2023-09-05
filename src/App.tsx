import { useState, ChangeEventHandler } from "react";
import "./styles.css";

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: "🍎 Apple" },
  { id: 2, name: "🍌 Banana" },
  { id: 3, name: "🍒 Cherry" },
  { id: 4, name: "💑 Date" },
  { id: 5, name: "❓ Fig" }
];

export default function App() {
  const [filter, setFilter] = useState("🍎");
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="App">
      <input value={filter} onChange={onChange} className="input" />
      {items
        .filter((x) => x.name.includes(filter))
        .map((x) => (
          <div key={x.id} className="item">
            {x.name}
          </div>
        ))}
    </div>
  );
}
