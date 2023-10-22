import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishListSlice'
import { addToCart } from '../redux/slice/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishListReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch (addToCart(product))
    dispatch (removeFromWishlist(product.id))
  }

  return (
    <div style={{marginTop:'100px'}}>
<Row className='m-5'>
  {
    wishlistArray.length>0?
    wishlistArray.map((product,index)=>(
      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
      <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          <p>{product?.description.slice(0,55)}...</p>
          <h5 className='fw-bolder'>$ {product?.price}</h5>
        </Card.Text>
       <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'>
            <i className="fa-solid fa-trash text-danger fa-2x"></i>
          </Button>
          <Button onClick={()=>(handleWishlistCart(product))} className='btn btn-light'>
            <i className="fa-solid fa-cart-plus text-warning fa-2x"></i>
          </Button>
       </div>
      </Card.Body>
    </Card>
      </Col> 
    )):

    <div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
      <img height={'250px'} src="https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9521b4b7adc2ede5194a30481a1994f52968b0d1f9d&rid=giphy.gif&ct=s" alt="" />
      <h4 className='fw-bolder text-dark'>Your Wishlist Is Empty!!!</h4>
      <Link style={{textDecoration:'none'}} className='btn btn-warning rounded mt-3' to={'/'}>Back To Home</Link>
    </div>
  }
</Row>
    </div>
  )
}

export default Wishlist