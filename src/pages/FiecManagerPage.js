import styled from "styled-components";
import { useState } from "react";
import SideBar from "../components/Sidebar";

export function FiecManagerPage() {
  const [filter, setFilter] = useState("ranking");
  return (
    <MainPage>
      <SideBar filter={filter} setFilter={setFilter} />
      <PageContentTopBarContainer>
        <TopBar></TopBar>
        <PageContent></PageContent>
      </PageContentTopBarContainer>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
`;
const PageContentTopBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const TopBar = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 90px;
`;
const PageContent = styled.div`
  display: flex;
  background-color: lightgray;
  height: 100%;
`;
