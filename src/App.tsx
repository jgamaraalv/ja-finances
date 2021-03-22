import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { createServer } from "miragejs";
import { GlobalStyle } from "./styles/global";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}

export default App;
