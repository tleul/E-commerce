import React, { Fragment, useState, useEffect } from 'react';
import API from '../../api/api';
import { Link } from 'react-router-dom';

const Products = () => {
	const [productList, setProductList] = useState({
		loading: false,
		products: null,
	});
	const getProducts = async () => {
		const res = await API.get('/getproduct');
		console.log(res.data);
		setProductList({
			loading: true,
			products: res.data,
		});
	};
	useEffect(() => {
		getProducts();
		console.log(productList);
	}, []);
	return (
		productList.loading && (
			<Fragment>
				<br />
				<br />
				<br />
				<div className='well well-small'>
					<h3>Our Products </h3>
					<div className='row-fluid'>
						<ul className='thumbnails'>
							{productList.loading &&
								productList.products.map((item) => (
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
													<strong> </strong>
												</p>
												<h4>
													<Link
														className='shopBtn'
														to='#'
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
export default Products;
