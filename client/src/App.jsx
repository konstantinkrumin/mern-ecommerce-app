import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';

const App = () => {
	const user = useSelector(state => state.user.currentUser);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/products/:category">
					<ProductList />
				</Route>
				<Route path="/product/:id">
					<Product />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/success">
					<Success />
				</Route>
				<Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
				<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
			</Switch>
		</Router>
	);
};

export default App;
