import React, { useState, useEffect } from "react";

function LikeButton({ id }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const liked = localStorage.getItem(`like_${id}`);
    if (liked) {
      setIsLiked(true);
    }
  }, [id]);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    if (isLiked) {
      localStorage.setItem(`like_${id}`, "true");
    } else {
      localStorage.removeItem(`like_${id}`);
    }
  }, [id, isLiked]);

  return (
    <div
      className="article_block_like"
      onClick={handleLikeClick}
      aria-label="like-it"
    >
      <i className={`material-icons like ${isLiked ? "favorite" : ""}`}>
        {isLiked ? "favorite" : "favorite_border"}
      </i>
    </div>
  );
}

function Article() {
  return (
    <div>
      {Array(15)
        .fill()
        .map((_, index) => (
          <LikeButton key={index} id={index} />
        ))}
    </div>
  );
}

export default Article;
