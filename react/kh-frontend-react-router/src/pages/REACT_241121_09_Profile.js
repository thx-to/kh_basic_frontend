import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileContainer = styled.div`
box-sizing: border-box;
  width: 500px;
  height: 150px;
  margin: 30px auto;
  padding: 10px;
  text-align: center;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const data = {
  DEV1: {
    name: "Java",
    description: "내 인생을 망치러 온 나의 구원자",
  },
  DEV2: {
    name: "React",
    description: "조지고자 하였으나 조져지는건 늘 나였어",
  },
  DEV3: {
    name: "Python",
    description: "어떻게 생겼는지 기억도 안나",
  },
};

const Profile = () => {

  // useParams : 라우터로 이동할 때 URL 경로에 있는 정보를 빼옴
  const params = useParams();
  const profile = data[params.username];

  return (
    <Container>
      <h1>사용자 프로필</h1>
      {profile ? (
        <ProfileContainer>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </ProfileContainer>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </Container>
  );
};

export default Profile;