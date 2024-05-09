import { useState } from "react";

import Carousel from "../UI/Carousel";
import Header from "../Layout/Header";
import Login from "../Login/Login";

import "./Homepage.css";
import TypeOfStay from "./TypeOfStay";

import hotelImage from "../../assets/hotel.jpg";
import villaImage from "../../assets/villa.jpg";
import homestayImage from "../../assets/homestay.jpg";
// import SelectOption from "../UI/QuestionsWithOptions/SelectOption";
import USPSection from "./USPSection";
import SignUp from "../SignUp/SignUp";
import Button from "../UI/Button";

const typeOfStay = [
  {
    id: 1,
    image: hotelImage,
    name: "Hotel",
    description:
      "Hotel is a business establishment offering rooms with modern amenities like a flat-screen TV, lockers, en-suite bathrooms etc. They also have facilities like a multi-cuisine restaurant, swimming pool, business center, gym etc.",
    button: "List Now",
  },
  {
    id: 2,
    image: villaImage,
    name: "Villa",
    description:
      "A villa is a luxurious property, featuring many rooms and spaces such as a lounge area, kitchen, lawn, and often, a pool.",
    button: "Know More",
  },
  {
    id: 3,
    image: homestayImage,
    name: "Homestay",
    description:
      "Homestay is a private property with rooms, a kitchen, and a living room. They are budget-friendly and offer a local experience to travellers.",
    button: "Know More",
  },
  {
    id: 4,
    image: homestayImage,
    name: "Apartment",
    description:
      "An apartment is an independent unit in a residential complex. Ranging from studios to 3 BHK units, these come with rooms, a kitchen, a living area, etc.",
    button: "Know More",
  },
  {
    id: 5,
    image: homestayImage,
    name: "Beach Hut",
    description:
      "Listed mostly room-wise, a beach hut is a wooden cabin on a sandy beach offering a vast sea view.",
    button: "Know More",
  },
  {
    id: 6,
    image: homestayImage,
    name: "Tree House",
    description:
      "Equipped with beds, an ensuite bathroom, and often a kitchen, luxury treehouses are eco-friendly and redefine your stay in the wilderness.",
    button: "Know More",
  },
  {
    id: 7,
    image: homestayImage,
    name: "Farm House",
    description:
      "Featuring a pool, orchards, play area, kitchen, and rooms, a farmhouse is an independent property surrounded by a large farm.",
    button: "Know More",
  },
  {
    id: 8,
    image: homestayImage,
    name: "Luxury Camp",
    description:
      "Quite different from a traditional camp, a luxury camp with all modern amenities, offers travellers a glamourous stay amidst nature.",
    button: "Know More",
  },
  {
    id: 9,
    image: homestayImage,
    name: "Camp",
    description:
      "Camps are tented accommodations near beaches, mountains, or deserts and guests prefer them to experience adventure and scenic beauty.",
    button: "Know More",
  },
];

const Homepage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleQuestion = () => {
    window.location.pathname = "/question"
  }


  const typeOfStayPage = typeOfStay.map((type) => (
    <TypeOfStay
      id={type.id}
      image={type.image}
      name={type.name}
      description={type.description}
      button={type.button}
    />
  ));

  const showLoginScreen = () => {
    // window.location.pathname = '/login';
    setShowLogin(true);
  };

  const hideLoginScreen = () => {
    setShowLogin(false);
  };

  const showSignupScreen = () => {
    setShowSignup(true);
  };

  const hideSignupScreen = () => {
    setShowSignup(false);
  };

  return (
    <>
      <div className="homepage">
        {showLogin && <Login onHideLogin={hideLoginScreen} />}
        {showSignup && <SignUp onHideSignup={hideSignupScreen} />}
        <Header onShowLogin={showLoginScreen} onShowSignup={showSignupScreen} />
        <div className="carousel">
          <Carousel />
        </div>
        <div>
          <div className="description">
            <h1>What type of properties can be listed on ONDC?</h1>
            <p>
              If you own any of the following property types, you can list it
              with us. Just select the property type to get started.
            </p>
          </div>
        </div>
      </div>
      <div className="types">{typeOfStayPage}</div>
      <USPSection />
      <Button onClick={handleQuestion}>Questions</Button>
    </>
  );
};

export default Homepage;
