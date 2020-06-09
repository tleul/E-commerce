import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
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
								<span className='icon-shopping-cart'></span> 2
								Item(s) -{' '}
								<span className='badge badge-warning'>
									{' '}
									$448.42
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Navbar;
