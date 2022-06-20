import { formSliceActions } from "./Slices/formSlice"

export const userActions = (user) => {
    return (dispatch) => {
        dispatch(formSliceActions.loading(true))
        dispatch(formSliceActions.errorMessage({
            message: 'Wait....',
            title: 'Sending...'
        }))
        fetch('https://trello-1ef8d-default-rtdb.firebaseio.com/user.json', {
            method: 'PUT',
            body: JSON.stringify(user)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Something was wrong')
            }
            dispatch(formSliceActions.loading(false))
            dispatch(formSliceActions.errorMessage({
                message: 'Successfully!',
                title: 'Finished!'
            }))
            return response.json()
        })
            .catch(err => {
                dispatch(formSliceActions.errorMessage({
                    message: err.message,
                    title: 'Error'
                }))

            })
    }
}
