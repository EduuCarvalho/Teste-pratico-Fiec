import styled from "styled-components";
import indiceFiec from "../assets/images/indice-fiec .png";
import logoMapFIEC from "../assets/images/logo-indice-fiec-map.png";
import logoP2i from "../assets/images/logo-p2i.png";
import logoObservatorio from "../assets/images/logo-observatorio.png";
import logoFIEC from "../assets/images/logo-fiec.png";
import logoABDI from "../assets/images/logo-ABDI.png";

export default function SideBar({filter, setFilter}) {
    return (
        <Main>
        <LogoContainer>
          <img src={logoMapFIEC} alt={"Logo icon"} width={80} />
          <img src={indiceFiec} alt={"Logo icon"} />
        </LogoContainer>
        <SideButtonContainer>
          <FilterOption
            onClick={() => {
              setFilter("ranking");
            }}
            background={filter === "ranking" && "#FFFFFF"}
            color={filter === "ranking" ? "#1a428a" : "#FFFFFF"}
          >
            <p>Ranking</p>
          </FilterOption>
          <FilterOption
            onClick={() => {
              setFilter("perfil");
            }}
            background={filter === "perfil" && "#FFFFFF"}
            color={filter === "perfil" ? "#1a428a" : "#FFFFFF"}
          >
            <p>Perfil</p>
          </FilterOption>
          <FilterOption
            onClick={() => {
              setFilter("compare");
            }}
            background={filter === "compare" && "#FFFFFF"}
            color={filter === "compare" ? "#1a428a" : "#FFFFFF"}
          >
            <p>Compare</p>
          </FilterOption>
        </SideButtonContainer>
        <BottomLogoContainer>
          <img src={logoP2i} alt={"Logo icon"} />
          <img src={logoObservatorio} alt={"Logo icon"}/>
          <img src={logoFIEC} alt={"Logo icon"} />
          <img src={logoABDI} alt={"Logo icon"}/>
        </BottomLogoContainer>
      </Main>
    );

}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a428a;
  height: 100vh;
  width: 15vw;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  img:nth-child(2) {
    margin-left: 30px;
    width:80%;
  }
`;
const SideButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  margin-top: 40px;
  height: 25%;
  width: 100%;
`;
const FilterOption = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content:center;
  align-items: center;
  width: 88%;
  height: 59px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  cursor: pointer;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  p {
    font-family:"roboto",sans-serif;
    font-weight:700;
    font-size:18px;
  }
`;

const BottomLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 30px;
  width: 90%;
  height: 45%;
  background-color: #1d4997;
  margin-top: 20px;
  justify-content: space-between;

  img {
    width:100%;
  }
`;

