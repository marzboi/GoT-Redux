import { Communication } from "../../got/components/communications";
import { List } from "../../got/components/list";

export function App() {
  return (
    <>
      <div className="app container">
        <List></List>
      </div>
      <Communication></Communication>
    </>
  );
}
