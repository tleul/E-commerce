import React, { Fragment } from 'react';

const Additem = () => {
	return (
		<Fragment>
			<br />
			<br />
			<br /> <br />
			<br />
			<h3> Welocme Admin Please Add an Item </h3>
			<hr class='soft' />
			<div class='well'>
				<form class='form-horizontal'>
					<h3>Iem Details Details</h3>

					<div class='control-group'>
						<label class='control-label' for='itemName'>
							Item Name <sup>*</sup>
						</label>
						<div class='controls'>
							<input
								type='text'
								id='itemName'
								placeholder='Item Name'
								name='itemname'
							/>
						</div>
					</div>
					<div class='control-group'>
						<label class='control-label' for='inputEmail'>
							Item Description <sup>*</sup>
						</label>
						<div class='controls'>
							<input
								type='text'
								name='itemdescription'
								placeholder='Item Description'
							/>
						</div>
					</div>
					<div class='control-group'>
						<label class='control-label' for='inputEmail'>
							Unit Price <sup>*</sup>
						</label>
						<div class='controls'>
							<input
								type='number'
								name='unitprice'
								placeholder='Unit Price'
							/>
						</div>
					</div>
					<div class='control-group'>
						<label class='control-label' for='inputEmail'>
							Please Attach Item Image <sup>*</sup>
						</label>
						<div class='controls'>
							<input
								style={{
									border: 'none',
									color: 'black',
								}}
								class='exclusive shopBtn'
								type='file'
								name='itemimage'
							/>
						</div>
					</div>

					<div class='control-group'>
						<div class='controls'>
							<input
								type='submit'
								name='submitAccount'
								value='Add Item'
								class='exclusive shopBtn'
							/>
						</div>
					</div>
				</form>
			</div>
		</Fragment>
	);
};
export default Additem;
