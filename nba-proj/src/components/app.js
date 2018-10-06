import React,{Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';

//Component
import Header from './header' ;
import Home from './home' ;
import Footer from './footer' ;

class App extends Component{
    render(){
        return(
        <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
          <Footer/>
        </div>
        </BrowserRouter>
    )}
}

export default App ;