import { Component } from "react";
import CardList from "../../components/card-list/card-list.component";
import Header from "../../components/header/header.component";
import "./home.styles.css";
class Home extends Component {
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
  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Header />
        <h1 className="text-color">
        </h1>
        <div className="body-content">
          <div className="home">
            <CardList listItem={null} title={"Featured Tours"} />
            <CardList listItem={null} title={"Destinations"} />
            <CardList listItem={null} title={"Hotels"} />
            <CardList listItem={this.blogs} title={"Blogs"} />
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}
export default Home;
