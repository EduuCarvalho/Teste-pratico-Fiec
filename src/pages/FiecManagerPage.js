import styled from "styled-components";
import { useState } from "react";
import SideBar from "../components/Sidebar";
import PageContent from "../components/PageContent"


export function FiecManagerPage() {
  const [filter, setFilter] = useState("ranking");

  
  return (
    <MainPage>
      <SideBar filter={filter} setFilter={setFilter} />
      <PageContent/>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
`;
