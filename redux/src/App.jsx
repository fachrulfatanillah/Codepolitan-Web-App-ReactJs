import './App.css'
import Form from './components/Form'
import List from './components/List'
import { Provider } from 'react-redux'
import store from './store/store'
import NotesList from './components/NotesList'

function App() {

  return (
    <Provider store={store}>
      <div className="container">
        <Form />
        <List />
        <NotesList />
      </div>
    </Provider>
  )
}

export default App
