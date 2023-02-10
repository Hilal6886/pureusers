import { Component } from "react";

import Signup from "../../components/Signup/Signup"
import Layout from "../../components/layout/layout.component"
class SignupRoute extends Component {
  render(){
    return (
      <Layout>
       <Signup/>
       </Layout>
    )
}
}
export default SignupRoute;
