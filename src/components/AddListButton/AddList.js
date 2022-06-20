
const AddButton = (props) => {
    return (
        <>
            <button disabled={props.disabled} type={props.type}>Добавить список</button>
            <div onClick={props.onClick}> <strong>&#10006;</strong></div>
        </>
    )
}
export default AddButton