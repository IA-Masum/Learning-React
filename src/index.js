import React from "react";
import { render } from "react-dom";

import { Home} from "./component/Home";
import { Header} from "./component/Header";

class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));