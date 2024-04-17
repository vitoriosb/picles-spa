import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid/Grid";

export function Pets() {
  return (
    <Grid>
      <Header />
      <Link to={"/pets/28"}>Ir a Listagem</Link>
    </Grid>
  );
}
