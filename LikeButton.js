import { React,useState } from "react";
import { FcLike } from "react-icons/fc";

const LikeButton = () => {
    const [likes,setLikes]=useState(0);
    const [isLiked, setIsLiked] = useState(false); 

    const handleEvent = () => {
        setIsLiked(!isLiked);
    if (isLiked) {
      setLikes(likes - 1);
    }
    else {
        setLikes(likes + 1); 
      }
    }


  return (
    <div>
      <button onClick={handleEvent}><FcLike /> {likes}</button>
    </div>
  );
}

export default LikeButton;
