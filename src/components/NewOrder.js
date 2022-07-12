import styled from 'styled-components'
import foods from '../food.json'
import { useGlobalContext } from '../context/global_context'
import { useState } from 'react'

function NewOrder() {
  const { orders, setOrders } = useGlobalContext()
  const [table, setTable] = useState('')
  const [waiter, setWaiter] = useState('')
  const [food, setFood] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    const orderPresent = orders.find((item) => item.table === table)
    const price = foods.find((item) => item.name === food).price
    let newOrder = {
      id: Date.now(),
      table: table,
      waiter: waiter,
      status: 'pending',
      price: price * +quantity,
      food: [
        {
          name: food,
          amount: quantity,
          price: price * +quantity,
          status: 'pending',
        },
      ],
    }
    console.log(newOrder)
  }

  return (
    <Wrapper>
      <form>
        <div className='select'>
          <label htmlFor='table'>Table</label>
          <select
            id='table'
            value={table}
            onChange={(e) => setTable(e.target.value)}
          >
            <option></option>
            <option>m11</option>
            <option>m12</option>
            <option>m13</option>
            <option>m14</option>
            <option>m15</option>
          </select>
        </div>
        <div className='select'>
          <label htmlFor='waiter'>Waiter</label>
          <select
            id='waiter'
            value={waiter}
            onChange={(e) => setWaiter(e.target.value)}
          >
            <option></option>
            <option>Kamil</option>
            <option>Nizami</option>
          </select>
        </div>
        <div className='select'>
          <label htmlFor='food'>Food</label>
          <select
            id='food'
            value={food}
            onChange={(e) => setFood(e.target.value)}
          >
            <option></option>
            {foods?.map((item) => {
              return <option key={item.name}>{item.name}</option>
            })}
          </select>
        </div>
        <div className='select'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            id='quantity'
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className='add' onClick={handleAdd}>
          Add an order
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  form {
    width: 300px;
    margin: auto;
  }

  .select {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 1rem 0;
  }

  label {
    align-self: center;
  }

  select,
  input {
    padding: 0.5rem;
  }

  .add {
    border: none;
    background: lightblue;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
  }
`

export default NewOrder
