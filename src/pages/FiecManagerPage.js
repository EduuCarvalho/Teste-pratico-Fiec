import styled from "styled-components";
import { useState } from "react";
import SideBar from "../components/Sidebar";
import RankingPageContent from "../components/ranking-content/RankingPageContent";


export function FiecManagerPage() {
  const [filter, setFilter] = useState("ranking");

  
  return (
    <MainPage>
      <SideBar filter={filter} setFilter={setFilter} />
      <RankingPageContent/>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
`;
