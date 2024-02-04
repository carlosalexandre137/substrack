import Button from "../../components/Button";
import Link from "../../components/Button/Link";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Option from "../../components/Select/Option";
import Title from "../../components/Title";
import { ContainerButtonsStyled, FormStyled } from "./styled";

const Register = () => {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container>
      <Title>Registrar nova assinatura</Title>
      <FormStyled onSubmit={submit}>
        <Input label="Nome da assinatura" id="name" placeholder="Spotify" className="input_name" />
        <Input label="Link do site" id="link" placeholder="https://..." className="input_link" />
        <Input label="Nome do plano" id="plan" placeholder="Premium" className="input_plan" />
        <Input label="Valor do plano" id="price" placeholder="R$ 20,00" className="input_price" />
        <Input type="date" label="Início da assinatura" id="date" className="input_date" />
        <Select label="Modalidade da assinatura" id="modality" className="input_modality">
          <Option value="quarterly">Trimestralmente</Option>
          <Option value="annually">Anualmente</Option>
          <Option value="monthly">Mensalmente</Option>
        </Select>
        <ContainerButtonsStyled className="container_buttons">
          <Link to="/" theme="cyan">
            Voltar
          </Link>
          <Button type="submit">Editar</Button>
        </ContainerButtonsStyled>
      </FormStyled>
    </Container>
  );
};

export default Register;
