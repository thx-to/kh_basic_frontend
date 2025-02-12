import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AxiosApi from "./api/AxiosApi";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  background-color: #fff;
  min-width: 500px;
  max-width: 900px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 30px auto;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; // 버튼 사이의 간격
`;

const Input = styled.input`
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
  font-size: 16px;
`;

const Button = styled.button`
  height: 50px;
  box-sizing: border-box;
  padding: 0px 20px;
  margin: 10px 0;
  border: 1px solie #333333;
  border-radius: 4px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: ease-in-out 0.1s;
  &:hover {
    background-color: #f1f1f1;
    color: #333333;
    font-weight: bold;
  }
`;

// Register the components you need
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GenderChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [region, setRegion] = useState("신도림");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const rsp = await AxiosApi.genderChart(region);
  //       if (rsp.status === 200) {
  //         setChartData({
  //           labels: Array.from(
  //             { length: rsp.data.female.length },
  //             (_, i) => i + 1
  //           ),
  //           datasets: [
  //             {
  //               label: "여성",
  //               data: rsp.data.female,
  //               backgroundColor: "rgba(255, 99, 132, 0.6)",
  //               borderColor: "rgba(255, 99, 132, 1)",
  //               borderWidth: 1,
  //             },
  //             {
  //               label: "남성",
  //               data: rsp.data.male,
  //               backgroundColor: "rgba(54, 162, 235, 0.6)",
  //               borderColor: "rgba(54, 162, 235, 1)",
  //               borderWidth: 1,
  //             },
  //           ],
  //         });
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rsp = await AxiosApi.genderChart(region);
        if (rsp.status === 200) {
          setChartData({
            labels: Array.from(
              { length: rsp.data.female.length },
              (_, i) => i + 1
            ),
            datasets: [
              {
                label: "남성",
                data: rsp.data.male,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
              },
              {
                label: "여성",
                data: rsp.data.female,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
              },
            ],
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  // const options = {
  //   responsive: true, // 차트를 반응형으로 설정 (화면 크기에 맞게 조정)
  //   scales: {
  //     x: {
  //       type: "category",
  //     },
  //     y: {
  //       type: "linear",
  //     },
  //   },
  // };

  const options = {
    responsive: true, // 반응형 설정
    indexAxis: "y", // X축과 Y축을 반대로 설정 → 가로 막대 그래프로 변경
    scales: {
      x: {
        type: "linear", // X축을 선형으로 설정 (값이 연속됨)
      },
      y: {
        type: "category", // Y축을 범주형으로 설정 (지역별 카테고리)
      },
    },
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value); // 지역명 상태 업데이트 함수
  };

  // const handleRegionClick = async () => {
  //   try {
  //     const rsp = await AxiosApi.genderChart(region);
  //     if (rsp.status === 200) {
  //       setChartData({
  //         labels: Array.from(
  //           { length: rsp.data.female.length },
  //           (_, i) => i + 1
  //         ),
  //         datasets: [
  //           {
  //             label: "여성",
  //             data: rsp.data.female,
  //             backgroundColor: "rgba(255, 99, 132, 0.6)",
  //             borderColor: "rgba(255, 99, 132, 1)",
  //             borderWidth: 1,
  //           },
  //           {
  //             label: "남성",
  //             data: rsp.data.male,
  //             backgroundColor: "rgba(54, 162, 235, 0.6)",
  //             borderColor: "rgba(54, 162, 235, 1)",
  //             borderWidth: 1,
  //           },
  //         ],
  //       });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const handleRegionClick = async () => {
    try {
      const rsp = await AxiosApi.genderChart(region);
      if (rsp.status === 200) {
        setChartData({
          labels: Array.from(
            { length: rsp.data.female.length },
            (_, i) => i + 1
          ),
          datasets: [
            {
              label: "남성", // 남성을 먼저 정의
              data: rsp.data.male,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
            {
              label: "여성", // 여성을 나중에 정의
              data: rsp.data.female,
              backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
          ],
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          value={region}
          onChange={handleRegionChange}
          placeholder="지역명 입력"
        />
        <Button onClick={handleRegionClick}>조회</Button>
      </InputContainer>
      <h2>{region} 지역의 남여 성별 인구 분포</h2>
      <Bar data={chartData} options={options}/>
    </Container>
  );
};

export default GenderChart;
