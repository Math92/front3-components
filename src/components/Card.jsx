// eslint-disable-next-line react/prop-types
const Card = ({ texto, children }) => {
    return (
      <div className="card">
        <p>{texto}</p>
        {children && <div className="card-children">{children}</div>}
      </div>
    );
  };
  
  export default Card;
  