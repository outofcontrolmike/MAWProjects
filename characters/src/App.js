import {Route, Switch} from 'react-router-dom'
import AllCharacters from './pages/AllCharacters';
import NewCharacterPage from './pages/NewCharacter';
import Favorites from './pages/Favorites';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact={true}>
        <AllCharacters />
      </Route>
      <Route path='/new-character'>
        <NewCharacterPage />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
