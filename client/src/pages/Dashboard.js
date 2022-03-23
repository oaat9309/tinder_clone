import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import ChatContainer from "../components/ChatContainer/ChatContainer";
import axios from "axios";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/oPj4A8ul.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Monica Hall",
      url: "https://i.imgur.com/MWAcQRM.jpeg",
    },
    {
      name: "Jared Dunn",
      url: "https://i.imgur.com/OckVkRo.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/Lnt9K7l.jpeg",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      {user && (
        <div className="dashboard">
          <ChatContainer user={user} />
          <div className="swiper-container">
            <div className="card-container">
              {characters.map((character) => (
                <TinderCard
                  className="swipe"
                  key={character.name}
                  onSwipe={(dir) => swiped(dir, character.name)}
                  onCardLeftScreen={() => outOfFrame(character.name)}
                >
                  <div
                    style={{ backgroundImage: "url(" + character.url + ")" }}
                    className="card"
                  >
                    <h3>{character.name}</h3>
                  </div>
                </TinderCard>
              ))}
              <div className="swipe-info">
                {lastDirection ? (
                  <p>You swiped {lastDirection}</p>
                ) : (
                  <p>Swipe!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
