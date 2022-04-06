import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./MatchesDisplay.module.css";
import { Cookies, useCookies } from "react-cookie";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [matchedProfile, setMatchedProfile] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const matchedUsesIds = matches.map(({ user_id }) => user_id);
  const userId = cookies.UserId;

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
  }, [matches]);

  const filteredMatchedProfiles = matchedProfile?.filter(
    (matchedProfile) =>
      matchedProfile.matches.filter((profile) => profile.user_id == userId)
        .length > 0
  );

  return (
    <div className={styles.display}>
      {filteredMatchedProfiles?.map((match) => {
        <div
          key={match.user_id}
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
