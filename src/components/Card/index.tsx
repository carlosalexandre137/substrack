import { GlobeAltIcon } from "@heroicons/react/24/solid";
import {
  BodyStyled,
  CardStyled,
  FooterStyled,
  HeaderStyled,
  IconStyled,
  LinkStyled,
} from "./styled";
import { ISubscription } from "../../shared/interfaces/ISubscription";
import SubscriptionHelper from "../../helpers/SubscriptionHelper";

interface CardProps {
  subscription: ISubscription;
}

const Card = ({ subscription }: CardProps) => {
  const sub = new SubscriptionHelper(subscription);
  return (
    <CardStyled $renewal={sub.renewal}>
      <HeaderStyled>
        <h4 title={sub.name}>{sub.name}</h4>
        <div>
          <IconStyled to={sub.link}>
            <GlobeAltIcon />
          </IconStyled>
        </div>
      </HeaderStyled>
      <BodyStyled>
        {sub.renewal && (
          <div>
            <p className="renewalToday">Renovando hoje</p>
          </div>
        )}
        <div>
          <p>Próxima renovação:</p>
          <span>{sub.date}</span>
        </div>
        <div>
          <p>Plano:</p>
          <span>Plano {sub.plan}</span>
        </div>
      </BodyStyled>
      <FooterStyled>
        <div className="footer-info">
          <p className="price">R$ {sub.price}</p>
          <p className="modality">{sub.modality}</p>
        </div>
        <LinkStyled to={`assinaturas/${sub.id}`}>Ver detalhes</LinkStyled>
      </FooterStyled>
    </CardStyled>
  );
};

export default Card;
