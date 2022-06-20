import ToDoCart from "./ToDoCart"
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components"
import { toDoSliceActions } from "../../store/Slices/ToDoSlice"

const ToDoList = () => {
    const dispatch = useDispatch()
    const item = useSelector(state => state.todo.item)
    const removeCart = (id) => {
        dispatch(toDoSliceActions.removeCart(id))
    }
    return (
        <Ul>
            {item.map(el => (
                <li key={el.id}>
                    <ToDoCart id={el.id} removeCart={() => removeCart(el.id)} title={el.title} />
                </li>
            ))}
        </Ul>
    )
}
const Ul = styled.ul`
display: flex;
justify-content: space-around;
& li{
    list-style: none;
    margin:10px;
}
`
export default ToDoList