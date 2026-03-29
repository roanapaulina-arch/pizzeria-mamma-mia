import Cart from './components/Cart';
import Login from './components/Login';
import Navbar from './components/Navbar';
// import Home from './components/Home';  <--- Lo comentamos por ahora
import Register from './components/Register'; 
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}  
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart /> 
      <Footer />
    </div>
  );
}

export default App;
