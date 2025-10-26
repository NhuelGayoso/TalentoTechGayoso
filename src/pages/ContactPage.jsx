import { useState } from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const ContactPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
    phone: "",
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
  const handlePhoneInput = (e) => {
    setUser({ ...user, phone: e.target.value });
  };

  return (
    <div className="  mx-auto justify-center items-center  gap-5 p-5 animate-fade-up m-5">
      <div className="w-full lg:w-1/2  p-5 gap-5 flex flex-col rounded-lg bg-white opacity-90 mx-auto">
        <h2 className="text-2xl font-bold">Contactanos</h2>
        <p className="text-lg">
          ⌚ Estamos disponibles de lunes a viernes de 9:00 a 18:00
        </p>
        <p className="text-lg">📞 Telefono: 123456789</p>
        <p className="text-lg">📧 Email: contacto@fishingstore.com</p>
        <div className="flex flex-col bg-white opacity-90 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="username" className="text-lg font-bold">
              Nombre
            </label>
            <input
              className="border border-gray-400 rounded placeholder:text-gray-400 p-2"
              type="text"
              id="username"
              name="username"
              placeholder="ej: Juan Perez"
              value={user.username}
              onChange={handleUsernameInput}
            />
            <label htmlFor="email" className="text-lg font-bold">
              Email
            </label>
            <input
              className="border border-gray-400 rounded placeholder:text-gray-400 p-2"
              type="email"
              id="email"
              name="email"
              placeholder="ej: juanperez@gmail.com"
              value={user.email}
              onChange={handleEmailInput}
            />
            <label htmlFor="phone" className="text-lg font-bold">
              Telefono
            </label>
            <input
              className="border border-gray-400 rounded placeholder:text-gray-400 p-2"
              type="text"
              id="phone"
              name="phone"
              placeholder="ej: 123456789"
              value={user.phone}
              onChange={handlePhoneInput}
            />
            <label htmlFor="message" className="text-lg font-bold">
              Mensaje
            </label>
            <textarea
              className="border border-gray-400 rounded placeholder:text-gray-400 p-2 h-24"
              id="message"
              name="message"
              placeholder="ej: Tu mensaje"
              value={user.message}
              onChange={handleMessageInput}
            ></textarea>
            <Button boton="Enviar" />
          </form>
        </div>
      </div>
    </div>
  );
};
