import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./images/img-9.jpg"
              text="Explore the hidden waterfall deep in the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="./images/img-2.jpg"
              text="Travel through the Islands of Bali in a private cruise"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src=""
              text="Set sail in the Atlantic Ocean Visiiting Unchartered Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src=""
              text="Experience Football on top of the Himalayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src=""
              text="Ride through the Sahara Desert on a guided camel Tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
