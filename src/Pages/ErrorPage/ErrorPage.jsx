import { Link, useRouteError } from "react-router-dom";
import Button from "../../Components/Button";

const ErrorPage = () => {
   const error=useRouteError()
   return (
      <div className="flex justify-center items-center flex-col min-h-screen text-center">
        <h4 className="text-5xl mb-5 text-theme-orange-red font-bold">Oops!!!</h4>
        <p>
          {error.status === 404 && (
            <div>
              <h3 className="font-medium text-3xl mb-10">Page not found</h3>
              <Link to="/">
                <Button btnName={"Go Home"}></Button>
              </Link>
            </div>
          )}
        </p>
      </div>
   );
};

export default ErrorPage;