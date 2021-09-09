import {Route, Switch} from 'react-router-dom'
import AllCharacters from './pages/AllCharacters';
import NewCharacterPage from './pages/Favorites';
import Favorites from './pages/Favorites';

function App() {
  return (
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
  );
}

export default App;
