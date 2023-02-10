import { Component } from "react";
import Login from "../../components/Login/Login"
import Layout from "../../components/layout/layout.component"

class LoginRoute extends Component {
  render(){
    return (
    <Layout>
       <Login/>
       </Layout>
    )
    
}
}
export default LoginRoute;
