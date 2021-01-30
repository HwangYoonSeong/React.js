import React, { Component } from "react";
import SassComponent from "./Components/StylingComp/SassComponent";
import CSSModule from './Components/StylingComp/CSSModule';
import StyledComponent from './Components/StylingComp/StyledComponent';
class App extends Component {
    render () {
        return (
            <div>
                <SassComponent />
                <CSSModule />
                <StyledComponent />
            </div>

        );
    }
}

export default App;