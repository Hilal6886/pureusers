import { Component } from "react";

import './card.styles.scss'

class Card extends Component{
    render(){
        const { title, description, id, imageUrl } = this.props.item;

        return(
            <div className="card-container" key={id}>
            <img
              alt={`${title}`}
              src={`${imageUrl}`}
            />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        )
    }
}

export default Card