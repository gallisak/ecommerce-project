import { Header } from "../components/Header";
import "./Page404.css";

export function Page404({ cart }) {
  return (
    <div className="div1">
      <Header cart={cart} />

      <title>Page 404</title>

      <h1>Page not found</h1>
    </div>
  );
}
