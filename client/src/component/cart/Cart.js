import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getusercart } from './../../actions/getUserCart';

import { PropTypes } from 'prop-types';
import { addtocart } from '../../actions/addtocart';
import { deleteItem } from '../../actions/addtocart';

const Cart = ({
	getusercart,
	loading,
	userBucket: { cart },
	addtocart,
	deleteItem,
}) => {
	useEffect(() => {
		getusercart();
		console.log('run');
	}, []);
	const addItem = (e, id) => {
		addtocart(id);
		console.log('what');
	};
	const delItem = (e, id) => {
		deleteItem(e);
	};
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
												onClick={(e) =>
													addItem(e, useritem._id)
												}
												className='btn btn-mini'
												type='button'>
												{' '}
												+{' '}
											</button>
											<button
												onClick={(e) =>
													delItem(e, useritem._id)
												}
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
	addtocart: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	deleteItem: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	userBucket: state.cart.usercart,
	loading: state.cart.loading,
});
export default connect(mapStateToProps, { getusercart, addtocart, deleteItem })(
	Cart,
);
