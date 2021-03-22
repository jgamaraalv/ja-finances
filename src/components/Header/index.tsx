import logoImg from "../../assets/logo.svg";
import { StyledContainer, StyledContent } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <StyledContainer>
      <StyledContent>
        <img src={logoImg} alt="ja finances" />

        <button onClick={onOpenNewTransactionModal}>Nova transação</button>
      </StyledContent>
    </StyledContainer>
  );
};

export default Header;
