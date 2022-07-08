import styled from 'styled-components'
import { useGlobalContext } from '../context/global_context'
import { useParams, useOutletContext } from 'react-router-dom'

function SingleOrder() {
  let params = useParams()
  const { orders, setOrders } = useGlobalContext()
  const order = orders?.find((item) => item.id === +params.orderID)
  return (
    <Wrapper>
      <h2>{`Table ${order?.table} order details`}</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default SingleOrder
