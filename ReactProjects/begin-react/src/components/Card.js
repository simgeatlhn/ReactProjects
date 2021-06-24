import React from "react";
import PropTypes from 'prop-types';  //propTypes kullanmak için import etmeyi unutma !!

class Card extends React.Component {
  render() {
    return (
      <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
        </div>
      </div>
    );
  }
}

export default Card;  //index.js de kullanmak için export ederiz

Card.defaultProps = {
  cardTitle: "Default Card" //eğer cardTitle yoksa varsayılan props olarak yazar
};

Card.propTypes = {
  cardText: PropTypes.string.isRequired //cardText özelliği string olmalı ve required yani mutlaka bulunmalı-- propTypes ile tip kontrolü yapabiliriz
};



//2 tür component var fonksiyon  ve class
//fonksiyon
// const Card = (props) => {
//   return (

//     <div className="card w-100">
//       <img src={props.image} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{props.cardTitle}</h5>
//         <p className="card-text">{props.cardText}</p>
//         <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
//       </div>
//     </div>
//   );
// };

/*
First Class Function

const Test=function(){
    console.log("the first class");
}

Test();
*/