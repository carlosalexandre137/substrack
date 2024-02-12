import Container from "../Container";
import { GroupInfo, TextResult, TitleSubStyled } from "./styled";

interface DetailsSubProps {
  date: string;
  price: string;
}

const DetailsSub = ({ date, price }: DetailsSubProps) => {
  return (
    <Container>
      <GroupInfo>
        <TitleSubStyled>Próxima renovação</TitleSubStyled>
        <TextResult>{date}</TextResult>
      </GroupInfo>
      <GroupInfo>
        <TitleSubStyled>Valor da renovação</TitleSubStyled>
        <TextResult>R$ {price}</TextResult>
      </GroupInfo>
    </Container>
  );
};

export default DetailsSub;
