import Button from "../../components/Button";
import Link from "../../components/Button/Link";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Option from "../../components/Select/Option";
import Title from "../../components/Title";
import { ContainerButtonsStyled, FormStyled } from "./styled";
import { useSubscriptionContext } from "../../hooks/useSubscriptionContext";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [price, setPrice] = useState<number>(1);
  const [date, setDate] = useState<string>("");
  const [modality, setModality] = useState<string>("");
  const { addSubscription } = useSubscriptionContext();

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const dateForm = new Date(date.replace(/-/g, ","));

    addSubscription({
      name,
      link,
      plan,
      price: price,
      date: dateForm,
      modality,
    });

    setName("");
    setLink("");
    setPlan("");
    setPrice(1);
    setDate("");
    setModality("");
  }

  return (
    <Container>
      <Title>Registrar nova assinatura</Title>
      <FormStyled onSubmit={submit}>
        <Input
          label="Nome da assinatura"
          id="name"
          placeholder="Spotify"
          className="input_name"
          value={name}
          set={(value) => setName(value)}
          min={4}
          max={155}
          required
        />
        <Input
          label="Link do site"
          id="link"
          placeholder="https://..."
          className="input_link"
          value={link}
          set={(value) => setLink(value)}
          min={4}
          max={255}
        />
        <Input
          label="Nome do plano"
          id="plan"
          placeholder="Premium"
          className="input_plan"
          value={plan}
          set={(value) => setPlan(value)}
          min={3}
          max={155}
          required
        />
        <Input
          type="number"
          label="Valor do plano"
          id="price"
          placeholder="R$ 20,00"
          className="input_price"
          value={price.toString()}
          set={(value) => setPrice(parseFloat(value.replace(",", ".")))}
          min={1}
          max={10}
          required
          autoComplete={false}
          step="0.5"
        />
        <Input
          type="date"
          label="Início da assinatura"
          id="date"
          className="input_date"
          value={date}
          set={(value) => setDate(value)}
          required
        />
        <Select
          label="Modalidade da assinatura"
          id="modality"
          className="input_modality"
          value={modality}
          set={(value) => setModality(value)}
          required
        >
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
