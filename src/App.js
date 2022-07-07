import styled from 'styled-components'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [isOpen, setOpen] = useState(true)
  return (
    <Wrapper isOpen={isOpen}>
      <Navbar />
      <div className='main-area'>
        <Sidebar isOpen={isOpen} setOpen={setOpen} />
        <Outlet />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-area {
    display: grid;
    grid-template-columns: min-content 1fr;
  }
`

export default App
