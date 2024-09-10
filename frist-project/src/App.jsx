
import './App.css'
import LoginComponent from './components/login'
import RegisterComponent from './components/register'
//import FormComponent from './components/form-element'
//import Counter from './components/count-reducer-example'
//import UseReducerExample from './components/use-reducer-example'
//import ContextButtonCompoenent from './context-concept/button'
//import ContextTextComponent from './context-concept/text'
//import ProductList from './components/product/product-index'
//import Users from './components/users/user-index'


function App() {
  return (
   <div>
    <h1>React app</h1>
      <div style={{display: "flex", gap: "20px"}}>
        <LoginComponent/>
        <RegisterComponent/>
      </div>
   </div>
   
      
  )
}

export default App
