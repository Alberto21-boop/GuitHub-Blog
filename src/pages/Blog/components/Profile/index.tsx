import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/Alberto21-boop.png" />

      <ProfileDetails>
        <header>
          <h1>Àlberto Barbòsa</h1>

          <ExternalLink text='Github' href="#" />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas.
          Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc,
          volutpat pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Alberto Barbosa 021
          </li>

          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Inmetrics
          </li>

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            21 seguidores
          </li>
        </ul>

      </ProfileDetails>
    </ProfileContainer>
  );
}