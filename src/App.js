
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
import useFirebase from './hooks/useFirebase';


function App() {
  return (
    <div >
      <AuthProvider>
        <Router>


          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/services'>
              <Header></Header>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path='/about'>
              <Header></Header>
              <AboutUs></AboutUs>
              <Footer></Footer>
            </Route>
            <Route path='/blog'>
              <Header></Header>
              <Blog></Blog>
              <Footer></Footer>
            </Route>
            <Route path='/login'>
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path='/register'>
              <Header></Header>
              <Register></Register>
              <Footer></Footer>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
