import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
    gmail: '',
    name: '',
    showForm: true,
    loading: false,
    disabled: false,
    errorMessage: null,
    errortext: false
}
const formSlice = createSlice({
    name: 'form',
    initialState: initialFormState,
    reducers: {
        gmailChangeHandler(state, action) {
            state.gmail = action.payload
            if (state.gmail !== '') state.disabled = true
        },
        lastNameChange(state, action) {
            state.name = action.payload
            if (state.name !== '') state.disabled = true
        },
        onBlur(state) {
            if (state.gmail === '' && state.name === '') state.errortext = true
        },
        loading(state, action) {
            state.loading = action.payload
        },
        isShowForm(state, action) {
            state.showForm = action.payload
        },
        errorMessage(state, action) {
            state.errorMessage = {
                message: action.payload.message,
                title: action.payload.title
            }
        },
        hideError(state) {
            state.errorMessage = null
        }
    }
})
export const formSliceActions = formSlice.actions
export default formSlice