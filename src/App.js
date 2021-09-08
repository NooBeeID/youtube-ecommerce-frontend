import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeIndex from './pages/home/HomeIndex';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomeIndex/>
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
