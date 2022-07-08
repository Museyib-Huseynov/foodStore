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

      const order = { pending: 1, done: 2, rejected: 3 }
      result.sort((a, b) => order[a.status] - order[b.status])
      setOrders(result)
    } catch (error) {
      console.log(error)
    }
  }

  const defineColor = (order) => {
    if (order.status === 'done') {
      return 'success'
    }
    if (order.status === 'rejected') {
      return 'rejected'
    }
  }

  return (
    <Wrapper>
      <div className='all-orders'>
        <h2>Total Orders</h2>
        <br />
        <table>
          <tr>
            <th></th>
            <th>Table</th>
            <th>Waiter</th>
            {/* <th>Food</th> */}
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
          {orders?.map((order, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{order.table}</td>
                <td>{order.waiter}</td>
                {/* <td>{order.food}</td> */}
                <td>{order.price}</td>
                <td className={defineColor(order)}>{order.status}</td>
                <td>
                  <button className='see-btn'>See</button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
      <div className='single-order'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 2rem;

  table {
    /* width: 80%; */
    border-collapse: collapse;
    text-align: center;
  }

  th,
  td {
    padding: 0.6rem 1rem;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: purple;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  .success {
    color: green;
    font-weight: 600;
  }

  .rejected {
    color: red;
  }

  .see-btn {
    border: none;
    border-radius: 5px;
    background: green;
    color: #fff;
    padding: 0.2rem;
    cursor: pointer;
  }
`

export default Orders
