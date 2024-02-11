import { ModalityOptionsConfig } from "../../config/Subscription";
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
import { formatValuesSubscription } from "../../utils/Subscription";
import { convertDateFormInDateObject } from "../../utils/Date";
import { IModalityOptionsConfig } from "../../shared/interfaces/IModality";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [price, setPrice] = useState<number>(1);
  const [date, setDate] = useState<string>("");
  const [modality, setModality] = useState<string>("quarterly");
  const { addSubscription } = useSubscriptionContext();
  const listKeysModality = Object.keys(ModalityOptionsConfig) as [
    keyof IModalityOptionsConfig
  ];

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addSubscription(
      formatValuesSubscription({
        name,
        link,
        plan,
        price,
        date: convertDateFormInDateObject(date),
        modality: modality as keyof IModalityOptionsConfig,
      })
    );

    setName("");
    setLink("");
    setPlan("");
    setPrice(1);
    setDate("");
    setModality("quarterly");
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
          minLength={4}
          maxLength={155}
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
          minLength={3}
          maxLength={155}
          required
        />
        <Input
          type="number"
          label="Valor do plano"
          id="price"
          value={price.toString()}
          placeholder="R$ 20,00"
          set={(value) => (value.length == 0 ? setPrice(0) : setPrice(parseFloat(value)))}
          className="input_price"
          min={1}
          required
          autoComplete="off"
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
          {listKeysModality.map((key) => {
            const subModality = ModalityOptionsConfig[key];

            return (
              <Option value={key} key={key}>
                {`${subModality.text} - ${subModality.prefix}`}
              </Option>
            );
          })}
        </Select>
        <ContainerButtonsStyled className="container_buttons">
          <Link to="/" theme="cyan">
            Voltar
          </Link>
          <Button type="submit">Registrar</Button>
        </ContainerButtonsStyled>
      </FormStyled>
    </Container>
  );
};

export default Register;
