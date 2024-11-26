import React, { useState } from "react";
import { storage } from "../api/REACT_241125_04_Firebase";

const ImageUploader = () => {
  const [file, setFile] = useState(null); // 업로드할 파일의 경로(로컬, PC에 있는 파일 경로)
  const [url, setUrl] = useState(""); // 업로드 후 파이어베이스 이미지 URL

  // 파일 선택 핸들러 (업로드할 파일 선택)
  const handleFileInputChange = (e) => {
    // 파일 첨부기 때문에 e.target.files / 1개 첨부시(지금 상황) 0번이니까 0으로 넣고 여러개 첨부시 여러개 넣고 각각의 파일에 대한 경로 지정 가능
    setFile(e.target.files[0]);
  };

  // 업로드 버튼 클릭 핸들러 (업로드 버튼 클릭시 업로드)
  const handleUploadClick = () => {
    // 방어코드 : 파일이 없는 경우 경고창 출력
    if (!file) {
      alert("파일을 선택해주세요.");
      return;
    }

    // Firebase API의 문법을 따름 (yarn add firebase), React의 문법이 아님
    const storageRef = storage.ref(); // Firebase Storage 참조
    const fileRef = storageRef.child(file.name); // 파일 저장 위치 지정, 파일 이름이 그대로 나오게 함
    // 비동기 통신의 방식, put ~ then(promise)으로 async ~ await(axios, 가장 진보되고 간단한 방식이긴 함) 대체 > 둘 다 비동기 통신
    fileRef
      .put(file) // 파일 업로드
      .then(() => {
        console.log("파일 업로드 성공!");
        return fileRef.getDownloadURL(); // 업로드된 파일의 URL 가져오기
      })
      // 경로를 집어넣음
      .then((downloadUrl) => {
        console.log("저장된 경로:", downloadUrl);
        setUrl(downloadUrl); // 이미지 URL 상태 업데이트
      })
      .catch((error) => {
        console.error("업로드 중 에러 발생:", error);
      });
  };

  return (
    <>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>Upload</button>
      {url && <img src={url} alt="No File!" />} {/* 업로드된 이미지 미리보기 */}
    </>
  );
};

export default ImageUploader;
