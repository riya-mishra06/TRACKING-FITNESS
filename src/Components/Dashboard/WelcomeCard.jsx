const WelcomeCard = ({ name, date }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl md:text-3xl font-bold">Welcome back, {name}!</h1>
      <p className="text-gray-300 text-sm md:text-base">{date}</p>
    </div>
  );
};

export default WelcomeCard;
