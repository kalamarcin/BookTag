// style
import styles from './App.module.scss'
// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { navElements, PathNav } from './HelperInterface/Navigation'


// component Nav
import { Home } from './view/Home/Home'
import { Add } from './view/Add/Add'
import { All } from './view/All/All'
import GlobalStore from './Store/GlobalStore'


const App = () => {

  const navigation:navElements[] = [
    {
      path: PathNav.HOME,
      name: 'Home'
    },
    {
      path: PathNav.HOME,
      name: 'Add Book'
    },
    {
      path: PathNav.HOME,
      name: 'All Books'
    },

  ]
	return (
    <GlobalStore>
		<Router>
		<Nav navElements={navigation}></Nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/add" component={Add} />
					<Route exact path="/all" component={All} />
				</Switch>
		</Router>
    </GlobalStore>
	)
}

export default App
