
import errorIMG from "../ErrorPage/error404.jpeg"

function ErrorPage() {
  return (
    <div>
      <img src={errorIMG} alt="error404" />
      console.log(error404);
    </div>
  );
}

export default ErrorPage;