export const Button = ({ boton }) => {
  return (
    <button className="bg-green-700 text-white font-bold p-2 rounded-lg cursor-pointer w-full hover:bg-green-600 transition-colors">
      {boton}
    </button>
  );
};
