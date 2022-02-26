import logo from './logo.svg';
import './App.css';
import NewProduct from './pages/NewProduct';
import HighBudgetPage from './pages/HighBudgetPage';
import Cart from './pages/Cart';
import LowBudgetPage from './pages/LowBudgetPage';
//import SingleProduct from './pages/SingleProduct';
//<SingleProduct />
function App() {
  return (
    <div className='App'>
      <HighBudgetPage />
      <LowBudgetPage />
      <Cart />
    </div>
  );
}

export default App;
