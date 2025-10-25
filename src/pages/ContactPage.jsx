import { useState } from "react";
import { Button } from "../components/Button";

export const ContactPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", user);
  };

  const handleUsernameInput = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const handleEmailInput = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handleMessageInput = (e) => {
    setUser({ ...user, message: e.target.value });
  };

  return (
    <div className="flex flex-col items-center bg-[#F2F2F2]">
      <h1>ContactPage</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="username">Nombre</label>
          <input
            type="text"
            required
            onChange={handleUsernameInput}
            className="border border-gray-400 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"  
            required
            onChange={handleEmailInput}    
            className="border border-gray-400 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Mensaje</label>
          <textarea
            required
            className="border border-gray-400 p-2"
            placeholder="Mensaje"
            onChange={handleMessageInput}
          ></textarea>
        </div>
        <Button boton="Enviar" />
      </form>
    </div>
  );
};
