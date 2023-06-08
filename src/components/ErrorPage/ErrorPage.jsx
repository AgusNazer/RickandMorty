import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1>Error 404: Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="https://github.com">Ir a GitHub</Link>
    </div>
  );
}

export default ErrorPage;