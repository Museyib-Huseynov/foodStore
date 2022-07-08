import styled from 'styled-components'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import { GlobalProvider } from './context/global_context'

function App() {
  return (
    <GlobalProvider>
      <Wrapper>
        <Navbar />
        <div className='main-area'>
          <Sidebar />
          <Outlet />
        </div>
      </Wrapper>
    </GlobalProvider>
  )
}

const Wrapper = styled.div`
  .main-area {
    display: grid;
    grid-template-columns: min-content 1fr;
  }
`

export default App
