import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextReview = () => {
    setIndex((prevState) => {
      return checkNumber(prevState + 1);
    });
  };

  const prevReview = () => {
    setIndex((prevState) => {
      return checkNumber(prevState - 1);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevReview} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextReview} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomReview} className="random-btn">
        surprise me
      </button>
    </article>
  );
};

export default Review;
