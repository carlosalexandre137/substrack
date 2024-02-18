import { Helmet } from "react-helmet-async";

interface BasePageProps {
  title: string;
  description: string;
  prefix?: boolean;
}

const BasePage = ({ title, description, prefix = true }: BasePageProps) => {
  return (
    <Helmet>
      <title>
        {title} {prefix ? "- Gerenciador de Assinaturas" : ""}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default BasePage;
