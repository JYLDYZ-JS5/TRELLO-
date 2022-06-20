import burger from './menu.png'
import trello from './trello.png'
import search from './search.png'
import bell from './bell.png'
import styled from 'styled-components'

const Header = () => {
    return <Headers>
        <img src={burger} className='img' alt='burger' />
        <Trello >
            <img src={trello} className='img' alt='burger' />
            <h1>TRELLO</h1>
        </Trello>
        <Nav>
            <span>Рабочие пространства </span>
            <span>Недавние</span>
            <span>В избранном</span>
            <span>Шаблоны</span>
            <span>Создать</span>
        </Nav>
        <Input>
            <img className='img' src={search} alt='search' />
            <input placeholder='Поисk' />
        </Input>
        <Bell >
            <img src={bell} />
            <Circleuser></Circleuser>
        </Bell>

    </Headers>
}
const Trello = styled.div`
display: flex;
align-items: center;
width: 5%;
& h1{
    color: white;
    cursor: pointer;
}
& h1:hover{
    color: #042d45;
}
`
const Headers = styled.header`
transition: background-color 300ms;
background-color: #026AA7;
box-sizing: border-box;
display: flex;
overflow: hidden;
-webkit-backdrop-filter: blur(6px);
backdrop-filter: blur(6px);
align-items: center;
padding: 6px 4px;
width: 100%;
height: 60px;
justify-content: space-between;
& .img {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    cursor: pointer;
  }
`
const Nav = styled.nav`
display: flex;
justify-content: space-around;
width: 55%;
align-items: center;
& span {
    color: white;
    font-size:larger;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
}
& span:hover {
    color: #042d45;
}
`
const Input = styled.div`
border-width: 1px;
padding-left: 7px;
height: 40px;
width: auto;
display: flex;
align-items: center;
box-shadow: 1px 1px 2px 2px rgba(255, 255, 255, 0.557);

color: white;
background-color: rgba(138, 138, 138, 0.539);
& input {
    background-color: transparent;
    border: 0px;
    box-sizing: border-box;
    color: inherit;
    cursor: inherit;
    font-size: 14px;
    min-width: 0px;
    color: white;
    outline: none;
    width: 100%;

    line-height: 1.42857;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

}
& input::placeholder {
    color: white;
}
`
const Circleuser = styled.div`
border: 2px solid rgb(255, 255, 255);
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #042d45;
`
const Bell = styled.div`
display: flex;
width: 5%;
justify-content: space-around;
& img{
    width: 35px;
    height: 35px;
}
`
export default Header