import styled from 'styled-components'
import { MdDashboard, MdMenuBook } from 'react-icons/md'
import { GoListOrdered } from 'react-icons/go'
import Hamburger from 'hamburger-react'

function Sidebar(props) {
  return (
    <Wrapper isOpen={props.isOpen}>
      <div className='sidenav-items'>
        <div className='sidenav-item'>
          <MdDashboard className='icon' />
          <p>Dashboard</p>
        </div>
        <div className='sidenav-item'>
          <MdMenuBook className='icon' />
          <p>Menu</p>
        </div>
        <div className='sidenav-item'>
          <GoListOrdered className='icon' />
          <p>Orders</p>
        </div>
      </div>
      <div className='hamburger'>
        <Hamburger
          color={'purple'}
          toggled={props.isOpen}
          toggle={props.setOpen}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: ${(props) => (props.isOpen ? '250px' : '70px')};
  overflow: ${(props) => (!props.isOpen ? 'hidden' : 'visible')};
  height: calc(100vh - 100px);
  background: #f0f0fa;
  display: grid;
  place-items: center;
  position: relative;
  transition: all 1s, overflow 5s;

  .sidenav-items {
    width: ${(props) => (props.isOpen ? '250px' : '200px')};
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
