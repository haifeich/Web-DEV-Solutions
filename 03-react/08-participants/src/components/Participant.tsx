import * as React from "react";
import { Link, useParams } from "react-router-dom";

interface User {
  avatar_url: string;
  bio: string;
  location: string;
  name: string;
  html_url: string;
}
export default function Participant() {
  const username = useParams<{ username: string }>().username;
  const [user, setUser] = React.useState<User | null>(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  React.useEffect(() => {
    fetch(`https://api.github.com/users/${username}`).then((response) => {
      if (response.status !== 200) {
        response.json().then((data) => setErrorMessage(data.message));
      } else {
        response.json().then(setUser);
      }
    });
  }, []);
  if (errorMessage) {
    return (
      <>
        <Link to="/">Back Home</Link>
        <p>{`Error: ${errorMessage}`}</p>
      </>
    );
  }
  if (user === null) {
    return (
      <>
        <Link to="/">Back Home</Link>
        <p>Loading...</p>
      </>
    );
  }

  const { name, bio, avatar_url, html_url, location } = user;
  return (
    <>
      <Link to="/">Back Home</Link>
      <a href={html_url} target="_blank">
        <h2>{name || username}</h2>
      </a>
      <article>
        <img src={avatar_url} alt="profile-image" />
        <div>
          <p>{bio}</p>
          <p>{location}</p>
        </div>
      </article>
    </>
  );
}
