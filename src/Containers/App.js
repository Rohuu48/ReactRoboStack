import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import 'tachyons';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';

class App extends React.Component{
    constructor(props){ 
        super(props);
        this.state={
            robots: [],
            searchField:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(robos=> this.setState({
                robots:robos
            }))
        
    }

    change=(event)=>{
        this.setState({
            searchField:event.target.value
        })
    }

    render(){
            const filteredRobots=this.state.robots.filter(robot=>
                robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            )
            if(this.state.robots.length===0){
                return <h3 className='tc '>Loading!</h3>
            }
            else{
                return(    
                    <div className='tc'>
                    <h1 className='f1'>ROBOSTACK</h1>
                    <SearchBox handleChange={this.change}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>                        
                    </Scroll>
                    </div>
                );
            }
    }
}

export default App;