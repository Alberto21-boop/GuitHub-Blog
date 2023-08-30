import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface profileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<profileData>({} as profileData);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`)

      setProfileData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [profileData])

  useEffect(() => {
    getProfileData();
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (<Spinner />) : (
        <>
          <ProfilePicture src={profileData.avatar_url} />

          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>

              <ExternalLink
                text='Github'
                href={profileData.html_url}
                target='_blank'
              />
            </header>

            <p>
              {profileData.bio}
            </p>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>

              <li>
                <FontAwesomeIcon icon={faBuilding} />
                {profileData?.company && (
                  <li>
                    <FontAwesomeIcon icon={faBuilding} />
                    {profileData.company}
                  </li>
                )}
              </li>

              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>
            </ul>

          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
}