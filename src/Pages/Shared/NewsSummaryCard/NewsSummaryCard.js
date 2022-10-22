import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { _id, author, title, image_url, details, total_view, rating } = news;
  console.log(news);
  return (
    <div>
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image
              className="me-2 "
              src={author.img}
              style={{ height: "50px" }}
              roundedCircle
            ></Image>
            <div>
              <p className="m-2">
                {author.name}
                <span className="d-block">{author.published_date}</span>
              </p>
            </div>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? details.slice(0, 250) : details}...
            <Link to={`/news/${_id}`}>Read More</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <FaStar className="text-warning me-2 mt-1"></FaStar>
            <p>{rating.number}</p>
          </div>
          <div className="d-flex">
            <FaEye className="mt-1 me-2"></FaEye>
            <p>{total_view}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
