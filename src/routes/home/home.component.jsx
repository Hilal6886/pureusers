import { Component } from "react";
import Layout from "../../components/layout/layout.component"
import Home from "../../components/Home/Home.jsx"
import Main from "../../components/Main/Main.jsx"
class HomeRoute extends Component {
  blogs = [
    {
      title: "Why you should visit ladakh",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/quantumtourandtravels.appspot.com/o/quantumtourandtravel%2Fblogs%2FShyok_river_Ladakh.jpg.webp?alt=media&token=5f1a8588-eb44-4726-859a-0d29a7ad3454",
      description:
        "Imposing mountains, thrilling roads, and  Cinematic views, that’s the beauty of Ladakh",
    },
    {
      title: "Visiting Kashmir",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/quantumtourandtravels.appspot.com/o/quantumtourandtravel%2Fblogs%2Fimages.jpg?alt=media&token=dfe0a5fa-d486-4afa-b6d0-00ebfe018409",
      description:
        "Kashmir is the northernmost geographical region of the Indian subcontinent",
    },
    {
      title: "Why you should visit ladakh",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/quantumtourandtravels.appspot.com/o/quantumtourandtravel%2Fblogs%2FShyok_river_Ladakh.jpg.webp?alt=media&token=5f1a8588-eb44-4726-859a-0d29a7ad3454",
      description:
        "Imposing mountains, thrilling roads, and  Cinematic views, that’s the beauty of Ladakh",
    },
    {
      title: "Visiting Kashmir",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/quantumtourandtravels.appspot.com/o/quantumtourandtravel%2Fblogs%2Fimages.jpg?alt=media&token=dfe0a5fa-d486-4afa-b6d0-00ebfe018409",
      description:
        "Kashmir is the northernmost geographical region of the Indian subcontinent",
    },
  ];
  render(){
    return (
      <Layout>
       <Home/>
      <Main/>
    </Layout>
    )
  }
}
export default HomeRoute;
