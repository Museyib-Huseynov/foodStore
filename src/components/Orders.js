import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/global_context'

function Orders() {
  const { orders, setOrders } = useGlobalContext()
  let navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/orders/${id}`)
  }

  return (
    <Wrapper>
      <div className='all-orders'>
        <h2>Total Orders</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Table</th>
              <th>Waiter</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          {orders?.map((order, index) => {
            return (
              <tbody key={order.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.table}</td>
                  <td>{order.waiter}</td>
                  {/* <td>{order.food}</td> */}
                  <td>{order.price}</td>
                  <td
                    style={{ width: '5rem', textAlign: 'center' }}
                    className={order.status === 'done' ? 'success' : null}
                  >
                    {order.status}
                  </td>
                  <td>
                    <button
                      className='see-btn'
                      onClick={() => handleClick(order.id)}
                    >
                      See
                    </button>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
      <div className='single-order'>
        <Outlet />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 2rem;

  .all-orders {
    text-align: center;
  }

  table {
    /* width: 80%; */
    border-collapse: collapse;
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
