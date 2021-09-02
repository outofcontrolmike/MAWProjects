import {Route, Switch} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    //localhost:3000
    <div>
      <Switch>
    <Route path='/' exact={true}>
      <AllMeetupsPage />
    </Route>
    <Route path='/new-meetup'>
      <NewMeetupPage/>
    </Route>
    <Route path='/favorites'>
      <FavoritesPage/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
