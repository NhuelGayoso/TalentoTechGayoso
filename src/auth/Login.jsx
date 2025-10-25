import dorado from "../../public/img/dorado.jpg";
import { Button } from "../components/Button";

export const Login = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center h-screen text-white">
        <div className="w-full h-screen hidden lg:block lg:w-1/2">
          <img
            src={dorado}
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Iniciar Sesion</h1>
          <form action="#" method="POST">
            <div className="mb-4">
              <label for="username" className="block text-white">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label for="password" className="block text-white">
                Mail
              </label>
              <input
                type="email"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-red-500"
              />
              <label for="remember" className="text-white ml-2">    
                Recordarme
              </label>
            </div>
            <div className="mb-4 flex items-center justify-center w-full">
              <Button boton="Iniciar Sesion" /> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
