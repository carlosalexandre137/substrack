import { GlobeAltIcon } from "@heroicons/react/24/solid";
import {
  HeaderTopStyled,
  IconLinkSubStyled,
  ListInfoSubStyled,
  TitleSubStyled,
} from "./styled";

interface HeaderSubsProps {
  title: string;
  date: string;
  modality: string;
  ifRenewalToday: boolean;
}

const HeaderSub = ({
  title,
  date,
  modality,
  ifRenewalToday,
}: HeaderSubsProps) => {
  return (
    <section className="header-subscription">
      <HeaderTopStyled>
        <TitleSubStyled>{title}</TitleSubStyled>
        <IconLinkSubStyled to="/">
          <GlobeAltIcon width={29} />
        </IconLinkSubStyled>
      </HeaderTopStyled>
      <ListInfoSubStyled>
        <p>Desde {date}</p>
        <p>{modality}</p>
        {ifRenewalToday && <h2>Renovando hoje</h2>}
      </ListInfoSubStyled>
    </section>
  );
};

export default HeaderSub;
