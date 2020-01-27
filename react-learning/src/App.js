import React, { Component } from 'react'
import Navbar from './components/Navbar';
import { ThemeProvider, CssBaseline } from './styles/materialUI/';
import themes from './styles/materialUI/pallete';


class App extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        const { classes } = this.props;
        
        return(
            <div data-test="test-app">
                <CssBaseline />
                <ThemeProvider theme={themes}>
                <Navbar />
                </ThemeProvider>
            </div>
        )
    }
}

export default App;