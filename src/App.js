import React from "react"
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json"
import Logo from "./components/Logo";
import Panel from "./components/Panel"

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
console.log(colorPickerOptions);

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