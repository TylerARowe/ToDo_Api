import './App.css';

import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import {AuthProvider} from './contexts/AuthContext';
import Login from './components/Auth/Login';
import PrivateRoute from './components/PrivateRoute';
import Categories from './components/Categories/Categories';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navigation />
      <Router>
        <Switch>
          <PrivateRoute exact path="/" />
          <PrivateRoute exact path="/categories" component={Categories} />
          <Route path="/login" component={Login}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
      <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
