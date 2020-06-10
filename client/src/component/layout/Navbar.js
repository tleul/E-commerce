import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getusercart } from './../../actions/getUserCart';
import { PropTypes } from 'prop-types';
const Navbar = ({ getusercart, userBucket, loading }) => {
	// useEffect(() => {
	// 	getusercart();
	// }, [getusercart]);

	return (
		<Fragment>
			<div className='navbar navbar-inverse navbar-fixed-top'>
				<div className='topNav'>
					<div className='container'>
						<div className='alignR'>
							<div className='pull-left socialNw'>
								<Link to='#'>
									<span className='icon-twitter'></span>
								</Link>
								<Link to='#'>
									<span className='icon-facebook'></span>
								</Link>
								<Link to='#'>
									<span className='icon-youtube'></span>
								</Link>
								<Link to='#'>
									<span className='icon-tumblr'></span>
								</Link>
							</div>
							<Link to='/'>
								{' '}
								<span className='icon-home'></span> Home
							</Link>
							<Link to='#'>
								<span className='icon-user'></span> My Account
							</Link>
							<Link to='/additem'>
								<span className='icon-edit'></span> Add Item{' '}
							</Link>
							<Link to='#'>
								<span className='icon-envelope'></span> Contact
								us
							</Link>
							<Link to='/cart'>
								<span className='icon-shopping-cart'></span>{' '}
								{loading && userBucket.length}
								Item(s) -{' '}
								<span className='badge badge-warning'>
									{' '}
									$
									{/* {loading &&
										userBucket.reduce(
											(acc, item) => acc + item.unitprice,
											0,
										) +
											userBucket.reduce(
												(acc, item) =>
													acc + item.unitprice,
												0,
											) -
											0.8 *
												userBucket.reduce(
													(acc, item) =>
														acc + item.unitprice,
													0,
												)} */}
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
Navbar.propTypes = {
	userBucket: PropTypes.array,
	getusercart: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	userBucket: state.cart.usercart,
	loading: state.cart.loading,
});
export default connect(mapStateToProps, { getusercart })(Navbar);
