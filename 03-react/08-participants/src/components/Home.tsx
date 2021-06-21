import * as React from "react";
import { Link } from "react-router-dom";
interface Participant {
  id: number;
  login: string;
  avatar_url: string;
}

export default function Home() {
  const [participants, setParticipants] =
    React.useState<Participant[] | null>(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  const getParticipants = () => {
    fetch(
      `https://api.github.com/repos/Powercoders-Switzerland/2021-1-web-dev/contributors`
    ).then((response) => {
      if (response.status !== 200) {
        response.json().then((data) => setErrorMessage(data.message));
      } else {
        response.json().then(setParticipants);
      }
    });
  };

  React.useEffect(() => {
    getParticipants();
  }, []);

  if (errorMessage) {
    return (
      <>
        <h1>Powercoders 2021-1-web-dev Contributors</h1>
        <p>{`Error: ${errorMessage}`}</p>
      </>
    );
  }
  return (
    <>
      <h1>Powercoders 2021-1-web-dev Contributors</h1>
      <ul>
        {participants === null ? (
          <p>loading</p>
        ) : (
          participants.map((participant) => {
            const { id, login, avatar_url } = participant;
            return (
              <li key={id}>
                <Link to={`/participant/${login}`}>
                  <h2>{login}</h2>
                  <img src={avatar_url} alt="profile-image" />
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
