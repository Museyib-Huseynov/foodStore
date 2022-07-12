import styled from 'styled-components'
import { useGlobalContext } from '../context/global_context'
import { useParams, useOutletContext } from 'react-router-dom'

function SingleOrder() {
  let params = useParams()
  const { orders, setOrders } = useGlobalContext()
  const order = orders?.find((order) => order.id === +params.orderID)

  const handleClick = (e) => {
    let newOrders = orders.map((order) => {
      if (order.id !== +params.orderID) {
        return order
      } else {
        const newFood = order.food.map((i) => {
          if (i.name !== e.target.id) {
            return i
          } else {
            i.status = i.status === 'pending' ? 'done' : 'pending'
            return i
          }
        })
        order.food = newFood
        return order
      }
    })
    newOrders = newOrders.map((order) => {
      order.status = 'done'
      for (let i = 0; i < order?.food?.length; i++) {
        if (order?.food[i].status === 'pending') {
          console.log(1)
          order.status = 'pending'
          break
        }
      }
      return order
    })
    setOrders(newOrders)
  }

  return (
    <Wrapper>
      <h2>{`Table ${order?.table} order details`}</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Food</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {order?.food?.map((food) => {
            return (
              <tr key={food.name}>
                <td>{food?.name}</td>
                <td>{food?.amount}</td>
                <td>{food?.price}</td>
                <td style={{ width: '5rem', textAlign: 'center' }}>
                  {food?.status}
                </td>
                <td>
                  <div
                    className={
                      food?.status === 'done' ? 'box green' : 'box red'
                    }
                    id={food?.name}
                    onClick={handleClick}
                  ></div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .box {
    width: 30px;
    height: 20px;
    cursor: pointer;
  }

  .green {
    background: green;
  }

  .red {
    background: red;
  }
`

export default SingleOrder
