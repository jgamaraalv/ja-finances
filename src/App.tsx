import { useState } from "react";
import Modal from "react-modal";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { createServer, Model } from "miragejs";
import { GlobalStyle } from "./styles/global";
import NewTransactionModal from "./components/NewTransactionModal";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date("2021-02-14 11:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transation", data);
    });
  },
});

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        onRequestClose={handleCloseNewTransactionModal}
        isOpen={isNewTransactionModalOpen}
      />
    </div>
  );
}

export default App;
