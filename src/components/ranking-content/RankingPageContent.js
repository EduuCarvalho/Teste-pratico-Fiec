import styled from "styled-components";
import TopBar from "./TopBar";
import BrMap from "./BrMap";
import GraphicBars from "./GraphicBars";


export default function RankingPageContent() {

    return(
        <PageContentTopBarContainer>
        <TopBar/>
        <Content>
        <BrMap/>
        <GraphicBars/>
        </Content>
      </PageContentTopBarContainer>
    );
}

const PageContentTopBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  background-color: #f4f6ff;
  height: 100%;
`;
