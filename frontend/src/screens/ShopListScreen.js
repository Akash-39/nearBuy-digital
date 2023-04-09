import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listShop,
  deleteShop,
  createShop,
} from '../actions/shopActions'
import { SHOP_CREATE_RESET } from '../constants/shopConstants'

const ShopListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const shopList = useSelector((state) => state.shopList)
  const { loading, error, shops, page, pages } = shopList

  const shopDelete = useSelector((state) => state.shopDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = shopDelete

  const shopCreate = useSelector((state) => state.shopCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    shop: createdShop,
  } = shopCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: SHOP_CREATE_RESET })

    if (!userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/shop/${createdShop._id}/edit`)
    } else {
      dispatch(listShop('', pageNumber))
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdShop,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteShop(id))
    }
  }

  const createShopHandler = () => {
    dispatch(createShop())
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Shops</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createShopHandler}>
            <i className='fas fa-plus'></i> Create Shop
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ADDRESS</th>
                <th>POSTAL CODE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shops.map((shop) => (
                <tr key={shop._id}>
                  <td>{shop._id}</td>
                  <td>{shop.name}</td>
                  <td>{shop.address}</td>
                  <td>{shop.postalCode}</td>
                  
                  <td>
                    <LinkContainer to={`/admin/shop/${shop._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(shop._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  )
}

export default ShopListScreen