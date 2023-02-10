import { Component } from "react";
import Layout from "../../components/layout/layout.component"
import TourDetails from "../../components/TourDetails/TourDetails"
class TourDetailsRoute extends Component {

  render(){
    return (
      <Layout>
       <TourDetails/>
    </Layout>
    )
  }
}
export default TourDetailsRoute