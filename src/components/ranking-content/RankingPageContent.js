import styled from "styled-components";
import TopBar from "./TopBar";
import BrMap from "./BrMap";
import GraphicBars from "./GraphicBars";
import { useState } from "react";


export default function RankingPageContent() {
  const [indicator,setIndicator] = useState("Indice FIEC")
    return(
        <PageContentTopBarContainer>
    
        <TopBar setIndicator={setIndicator} indicator={indicator}/>
        <h1>{indicator}</h1>
        <Content >
        <BrMap indicator={indicator} />
        <GraphicBars indicator={indicator} />
        </Content>
      </PageContentTopBarContainer>
    );
}

const PageContentTopBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  h1{
  font-weight:700;
    font-size:30px;
  font-family:"roboto",sans-serif;
  background-color: #f4f6ff;
  width:100%;
  text-align:center;
  color:#1a428a;
  padding-top:10px;
}
`;

const Content = styled.div`
  display: flex;
  background-color: #f4f6ff;
  height: 100%;
 
`;
