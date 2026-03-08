import headerImage from '../assets/Header.jpg'; 

const Header = () => {
  return (
    
    <header 
      className="header-background text-center" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage})` }}
    >
      <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 mx-auto" />
    </header>
  );
};

export default Header;