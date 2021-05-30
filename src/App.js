import React from "react"
import PaintingList from "./components/PaintingList/PaintingList";
import paintings from "./paintings.json"
import Logo from "./components/Logo";
import Panel from "./components/Panel/Panel"
import ColorPicker from "./components/ColorPicker/ColorPicker"
import Notification from "./components/Notification/Notification"
import Layout from "./components/Layout/Layout";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const App = () => {
  return (
    <div>
      <Layout>
        <ColorPicker options={colorPickerOptions} />

        <Notification text="so good" type="success" />
        <Notification text="so bad" type="error" />

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
      </Layout>
    </div>
  );
}

export default App;