import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
// import Scroll from '../components/Scroll';
// import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        this.onClickEvent = this.onClickEvent.bind(this);
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

    onClickEvent = () => {
        console.log('Error fetching the page');
    }
    render(){
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()))
        if (robots.length === 0){

            return <h1>Loading</h1>
        }
        else{

            return(
            
            <div className = 'tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange} />
            <CardList robots = {filteredRobots} click={this.onClickEvent}/>
            </div>

            );
        }
    }
    
}

export default App;

//npm update
// npm audit fix --force
// git add .
//git commit -m"fixing issues"
//git push origin master
//JSON view
