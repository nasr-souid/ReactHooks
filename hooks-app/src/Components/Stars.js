import ReactStars from "react-rating-stars-component";
import React from "react"; 

const Stars = (props) => {
    const ratingChanged = (newRating) => {
      props.Search(newRating);
      };
       
      return(
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          activeColor="#ffd700"
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
        />
             )
}

export default Stars