import styled from "styled-components";
import { useState } from "react";
import SideBar from "../components/Sidebar";
import RankingPageContent from "../components/ranking-content/RankingPageContent";


export function FiecManagerPage() {
  const [filter, setFilter] = useState("ranking");
  const [indicator,setIndicator] = useState("indiceFIEC")
  return (
    <MainPage>
      <SideBar filter={filter} setFilter={setFilter} />
      <RankingPageContent indicator = {indicator} setIndicator={setIndicator}/>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
`;
