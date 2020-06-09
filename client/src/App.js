import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import './App.css';
import Navbar from './component/layout/Navbar';
import Products from './component/cart/Products';
import Cart from './component/cart/Cart';
import Additem from './component/addproducts/AddItem';
import store from './store';
import { Provider } from 'react-redux';
function App() {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Route exact path='/' component={Products} />
				<Switch>
					<Route exact path='/additem' component={Additem} />
					<Route exact path='/cart' component={Cart} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
