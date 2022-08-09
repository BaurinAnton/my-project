import { Home, Price, AutoPark, Reviews } from './components'
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom"
import './index.scss'

const App = () => (
  <div className="App">
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/price' component={Price} />
      <Route path='/autopark' component={AutoPark} />
      <Route path='/reviews' component={Reviews} />
      <Redirect from='/' to='/home' />
    </Switch>
  </div>
)

export default App
