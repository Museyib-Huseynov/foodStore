import React, { useState, useEffect, useContext } from 'react'

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const orders = await fetch('http://localhost:3000/orders.json')
      const result = await orders.json()

      const order = { pending: 1, done: 2 }
      result.sort((a, b) => order[a.status] - order[b.status])
      setOrders(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <GlobalContext.Provider value={{ orders, setOrders }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
