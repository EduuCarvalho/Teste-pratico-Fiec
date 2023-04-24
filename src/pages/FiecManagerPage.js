import styled from "styled-components";
import { useState } from "react";
import SideBar from "../components/Sidebar";
import RankingPageContent from "../components/ranking-content/RankingPageContent";
import PerfilPageContent from "../components/perfil-content/PerfilPageContent";

export function FiecManagerPage() {
  const [filter, setFilter] = useState("ranking");

  return (
    <MainPage>
      <SideBar filter={filter} setFilter={setFilter} />
      {filter === "ranking" ? <RankingPageContent /> : <PerfilPageContent />}
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
  height: 100vh;
`;
