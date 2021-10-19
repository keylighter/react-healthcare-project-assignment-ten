
import './App.css';

import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div >
      {/* <AuthProvider> */}
      <Router>

        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      {/* </AuthProvider> */}

    </div>
  );
}

export default App;
