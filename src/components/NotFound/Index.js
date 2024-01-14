import image from "assets/not_found_404.png";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="container mx-auto py-10 flex justify-center items-center">
      <img src={image} alt="IMAGEM" className="w-2/5 max-w-sm hidden sm:block mr-10" />
      <div className={`${styles.colorError} flex justify-center items-center sm:block flex-col sm:w-2/5`}>
        <h1 className="text-9xl font-extrabold mb-1">404</h1>
        <h3 className="text-md font-bold leading-5 uppercase mb-10 w-56 text-center sm:text-start mt-3 sm:w-72">
          Não foi possível encontrar o que você procura
        </h3>
        <Link to="/" className={`${styles.bgError} uppercase rounded-3xl text-white px-10 py-3 text-nowrap`}>
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          Voltar para home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
