import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo"
import Search from "./components/Search";
import About from "./components/pages/About";
import uuid from "uuid";

let searches = [{
        id: uuid.v4(),
        title: "tired as hell",
        completed: true
    },
    {
        id: uuid.v4(),
        title: "have to learn python",
        completed: true
    },
    {
        id: uuid.v4(),
        title: "flask at fingertips",
        completed: false
    },
    {
        id: uuid.v4(),
        title: "create portfolio",
        completed: false
    }
];
class App extends Component {
    constructor() {
        super()
        this.state = {
            searches: searches,
        };

    }
    markIt = id => {
        this.setState({
            searches: this.state.searches.map(searches => {
                if (searches.id === id) {
                    if (searches.completed === true) {
                        alert("already completed. Want to set to not complete?");
                        searches.completed = !searches.completed;
                    } else {
                        alert("not completed. Want to set to completed");
                        searches.completed = !searches.completed;
                    }
                }
                return searches;
            })
        });
    };

    delTodo = id => {
        this.setState({
            searches: [...this.state.searches.filter(searches => searches.id !== id)]
        });
    };

    addTodo = title => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        this.setState({
            searches: [...this.state.searches, newTodo]
        });
    };

    render() {
        return ( 
            <Router >
            <div className = "App" >
            <Route exact path = "/"
                render = {props => ( 
                    <React.Fragment >
                    <Header / >
                    <AddTodo addTodo = { this.addTodo }/>   
                    <Search
                        searches = { this.state.searches }
                        markIt = { this.markIt }
                        delTodo = { this.delTodo }
                    />  
                    </React.Fragment >
                )
            }
            />

            <Route path = "/about" component = { About }/>  
            </div > 
            </Router >
        );
    }
}

export default App;