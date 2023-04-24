import styled from "styled-components";
import { useState } from "react";
import SideBar from "../components/Sidebar";
import PageContent from "../components/PageContent"


export function FiecManagerPage() {
  const [filter, setFilter] = useState("ranking");
  const data = {
    AC: 0.5,
    AL: 0.7,
    AP: 0.2,
    AM: 0.3,
    BA: 0.8,
    CE: 0.6,
    DF: 0.9,
    ES: 0.4,
    GO: 0.7,
    MA: 0.5,
    MT: 0.6,
    MS: 0.4,
    MG: 0.8,
    PA: 0.3,
    PB: 0.6,
    PR: 0.7,
    PE: 0.7,
    PI: 0.5,
    RJ: 0.9,
    RN: 0.6,
    RS: 0.8,
    RO: 0.4,
    RR: 0.2,
    SC: 0.7,
    SP: 0.9,
    SE: 0.6,
    TO: 0.4,
  };
  
  return (
    <MainPage>
      <SideBar filter={filter} setFilter={setFilter} />
      <PageContent data={data}></PageContent>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
`;
