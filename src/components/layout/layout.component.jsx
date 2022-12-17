import { Component } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx"
// import Footer from "../../components/Footer/Footer"

class Layout extends Component {
render() {
    return(
       <div>
          <Navbar />
             { this.props.children }
       </div>
    );
}
}

export default Layout