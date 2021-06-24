import React from "react";
import ReactDom from "react-dom";

import App from "./Components/App"; //componentleri import etmeliyiz
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';//Bootstrap import edilmeli


ReactDom.render(<App />, document.getElementById('root'))