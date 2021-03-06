import styled from 'styled-components'
import { MdDashboard, MdMenuBook } from 'react-icons/md'
import { GoListOrdered } from 'react-icons/go'
import { MdAddCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Sidebar(props) {
  return (
    <Wrapper>
      <div className='sidenav-items'>
        <Link to='/neworder' className='sidenav-item'>
          <MdAddCircle className='icon' style={{ color: 'green' }} />
          <p>New order</p>
        </Link>
        <Link to='/orders' className='sidenav-item'>
          <GoListOrdered className='icon' />
          <p>Orders</p>
        </Link>
        <Link to='/' className='sidenav-item'>
          <MdMenuBook className='icon' />
          <p>Menu</p>
        </Link>
        <Link to='/' className='sidenav-item'>
          <MdDashboard className='icon' />
          <p>Dashboard</p>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70px;
  overflow: hidden;
  height: calc(100vh - 100px);
  background: #f0f0fa;
  display: grid;
  place-items: center;
  position: relative;
  transition: all 1s, overflow 5s;
  :hover {
    width: 200px;
  }

  .sidenav-items {
    width: 200px;
    display: grid;
    grid-template-rows: repeat(3, min-content);
    row-gap: 4rem;
    place-items: center;
    transition: all 1s;
  }

  .sidenav-item {
    display: grid;
    grid-template-columns: 2rem 6rem;
    column-gap: 2rem;
    place-items: center;
    text-decoration: none;
    cursor: pointer;
  }

  .icon {
    font-size: 1.5rem;
    color: purple;
  }

  p {
    justify-self: start;
    font-size: 1.2rem;
  }

  .hamburger {
    align-self: start;
    width: 50px;
    position: absolute;
    top: 0;
    left: 50;
  }
`

export default Sidebar
