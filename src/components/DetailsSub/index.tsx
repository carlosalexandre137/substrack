import { GroupInfo, TextResult, TitleSubStyled } from "./styled";

interface DetailsSubProps {
  date: string;
  price: string;
}

const DetailsSub = ({ date, price }: DetailsSubProps) => {
  return (
    <section className="details-subscription">
      <GroupInfo>
        <TitleSubStyled>Próxima renovação</TitleSubStyled>
        <TextResult>{date}</TextResult>
      </GroupInfo>
      <GroupInfo>
        <TitleSubStyled>Valor da renovação</TitleSubStyled>
        <TextResult>R$ {price}</TextResult>
      </GroupInfo>
    </section>
  );
};

export default DetailsSub;
