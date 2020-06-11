import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getusercart } from './../../actions/getUserCart';

import { PropTypes } from 'prop-types';
const Cart = ({ getusercart, loading, userBucket: { cart } }) => {
	useEffect(() => {
		getusercart();
		console.log('run');
	}, []);
	// const addQty = (e, id) => {
	// 	if (cart) {
	// 		const check = cart.filter((item) => item._id == id);

	// 		check[0].qty = check[0].qty + 1;

	// 		updateQuantity(id, check);
	// 	}
	// };
	// const minusQty = (e, id) => {
	// 	if (cart) {
	// 		const check = cart.filter((item) => item._id == id);

	// 		check[0].qty = check[0].qty - 1;

	// 		updateQuantity(id, check);
	// 	}
	// };
	return (
		loading && (
			<Fragment>
				<br />
				<br />
				<br />
				<br />
				<div className='well well-small'>
					<h1>
						Check Out{' '}
						<small className='pull-right'>
							{' '}
							{cart.length}
							Items are in the cart{' '}
						</small>
					</h1>
					<hr className='soften' />
					<table className='table table-bordered table-condensed'>
						<thead>
							<tr>
								<th>Product</th>
								<th>Description</th>
								<th> Ref. </th>
								<th>Avail.</th>
								<th>Unit price</th>
								<th>Qty </th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((useritem) => (
								<tr key={useritem._id}>
									<td>
										<img
											width='100'
											src={useritem.itemImageURL}
											alt=''
										/>
									</td>
									<td>{useritem.itemdescription}</td>
									<td> - </td>
									<td>
										<span className='shopBtn'>
											<span className='icon-ok'></span>
										</span>
									</td>
									<td>${useritem.unitprice}</td>

									<td>
										<p>{useritem.qty}</p>
										<div className='input-append'>
											<button
												className='btn btn-mini'
												type='button'>
												-
											</button>
											<button
												className='btn btn-mini'
												type='button'>
												{' '}
												+{' '}
											</button>
											<button
												className='btn btn-mini btn-danger'
												type='button'>
												<span className='icon-remove'></span>
											</button>
										</div>
									</td>
									<td>${useritem.totalPrice}</td>
								</tr>
							))}

							<tr>
								<td colSpan='6' className='alignR'>
									Number of Items:{' '}
								</td>
								<td>{}</td>
							</tr>
							<tr>
								<td colSpan='6' className='alignR'>
									Discount:{' '}
								</td>
								<td> $SOON</td>
							</tr>
							<tr>
								<td colSpan='6' className='alignR'>
									Tax (8%):{' '}
								</td>
								<td>
									{' '}
									$
									{cart.reduce(
										(acc, item) => acc + item.unitprice,
										0,
									) -
										0.8 *
											cart.reduce(
												(acc, item) =>
													acc + item.unitprice,
												0,
											)}
								</td>
							</tr>
							<tr>
								<td colSpan='6' className='alignR'>
									Total :{' '}
								</td>
								<td className='label label-primary'>
									{' '}
									$
									{cart.reduce(
										(acc, item) => acc + item.unitprice,
										0,
									) +
										cart.reduce(
											(acc, item) => acc + item.unitprice,
											0,
										) -
										0.8 *
											cart.reduce(
												(acc, item) =>
													acc + item.unitprice,
												0,
											)}
								</td>
							</tr>
						</tbody>
					</table>

					<br />
				</div>
			</Fragment>
		)
	);
};
Cart.propTypes = {
	getusercart: PropTypes.func.isRequired,
	userBucket: PropTypes.object.isRequired,

	loading: PropTypes.bool,
};
const mapStateToProps = (state) => ({
	userBucket: state.cart.usercart,
	loading: state.cart.loading,
});
export default connect(mapStateToProps, { getusercart })(Cart);
