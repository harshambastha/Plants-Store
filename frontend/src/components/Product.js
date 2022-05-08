import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../index.css';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' className='card-img-top'/>
			</Link>

            <Card.Body>
            <Link to={`/product/${product._id}`} className='card-product-title'>
				<Card.Title as='div'><strong>{product.name}</strong></Card.Title>
			</Link>
            <Card.Text as='h3'>Rs {product.price}</Card.Text>
            </Card.Body>

		</Card>
	);
};

export default Product;
