const Card = ({ children, bg }) => {
  return <div className={`${bg} rounded-lg shadow-md p-6`}> {children}</div>;
};

export default Card;
