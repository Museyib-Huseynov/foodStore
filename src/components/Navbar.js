import styled from 'styled-components'
import { MdFastfood } from 'react-icons/md'

function Navbar() {
  return (
    <Wrapper>
      <MdFastfood className='icon' />
      <h1 className='brand'>FoodStore</h1>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  place-items: center;
  column-gap: 1rem;
  height: 100px;

  .icon {
    font-size: 2rem;
    color: #fff;
    background-image: linear-gradient(to right, blue, purple);
    border-radius: 10px;
    padding: 0.5rem;
    margin-left: 2rem;
  }

  .brand {
    font-size: 1.5rem;
    background: -webkit-linear-gradient(180deg, purple, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default Navbar
