import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getusercart } from './../../actions/getUserCart';

import { PropTypes } from 'prop-types';
const Cart = ({ getusercart }) => {
	useEffect(() => {
		getusercart();
	});
	return (
		<Fragment>
			<br />
			<br />
			<br />
			<br />
			<div class='well well-small'>
				<h1>
					Check Out{' '}
					<small class='pull-right'> 2 Items are in the cart </small>
				</h1>
				<hr class='soften' />
				<table class='table table-bordered table-condensed'>
					{' '}
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
						<tr>
							<td>
								<img
									width='100'
									src='assets/img/e.jpg'
									alt=''
								/>
							</td>
							<td>
								Items name here
								<br />
								Carate : 22
								<br />
								Model : n/a
							</td>
							<td> - </td>
							<td>
								<span class='shopBtn'>
									<span class='icon-ok'></span>
								</span>{' '}
							</td>
							<td>$50.00</td>
							<td>
								<input
									class='span1'
									style={{ maxWidth: 34 }}
									placeholder='1'
									id='appendedInputButtons'
									size='16'
									type='text'
									value='2'
								/>
								<div class='input-append'>
									<button class='btn btn-mini' type='button'>
										-
									</button>
									<button class='btn btn-mini' type='button'>
										{' '}
										+{' '}
									</button>
									<button
										class='btn btn-mini btn-danger'
										type='button'>
										<span class='icon-remove'></span>
									</button>
								</div>
							</td>
							<td>$100.00</td>
						</tr>
						<tr>
							<td>
								<img
									width='100'
									src='assets/img/f.jpg'
									alt=''
								/>
							</td>
							<td>
								Item names and brief details
								<br />
								Carate:24 <br />
								Model:HBK24
							</td>
							<td> - </td>
							<td>
								<span class='shopBtn'>
									<span class='icon-ok'></span>
								</span>{' '}
							</td>
							<td>$348.42</td>
							<td>
								<input
									class='span1'
									style={{ maxWidth: 34 }}
									placeholder='1'
									size='16'
									type='text'
								/>
								<div class='input-append'>
									<button class='btn btn-mini' type='button'>
										-
									</button>
									<button class='btn btn-mini' type='button'>
										+
									</button>
									<button
										class='btn btn-mini btn-danger'
										type='button'>
										<span class='icon-remove'></span>
									</button>
								</div>
							</td>
							<td>$348.42</td>
						</tr>
						<tr>
							<td colspan='6' class='alignR'>
								Total products:{' '}
							</td>
							<td> $448.42</td>
						</tr>
						<tr>
							<td colspan='6' class='alignR'>
								Total products:{' '}
							</td>
							<td> $448.42</td>
						</tr>
						<tr>
							<td colspan='6' class='alignR'>
								Total products:{' '}
							</td>
							<td> $448.42</td>
						</tr>
						<tr>
							<td colspan='6' class='alignR'>
								Total products:{' '}
							</td>
							<td class='label label-primary'> $448.42</td>
						</tr>
					</tbody>
				</table>

				<br />
			</div>
		</Fragment>
	);
};
Cart.propTypes = {
	getusercart: PropTypes.func.isRequired,
};
export default connect(null, { getusercart })(Cart);
