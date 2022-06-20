import Login from "./components/FORM"
import { useSelector } from 'react-redux'
import Loading from "./UI/loading";
import './App.css'
import Header from "./components/ToDo/Pages/header";
import AddNewKolonka from "./components/Kolonka/AddNewKolonka";
import ToDoList from "./components/Kolonka/TodoList";
import styled from "styled-components";
import TextArea from "./components/TextArea/TextArea";
function App() {
  const state = useSelector(state => state.form)
  const isShowForm = useSelector(state => state.form.showForm)
  return (
    <>
      {!isShowForm && <>
        <Header />
        <Div>
          <ToDoList />
          <AddNewKolonka />
        </Div>

      </>}

      <div className="app">
        {state.loading && <div className="forSpinner">
          <Loading />
        </div>}
        {state.showForm && <Login />}
      </div>
    </>
    // <>
    //   <Header />
    //   <Div>
    //     <ToDoList />
    //     <AddNewKolonka />
    //   </Div>
    // </>
  )
}

const Div = styled.div`
display:flex
}
`
export default App
