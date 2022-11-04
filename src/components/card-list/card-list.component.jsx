import { Component } from "react";
// import logo from './logo.svg';
import "./card-list.styles.css";
import Card from "../card/card.component";
class CardList extends Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    const { listItem,title } = this.props;
    return (
      <div className="card-list">
      <span className="card-list-title">
      <h1 >{title}</h1>
      </span>
      <div className="card-list-content">
      {!listItem?<p className="comming-soon">Comming Soon</p>:listItem.map((item) => {
        return (
          <Card item={item} />
          );
        })}
        </div>
    </div>
        );
  }
}

export default CardList;
