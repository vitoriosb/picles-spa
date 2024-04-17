import { Link } from "react-router-dom";
import dog from "../../assets/dog.svg";
import { Button } from "../../components/common/Button";
import { ButtonVariant } from "../../components/common/Button/Button.constants";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <img src={dog} />
      <Link to={"/pets"}>
        <Button variant={ButtonVariant.Default}>Quero Adotar</Button>
      </Link>
      <Link to={"/admin"}>
        <Button variant={ButtonVariant.Outlined}>Tenho um Abrigo</Button>
      </Link>
    </div>
  );
}
