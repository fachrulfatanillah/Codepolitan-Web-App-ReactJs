import './App.css'
import Form from './components/Form'
import List from './components/List'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>
      <div className="container">
        <Form />
        <List />
      </div>
    </Provider>
  )
}

export default App
