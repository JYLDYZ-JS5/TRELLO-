import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toDoSliceActions } from '../../store/Slices/ToDoSlice'
import Modal from '../Modal/Modal'
const TextArea = (props) => {
    const dispatch = useDispatch()
    const textArea = (e) => {
        dispatch(toDoSliceActions.areaChange(e.target.value))
    }
    const textAreaSubmit = (e) => {
        e.preventDefault()
        dispatch(toDoSliceActions.textAreaSubmit())
        props.onCloseCart()
    }
    return (

        <Modal onCloseCart={props.onCloseCart}>
            <Main>
                <p>{props.title}</p>
                <Close className='x' onClick={props.onCloseCart}>&#10006;</Close>
            </Main>
            <Form onSubmit={textAreaSubmit} className='descropt'>
                <p>Описание</p>
                <textarea onChange={textArea} placeholder="Добавить более подробное описание…" />
                <div>
                    <button>Сохранить </button>
                    <button onClick={props.onCloseCart}>Отмена</button>
                </div>
            </Form>

            <Action>
                <p>Действия</p>
                <section>
                    <Circle className="circle"></Circle>
                    <input placeholder="Напишите комментарий…" />
                </section>
            </Action>
        </Modal>
    )
}
const Main = styled.div`
display: flex;
justify-content: space-between;
& p{
    font-size: 30px;
    color: rgb(170, 101, 255);
}
`
const Form = styled.form`
height: 150px;
display: flex;
justify-content: left;
flex-direction: column;
& textarea{
    height: 100px;
}
`
const Action = styled.div`
& section{
    display: flex;
    align-items: center;
    & input{
        height: 40px;
        width: 80%;
    }
& p::before{
    content: '\e922';
}
}
`
const Circle = styled.div`
background-color: rgb(150, 53, 240);
border-radius: 50%;
height: 40px;
width: 40px;

`
const Close = styled.div`
cursor: pointer;
`
export default TextArea