import styled from "styled-components";

import TopBar from "./TopBar";
import BrMap from "./BrMap";


export default function RankingPageContent() {

    return(
        <PageContentTopBarContainer>
        <TopBar/>
        <Content>
        <BrMap/>
        <>OLAAasdsadA</>
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
