import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { formSliceActions } from "../store/Slices/formSlice";
import { userActions } from '../store/UserActions';
const Login = () => {
    const dispatch = useDispatch()
    const htmlForm = useSelector(state => state.form)

    const gmailChangeHandler = (e) => {
        dispatch(formSliceActions.gmailChangeHandler(e.target.value))
    }
    const lastNameChange = (e) => {
        dispatch(formSliceActions.lastNameChange(e.target.value))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(formSliceActions.loading(true))
        dispatch(userActions({ name: htmlForm.name, email: htmlForm.gmail }))
        setTimeout(() => {
            dispatch(formSliceActions.loading(false))
            dispatch(formSliceActions.isShowForm(false))
        }, 2000);
    }
    const onBlurForm = () => {
        dispatch(formSliceActions.onBlur())
    }

    return (
        <form onSubmit={submitHandler}>
            <Body>
                <Form onBlur={onBlurForm} >
                    <Title>Welcome to TRELLO</Title>
                    <Subtitle>Let's create your account!</Subtitle>
                    {htmlForm.errortext && <strong>Поле пустое!!</strong>}
                    <Input1>
                        <Input
                            id="lastname"
                            value={htmlForm.name}
                            onChange={lastNameChange}
                            type="text"
                            placeholder="Name" />
                        <Cut></Cut>
                    </Input1>
                    <Input2 className="input-container ic2">
                        <Input
                            id="email"
                            type="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            placeholder="Email"
                            value={htmlForm.gmail}
                            onChange={gmailChangeHandler}
                        />
                        <div className="cut cut-short"></div>
                    </Input2>
                    <Button disabled={!htmlForm.disabled} type="text" >submit</Button>
                </Form>
            </Body>

        </form>

    )
}
const Body = styled.div`
align-items: center;
// background-color: #000; 
display: flex;
justify-content: center;
height: 100vh;`
const Form = styled.div`
background-color: rgba(212, 212, 212, 0.361);
border-radius: 20px;
box-sizing: border-box;
height: 500px;
padding: 20px;
width: 320px;
`
const Title = styled.div`
color: #eee;
font-family: sans-serif;
font-size: 36px;
font-weight: 600;
margin-top: 30px;
`
const Subtitle = styled.div`
color: #eee;
font-family: sans-serif;
font-size: 16px;
font-weight: 600;
margin-top: 10px;`
const Input1 = styled.div`
height: 50px;
position: relative;
width: 100%;
margin-top: 40px;
`
const Input2 = styled.div`
height: 50px;
position: relative;
width: 100%;
margin-top: 30px;
`
const Input = styled.input`
background-color: #bac1ff;
border-radius: 12px;
border: 0;
box-sizing: border-box;
color: #eee;
font-size: 18px;
height: 100%;
outline: 0;
padding: 4px 20px 0;
width: 100%;
`
const Cut = styled.div`
background-color:none;
border-radius: 10px;
height: 20px;
left: 20px;
position: absolute;
top: -20px;
transform: translateY(0);
transition: transform 200ms;
width: 76px;
`

const Button = styled.button`
background-color: #08d;
border-radius: 12px;
border: 0;
box-sizing: border-box;
color: #eee;
cursor: pointer;
font-size: 18px;
height: 50px;
margin-top: 38px;
text-align: center;
width: 100%;
:active {
    background-color: #06b;
}
`

export default Login