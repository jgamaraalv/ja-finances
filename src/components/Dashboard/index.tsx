import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";
import { StyledContainer } from "./styles";

const Dashboard = () => {
  return (
    <StyledContainer>
      <Summary />

      <TransactionsTable />
    </StyledContainer>
  );
};

export default Dashboard;
