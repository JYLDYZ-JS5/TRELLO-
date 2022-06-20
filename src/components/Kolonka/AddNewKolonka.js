import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { toDoSliceActions } from '../../store/Slices/ToDoSlice'
import AddButton from '../AddListButton/AddList'

const AddNewKolonka = () => {
    const [show, setShow] = useState(false)
    const [notShow, setNotShow] = useState(true)
    const disabled = useSelector(state => state.todo.disabled)
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo)
    const isShow = (t, f) => {
        setShow(t)
        setNotShow(f)
        window.scrollTo(
            {
                left: 1000,
                behavior: 'smooth'
            }
        )
    }
    const titleChange = (e) => {
        dispatch(toDoSliceActions.titleChange(e.target.value))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(toDoSliceActions.submitHandler())
    }
    const blurHandler = () => dispatch(toDoSliceActions.blurHandler())
    return (
        <Cart>
            {notShow && <Kolonka onClick={() => isShow(true, false)} >
                <span><strong>+</strong> Добавить ещё одну колонку</span>
            </Kolonka>}
            {show && <Form onSubmit={submitHandler} >
                <input onBlur={blurHandler} onChange={titleChange} value={todo.title} type='text' placeholder='Ввести заголовок списка' />
                <Section>
                    <AddButton disabled={!disabled} onClick={() => isShow(false, true)} type='submit' />
                </Section>
            </Form>}
        </Cart>

    )
}
const Cart = styled.div`
margin:10px;
`
export const Kolonka = styled.div`
background-color: #ebecf080;
border-radius: 3px;
height: auto;
min-height: 32px;
padding: 8px;
transition: background 85ms ease-in, opacity 40ms ease-in, border-color 85ms ease-in;
font-size: larger;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
width: 370px;
cursor: pointer;

`
const Form = styled.form`
background-color: #ebecf080;
border-radius: 3px;
height: auto;
min-height: 32px;
padding: 8px;
transition: background 85ms ease-in, opacity 40ms ease-in, border-color 85ms ease-in;
font-size: larger;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
width: 370px;
cursor: pointer;
& ::placeholder{
    color: rgb(84, 84, 84);
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
}
& input {
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #0079bf;
    display: block;
    margin: 0;
    border: none;
    transition: margin 85ms ease-in, background 85ms ease-in;
    width: 100%;
    height: 45px;
    border-radius: 6px;
    padding: 10px;
}
`
const Section = styled.section`
margin-top: 10px;
display:flex;
align-items:center;
justify-content: space-between;

& div{
    font-size: 25px;
}
`
export default AddNewKolonka