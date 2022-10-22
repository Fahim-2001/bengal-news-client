import React, { useContext } from "react";
import { Carousel, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Brand1 from "./../../../assets/brand-images/Brand1.png";
import Brand2 from "./../../../assets/brand-images/Brand2.png";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideContent = () => {
  const { signInProvider } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();

  // Google Sign In Popup Method
  const handleSignIn = () => {
    signInProvider(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button className="mb-2" variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-2">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Terms and Conditions</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 " src={Brand1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-60"
              src={Brand2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideContent;
