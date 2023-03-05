import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  overflow-y: hidden;
  line-height: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }

  @media screen and (max-width: 625px) {
    margin-top: 30px;
    line-height: 17px;
  }

  & > span {
    @media screen and (max-width: 1427px) {
    width: 80%;
  }
    @media screen and (max-width: 625px) {
    width: 60%;
  }
  }
`;

const Chart = styled(motion.div)`
  width: ${({ selected, windowHeight }) => (selected ? "100px" : windowHeight >= 830 ? "180px" : windowHeight >= 761 ? "150px" : "110px")};
  height: 270px;
  margin-top: ${({ selected }) => (!selected ? "30px" : "")};

  @media screen and (max-width: 1024px) {
    display: ${({ selected }) => (selected ? "block" : "none")};
    width: 80px;
  }
`;

// 디폴트 함수
export default function PortfoliosChart({ ratio, selected, idea_clone, windowHeight }) {
  const data = {
    labels: ["Idea", "Clone"],
    datasets: [
      {
        label: "# of Votes",
        data: [ratio[0], ratio[1]],
        backgroundColor: [
          "rgba(253, 132, 159, 0.7)",
          "rgba(113, 186, 235, 0.7)",
        ],
        borderColor: ["#ff0b40", "#293df8"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
          labels: {
              font: {
                  size: 9,
              },
              color: "#eeeeee",
          }
      }
  }
  }

  return (
    <ChartContainer>
      <Chart
        animate={{
          y: [0, -10, 0],
          transition: { duration: 1.7, repeat: Infinity },
        }}
        selected={selected}
        windowHeight={windowHeight}
      >
        <Doughnut data={data} options={options} />
      </Chart>
      {selected ? (
        <span>
          <p>idea : {idea_clone[0]}</p>
          <p>clone : {idea_clone[1]}</p>
        </span>
      ) : (
        ""
      )}
    </ChartContainer>
  );
}
