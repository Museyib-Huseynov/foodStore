import styled from 'styled-components'
import { useState, useEffect } from 'react'

function Orders() {
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const orders = await fetch('http://localhost:3000/orders.json')
      const result = await orders.json()
      setOrders(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <h1>Orders</h1>
      {orders?.map((order) => {
        return (
          <>
            <p>{order.id}</p>
            <p>{order.food}</p>
            <hr />
          </>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Orders
