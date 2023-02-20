import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/v3/Home';

import Navbar from './component/layout/Navbar';
import Products from './component/cart/Products';
import Cart from './component/cart/Cart';
import Additem from './component/addproducts/AddItem';
import store from './store';
import { Provider } from 'react-redux';
import './assets/main.css';
import { getusercart } from './actions/getUserCart';
function App() {
	// useEffect(() => {
	// 	store.dispatch(getusercart());
	// }, []);
	return (
		<Home />
		// <Provider store={store}>
		// 	<Router>
		// 		<Navbar />
		// 		<Route exact path='/' component={Products} />
		// 		<Switch>
		// 			<Route exact path='/additem' component={Additem} />
		// 			<Route exact path='/cart' component={Cart} />
		// 		</Switch>
		// 	</Router>
		// </Provider>
	);
}

export default App;
