import logoImg from "../../assets/logo.svg";
import { StyledContainer, StyledContent } from "./styles";

const Header = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <img src={logoImg} alt="ja finances" />

        <button>Nova transação</button>
      </StyledContent>
    </StyledContainer>
  );
};

export default Header;
