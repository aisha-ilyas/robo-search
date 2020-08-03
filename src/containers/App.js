import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component {
        constructor() {
            super();
            this.state = {
                robot: [],
                searchText: ''
            }
        }

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(user => this.setState({robot: user}));
        }

        onSearchEvent = (e) => {
            this.setState({searchText: e.target.value});
        }

        render() {
            const {robot, searchText} = this.state;
            const filterRobots = robot.filter(item => {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            });

            return (robot.length === 0) ? 
                <h1 className='f1 tc'>Loading...</h1> :
                (
                    <div className='tc'>
                        <h1 className='f2'>RoboFriends</h1>
                        <SearchBox searchEvent={this.onSearchEvent} />
                        <Scroll>
                            <CardList robots={filterRobots} />
                        </Scroll>  
                    </div>
                );
        }
}

export default App;