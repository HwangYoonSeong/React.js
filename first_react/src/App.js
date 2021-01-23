import React, { Component } from "react";
import SassComponent from "./StylingComp/SassComponent";
import CSSModule from './StylingComp/CSSModule';
import StyledComponent from './StylingComp/StyledComponent';
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