import styled from "styled-components"
import { Kolonka } from "./AddNewKolonka"
import { useDispatch, useSelector } from 'react-redux'
import { toDoSliceActions } from "../../store/Slices/ToDoSlice"
import { useState } from 'react'
import TextArea from "../TextArea/TextArea"

const ToDoCart = (props) => {
    const dispatch = useDispatch()
    const [showInput, setShowInput] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const newTitle = useSelector(state => state.todo.newCart)
    const titleInCart = useSelector(state => state.todo.titleInCart)
    const areatext = useSelector(state=>state.todo.areatext)
    const textAreaChange = (e) => {
        dispatch(toDoSliceActions.textAreaChange(e.target.value))
    }
    const addNewCart = (e) => {
        e.preventDefault()
        setShowInput(true)
        dispatch(toDoSliceActions.addNewCart())
        console.log(newTitle)

    }

    return (
        <Kolonka>
            {showModal && <TextArea title={props.title} onCloseCart={() => setShowModal(false)} />}
            <Div>
                <div> {props.title} <div onClick={props.removeCart}>&#10006;</div></div>
                <form onSubmit={addNewCart}>
                    <ul>
                        {newTitle.map(el => (
                            < li onClick={() => setShowModal(true)} key={el.id}>{el.title} {areatext}</li>
                        ))}
                    </ul>
                    {showInput && <input value={titleInCart} onChange={textAreaChange} placeholder="Ввести заголовок для этой карточки" />
                    }
                    <button>+ Добавить карточку</button>
                </form>
            </Div>
        </Kolonka >
    )
}
const Div = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
& div{
    font-size:20px;
    display:flex;
    justify-content: space-between;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    background-color: rgba(240, 248, 255, 0.584);    
    margin-bottom:10px
    padding:10px
    
}
& form input{
    border:none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color:white;
    height:40px;
    border-radius:5px}

`
export default ToDoCart