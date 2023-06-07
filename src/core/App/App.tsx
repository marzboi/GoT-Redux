import { Provider } from "react-redux";
import { List } from "../../got/components/list";
import { store } from "../store/store";

export function App() {
  return (
    <>
      <Provider store={store}>
        <List></List>
      </Provider>
    </>
  );
}
