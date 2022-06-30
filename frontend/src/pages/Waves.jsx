import Wave from "react-wavify";
import styled from "@emotion/styled";

// import './styles.css';

const WaveContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: -5px;
  height: ${(props) => `${props.level}vh`};
  display: flex;
  z-index: -1;
  transform: rotate(180deg);
`;

export default function Waves() {
  return (
    <div style={{ marginTop: "0px" }}>
      <WaveContainer level={9}>
        <Wave
          fill="#f19103"
          paused={false}
          opacity="0.80"
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.2,
            points: 3,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
          fill="FF27GD"
          opacity="0.10"
          paused={false}
          options={{
            height: 75,
            amplitude: 20,
            speed: 0.3,
            points: 2,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
          fill="#DEB46E"
          paused={false}
          opacity="0.5"
          options={{
            height: 245,
            amplitude: 30,
            speed: 0.1,
            points: 4,
          }}
        />
      </WaveContainer>
    </div>
  );
}
