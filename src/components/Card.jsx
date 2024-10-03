const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={` ${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;

// bg-indigo-100 p-6 rounded-lg shadow-md
