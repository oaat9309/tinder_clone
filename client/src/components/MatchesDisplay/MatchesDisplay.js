import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./MatchesDisplay.module.css";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [matchedProfile, setMatchedProfile] = useState(null);

  const matchedUsesIds = matches.map(({ user_id }) => user_id);

  const getMatches = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userIds: JSON.stringify(matchedUsesIds) },
      });
      setMatchedProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div className={styles.display}>
      {matchedProfile?.map((match, _index) => {
        <div
          key={_index}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          <div className="img-container">
            <img src={match?.url} alt={match?.first_name + " profile"} />
          </div>
          <h3>{match?.first_name}</h3>
        </div>;
      })}
    </div>
  );
};

export default MatchesDisplay;
