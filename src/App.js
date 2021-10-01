import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/product-details">
          <ProductDetailsPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/account">
          <AccountPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
