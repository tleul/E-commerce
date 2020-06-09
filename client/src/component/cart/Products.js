import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
const Products = () => {
	return (
		<Fragment>
			<br />
			<br />
			<br />
			<div className='well well-small'>
				<h3>Our Products </h3>
				<div className='row-fluid'>
					<ul className='thumbnails'>
						<li className='span4'>
							<div className='thumbnail'>
								<Link to='#' className='overlay'></Link>
								<Link
									className='zoomTool'
									to='#'
									title='add to cart'>
									<span className='icon-search'></span> QUICK
									VIEW
								</Link>
								<Link to='#'>
									<img src='assets/img/a.jpg' alt='' />
								</Link>
								<div className='caption cntr'>
									<p>Manicure & Pedicure</p>
									<p>
										<strong> $22.00</strong>
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
										<Link className='pull-left' to='#'>
											Add to Wish List{' '}
										</Link>
										<Link className='pull-left' to='#'>
											{' '}
											Add to Compare{' '}
										</Link>
									</div>
									<br className='clr' />
								</div>
							</div>
						</li>
						<li className='span4'>
							<div className='thumbnail'>
								<Link to='#' className='overlay'></Link>
								<Link
									className='zoomTool'
									to='#'
									title='add to cart'>
									<span className='icon-search'></span> QUICK
									VIEW
								</Link>
								<Link to='#'>
									<img src='assets/img/b.jpg' alt='' />
								</Link>
								<div className='caption cntr'>
									<p>Manicure & Pedicure</p>
									<p>
										<strong> $22.00</strong>
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
										<Link className='pull-left' to='#'>
											Add to Wish List{' '}
										</Link>
										<Link className='pull-left' to='#'>
											{' '}
											Add to Compare{' '}
										</Link>
									</div>
									<br className='clr' />
								</div>
							</div>
						</li>
						<li className='span4'>
							<div className='thumbnail'>
								<Link to='#' className='overlay'></Link>
								<Link
									className='zoomTool'
									to='#'
									title='add to cart'>
									<span className='icon-search'></span> QUICK
									VIEW
								</Link>
								<Link to='#'>
									<img src='assets/img/c.jpg' alt='' />
								</Link>
								<div className='caption cntr'>
									<p>Manicure & Pedicure</p>
									<p>
										<strong> $22.00</strong>
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
										<Link className='pull-left' to='#'>
											Add to Wish List{' '}
										</Link>
										<Link className='pull-left' to='#'>
											{' '}
											Add to Compare{' '}
										</Link>
									</div>
									<br className='clr' />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
};
export default Products;
