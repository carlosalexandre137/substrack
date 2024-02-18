import { ModalityOptionsConfig } from "@/config/Subscription";
import Button from "@components/Button";
import Container from "@/components/Containers";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Option from "@/components/Select/Option";
import Title from "@/components/Title";
import { ContainerButtonsStyled, FormStyled } from "./styled";
import { useState } from "react";
import { formatValuesSubscription } from "@/utils/Subscription";
import { convertDateFormInDateObject } from "@/utils/Date";
import { IModalityOptionsConfig } from "@/shared/interfaces/IModality";
import { ISubscription } from "@/shared/interfaces/ISubscription";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormProps {
  save: (subscription: ISubscription) => void;
  title: string | JSX.Element;
  button: string;
  message: string;
  valueName?: string;
  valueLink?: string;
  valuePrice?: number;
  valuePlan?: string;
  valueDate?: string;
  valueModality?: string;
  clear?: boolean;
}

const Form = ({
  save,
  title,
  button,
  message,
  valueName = "",
  valueLink = "",
  valuePlan = "",
  valuePrice = 1,
  valueDate = "",
  valueModality = "quarterly",
  clear = false,
}: FormProps) => {
  const [name, setName] = useState<string>(valueName);
  const [link, setLink] = useState<string>(valueLink);
  const [plan, setPlan] = useState<string>(valuePlan);
  const [price, setPrice] = useState<number>(valuePrice);
  const [date, setDate] = useState<string>(valueDate);
  const [modality, setModality] = useState<string>(valueModality);
  const listKeysModality = Object.keys(ModalityOptionsConfig) as [
    keyof IModalityOptionsConfig
  ];

  const navigate = useNavigate();

  function clearInput<T>(state: T, valueClean: T) {
    return clear ? valueClean : state;
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    save(
      formatValuesSubscription({
        name,
        link,
        plan,
        price,
        date: convertDateFormInDateObject(date),
        modality: modality as keyof IModalityOptionsConfig,
      })
    );

    toast.success(message, { toastId: 1, autoClose: 3000 });

    setName(clearInput<string>(name, valueName));
    setLink(clearInput<string>(link, valueLink));
    setPlan(clearInput<string>(plan, valuePlan));
    setPrice(clearInput<number>(price, valuePrice));
    setDate(clearInput<string>(date, valueDate));
    setModality(clearInput<string>(modality, valueModality));
  }

  return (
    <Container>
      <Title>{title}</Title>
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
          set={(value) =>
            value.length == 0 ? setPrice(0) : setPrice(parseFloat(value))
          }
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
          <Button type="button" click={() => navigate(-1)} theme="cyan">
            Voltar
          </Button>
          <Button type="submit">{button}</Button>
        </ContainerButtonsStyled>
      </FormStyled>
    </Container>
  );
};

export default Form;
