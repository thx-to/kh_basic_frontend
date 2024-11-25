import { createContext, useState } from "react";

// UserContext 생성
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    // 원래 객체가 들어가야 할 자리에 구조분해
    // 이렇게 하면 아래 4개 값(userID, setUserID, password, setPassword)은 아무데서나 사용할 수 있음
    <UserContext.Provider
      value={{
        userID,
        setUserID,
        userPassword,
        setUserPassword,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
