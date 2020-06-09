import React, { Fragment, useState } from 'react';
import API from '../../api/api';
import $ from 'jquery';
const Additem = () => {
	const [fileStatus, setFileStatus] = useState({
		selectedFile: null,
	});
	const [itemData, setitemData] = useState({
		itemname: '',
		itemdescription: '',
		unitprice: '',
		itemImageURL: '',
	});

	const singleFileChangedHandler = (event) => {
		setFileStatus({
			selectedFile: event.target.files[0],
		});
	};
	const onChange = (e) => {
		setitemData({ ...itemData, [e.target.name]: e.target.value });
	};
	const { itemname, itemdescription, unitprice, itemImageURL } = itemData;
	const singleFileUploadHandler = async () => {
		const data = new FormData(); // If file selected

		const body = JSON.stringify({
			itemImageURL,
			itemname,
			itemdescription,
			unitprice,
		});
		if (fileStatus.selectedFile) {
			data.set('prod', body);
			data.append(
				'profileImage',
				fileStatus.selectedFile,
				fileStatus.selectedFile.name,
			);
			console.log(data);
			const response = await API.post('/addproduct/image', data, {
				headers: {
					accept: 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				},
			});

			console.log(response);
			if (200 === response.status) {
				// If file size is larger than expected.
				if (response.data.error) {
					if ('LIMIT_FILE_SIZE' === response.data.error.code) {
						ocShowAlert('Max size: 2MB', 'red');
					} else {
						console.log(response.data); // If not the given file type
						ocShowAlert(response.data.error, 'red');
					}
				} else {
					// Success

					ocShowAlert('Your Item is Uploaded', '#3089cf');
				}
			}
		} else {
			ocShowAlert('Please upload file', 'red');
			console.log('please upload a file ');
		}
	};
	const sendItem = (e) => {
		e.preventDefault();
		singleFileUploadHandler();
	};
	const ocShowAlert = (message, background = '#3089cf') => {
		let alertContainer = document.querySelector('#oc-alert-container'),
			alertEl = document.createElement('div'),
			textNode = document.createTextNode(message);
		alertEl.setAttribute('class', 'oc-alert-pop-up');
		$(alertEl).css('background', background);
		alertEl.appendChild(textNode);
		alertContainer.appendChild(alertEl);
		setTimeout(function () {
			$(alertEl).fadeOut('slow');
			$(alertEl).remove();
		}, 3000);
	};
	return (
		<Fragment>
			<br />
			<br />
			<br /> <br />
			<br />
			<h3> Welocme Admin Please Add an Item </h3>
			<hr className='soft' />
			<div className='well'>
				<div id='oc-alert-container'></div>
				<form className='form-horizontal' onSubmit={(e) => sendItem(e)}>
					<h3>Iem Details </h3>

					<div className='control-group'>
						<label className='control-label' htmlFor='itemName'>
							Item Name <sup>*</sup>
						</label>
						<div className='controls'>
							<input
								type='text'
								id='itemName'
								placeholder='Item Name'
								name='itemname'
								value={itemname}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</div>
					<div className='control-group'>
						<label className='control-label' htmlFor='inputEmail'>
							Item Description <sup>*</sup>
						</label>
						<div className='controls'>
							<input
								type='text'
								name='itemdescription'
								placeholder='Item Description'
								value={itemdescription}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</div>
					<div className='control-group'>
						<label className='control-label' htmlFor='inputEmail'>
							Unit Price <sup>*</sup>
						</label>
						<div className='controls'>
							<input
								type='number'
								name='unitprice'
								placeholder='Unit Price'
								value={unitprice}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</div>
					<div className='control-group'>
						<label className='control-label' htmlFor='inputEmail'>
							Please Attach Item Image <sup>*</sup>
						</label>
						<div className='controls'>
							<input
								style={{
									border: 'none',
									color: 'black',
								}}
								className='exclusive shopBtn'
								type='file'
								onChange={singleFileChangedHandler}
								name='itemimage'
							/>
						</div>
					</div>

					<div className='control-group'>
						<div className='controls'>
							<input
								type='submit'
								name='submitAccount'
								value='add Item'
								className='exclusive shopBtn'
							/>
						</div>
					</div>
				</form>
			</div>
		</Fragment>
	);
};
export default Additem;
