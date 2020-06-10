import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getusercart } from './../../actions/getUserCart';

import { PropTypes } from 'prop-types';
const Cart = ({ getusercart, loading, userBucket }) => {
	useEffect(() => {
		getusercart();
	}, []);
	console.log(userBucket);

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
							2 Items are in the cart{' '}
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
							{userBucket.map((useritem) => (
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
										<input
											className='span1'
											style={{ maxWidth: 34 }}
											placeholder='1'
											id='appendedInputButtons'
											size='16'
											type='text'
										/>
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
									<td>${useritem.unitprice}</td>
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
								<td> $448.42</td>
							</tr>
							<tr>
								<td colSpan='6' className='alignR'>
									Tax:{' '}
								</td>
								<td> $448.42</td>
							</tr>
							<tr>
								<td colSpan='6' className='alignR'>
									Total products:{' '}
								</td>
								<td className='label label-primary'>
									{' '}
									$448.42
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
	userBucket: PropTypes.array,
	loading: PropTypes.bool,
};
const mapStateToProps = (state) => ({
	userBucket: state.cart.usercart,
	loading: state.cart.loading,
});
export default connect(mapStateToProps, { getusercart })(Cart);
