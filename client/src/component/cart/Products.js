import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProducts } from './../../actions/addProducts';

import { addtocart } from './../../actions/addtocart';

const Products = ({ getProducts, productList, loading, addtocart }) => {
	useEffect(() => {
		getProducts();
	}, []);
	const additem = (id) => {
		addtocart(id);
	};

	console.log(productList);
	return (
		loading && (
			<Fragment>
				<br />
				<br />
				<br />
				<div className='well well-small'>
					<h3>Our Products </h3>
					<div className='row-fluid'>
						<ul className='thumbnails'>
							{loading &&
								productList.map((item) => (
									<li key={item._id} className='span4'>
										<div className='thumbnail'>
											<Link
												to='#'
												className='overlay'></Link>
											<Link
												className='zoomTool'
												to='#'
												title='add to cart'>
												<span className='icon-search'></span>{' '}
												QUICK VIEW
											</Link>
											<Link to='#'>
												<img
													src={item.itemImageURL}
													alt=''
												/>
											</Link>
											<div className='caption cntr'>
												<p>{item.itemname}</p>
												<p>
													<strong>
														{' '}
														${item.unitprice}
													</strong>
												</p>
												<h4>
													<Link
														className='shopBtn'
														to='#'
														onClick={(e) =>
															additem(item._id, e)
														}
														title='add to cart'>
														{' '}
														Add to cart{' '}
													</Link>
												</h4>
												<div className='actionList'>
													<Link
														className='pull-left'
														to='#'>
														Add to Wish List{' '}
													</Link>
													<Link
														className='pull-left'
														to='#'>
														{' '}
														Add to Compare{' '}
													</Link>
												</div>
												<br className='clr' />
											</div>
										</div>
									</li>
								))}
						</ul>
					</div>
				</div>
			</Fragment>
		)
	);
};
Products.propTypes = {
	getProducts: PropTypes.func.isRequired,
	productList: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	addtocart: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	productList: state.products.products,
	loading: state.products.loading,
});
export default connect(mapStateToProps, { getProducts, addtocart })(Products);
