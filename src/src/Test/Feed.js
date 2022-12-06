// import Avatar from "@material-ui/core/Avatar";
import {
    Assignment,
    Photo,
    Today,
    YouTube,
    AccountCircle,
  } from "@material-ui/icons";
  import "./Feed.css";
  import Post from "../Post/Post";
  import { useState, useEffect } from "react";
  import { db } from "../../Firebase/Firebase";
  import firebase from "firebase";
  // import { firebaseApp } from "../../Firebase/Firebase";
  // import { getFirestore } from "firebase/firestore";
   
  const Feed = () => {
    const [input, setInput] = useState();
    const [posts, setPosts] = useState([]);
   
    const handleSubmitpost = (e) => {
      e.preventDefault();
      db.collection("posts").add({
        name: "Swarup Nayak",
        description: "This is test",
        message: { input },
        photoUrl:
          "https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg?size=626&ext=jpg",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    };
   
    useEffect(() => {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }, []);
    console.log(posts);
    return (
      <div className="feed">
        <div className="feed__input">
          <div className="feed__form">
            {/* <Avatar /> */}
            <AccountCircle />
            <form onSubmit={handleSubmitpost}>
              <input
                type="text"
                placeholder="Start a Post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <input type="submit" />
            </form>
          </div>
          <div className="feed__options">
            <div className="option">
              <Photo style={{ color: "#70b5f9" }} />
              <span>Photo</span>
            </div>
            <div className="option">
              <YouTube style={{ color: "#7fc15e" }} />
              <span>Video</span>
            </div>
            <div className="option">
              <Today style={{ color: "#e7a33e" }} />
              <span>Event</span>
            </div>
            <div className="option">
              <Assignment style={{ color: "#fc9295" }} />
              <span>Write Article</span>
            </div>
          </div>
        </div>
   
        {/* {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          );
        })} */}
        {/* {posts} */}
        <Post
          name="Piku"
          description="Master in Action"
          message="Practicing React Js"
        />
        <Post
          name="Swarup Nayak"
          description="Developer in Action"
          message="Building LinkedIn Clone"
          photoUrl="https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg?size=626&ext=jpg"
        />
      </div>
    );
  };
   
  export default Feed;