import React from "react"
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json"
import Logo from "./components/Logo";
import Panel from "./components/Panel"

const App = () => {
    return (
      <div>
        <Panel title="last news">
          <p>
            lorem ipsums sdklöfjsdlk sdofsadöoifh disofjsiodfjs sdiofjsdiofj
            sdiofjsiodfj iofjas dfoij sdpiofjsdi fsiodf
            siofjsdiofjsiodfjsiofjsdifjsödfjsadiöfjasiofjwfjks+oü#kdofksdoäfjsdfg
          </p>{" "}
          <a href="">lesen...</a>
        </Panel>
        <Panel>
          <p>
            lorem ipsums sdklöfjsdlk sdofsadöoifh disofjsiodfjs sdiofjsdiofj
            sdiofjsiodfj iofjas dfoij sdpiofjsdi fsiodf
            siofjsdiofjsiodfjsiofjsdifjsödfjsadiöfjasiofjwfjks+oü#kdofksdoäfjsdfg
          </p>{" "}
        </Panel>
        <Logo text={<h1>First Component</h1>} />
        <PaintingList paintings={paintings} />
      </div>
    );
}

export default App;