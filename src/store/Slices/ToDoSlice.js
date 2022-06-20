import { createSlice } from "@reduxjs/toolkit";

const initialToDo = {
    item: [],
    title: '', //название дается сразу без текста . текст пишеться в модалке
    titleInCart: '',
    id: 0,
    newCart: [],
    disabled: false,
    areatext:''
}
const toDoSlice = createSlice({
    name: 'todo',
    initialState: initialToDo,
    reducers: {
        titleChange(state, action) {
            state.title = action.payload
        },
        submitHandler(state) {
            state.item.push({
                title: state.title,
                id: state.id++
            })
            state.title = ''
        },
        removeCart(state, action) {
            const selectedItem = state.item.filter(el => el.id !== action.payload)
            state.item = selectedItem
        },
        textAreaChange(state, action) {
            state.titleInCart = action.payload
        },
        addNewCart(state) {
            state.newCart.push({
                title: state.titleInCart,
                id: Math.random()
            })
            state.titleInCart = ''
        },
        blurHandler(state) {
            if (state.title !== '') {
                state.disabled = true
            } else {
                state.disabled = false
            }
        },
        areaChange(state,action){
            state.areatext=action.payload
        },
        textAreaSubmit(state) {
            console.log(state.areatext);
        }
    }
})
export const toDoSliceActions = toDoSlice.actions
export default toDoSlice