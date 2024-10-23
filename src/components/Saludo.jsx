// eslint-disable-next-line react/prop-types
const Saludo = ({ nombre, children }) => {
  return (
    <div className="saludo">
      {children} {nombre}
    </div>
  );
};

export default Saludo;
