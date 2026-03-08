import { ComponentExample } from "@/components/component-example";
import { getProducts } from "./modules/common/api";

export function App() {
  getProducts();

  return <ComponentExample />;
}

export default App;
