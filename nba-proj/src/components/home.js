import React,{Component} from 'react';

//Components
import Featured from './featured' 
import Subscription from './subscription'
import Blocks from './blocks'

const url_home = 'http://localhost:3004/home';

class Header  extends Component{


    constructor(props){
        super(props) ;

        this.state ={
            home:''
        }
    }

 componentDidMount(){
     fetch(url_home , {method:'GET'})
     .then(response => response.json() )
     .then( json => 
    {
        this.setState({
            home:json
        })
    } 
)
 }

   render(){
       return(
           <div>
              <Featured slides={this.state.home.slider}/>
              <Subscription/>
              <Blocks blocks={this.state.home.blocks}/>
           </div>
       )
   }
}

export default Header ;