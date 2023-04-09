import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listShopDetails, updateShop } from '../actions/shopActions'
import { SHOP_UPDATE_RESET } from '../constants/shopConstants'

const ShopEditScreen = ({ match, history }) => {
  const shopId = match.params.id

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState(0)

  const dispatch = useDispatch()

  const shopDetails = useSelector((state) => state.shopDetails)
  const { loading, error, shop } = shopDetails

  const shopUpdate = useSelector((state) => state.shopUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = shopUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SHOP_UPDATE_RESET })
      history.push('/admin/shoplist')
    } else {
      if (!shop.name || shop._id !== shopId) {
        dispatch(listShopDetails(shopId))
      } else {
        setName(shop.name)
        setAddress(shop.address)
        setPostalCode(shop.postalCode)
      }
    }
  }, [dispatch, history, shopId, shop, successUpdate])

  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateShop({
        _id: shopId,
        name,
        address,
        postalCode,
      })
    )
  }

  return (
    <>
      <Link to='/admin/shoplist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Shop</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='postalCode'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter postal code'
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              ></Form.Control>
            </Form.Group>


            

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ShopEditScreen