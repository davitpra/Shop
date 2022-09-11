import React , {useContext}from 'react';
import close from '@icons/icon_close.png'
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext';

const OrderItem = ({product, indexValue}) => {
	const {removeFromCart} = useContext (AppContext)
	const handleRemove = (index) => {
		removeFromCart(index)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]}alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close}  onClick = {()=>handleRemove(indexValue)} alt="close" />
		</div>
	);
}

export default OrderItem;