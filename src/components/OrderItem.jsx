import React from 'react';
import close from '@icons/icon_close.png'
import '../styles/OrderItem.scss';

const OrderItem = ({product}) => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]}alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;