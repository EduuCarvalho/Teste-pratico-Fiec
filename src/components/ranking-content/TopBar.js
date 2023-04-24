import React, { useState } from "react";
import styled from "styled-components";

export default function TopBar({indicator}) {
  const [indexList, setIndexList] = useState([
    "indiceFIEC",
    "capacidade",
    "infraestrutura",
  ]);

  const [showListContainer, setShowListContainer] = useState(false);

  return (
    <TopBarContainer>
      <TittleBox>
        <h1>Ranking</h1>
      </TittleBox>
      <ListButton onClick={() =>setShowListContainer(!showListContainer)}>Selecione um indicador 
       {showListContainer && <ListContainer>
       { indexList.map((i)=> {return <input type="radio" ket={i} name={i} value={i}/>})}
        </ListContainer>} 
      </ListButton>
     
    </TopBarContainer>
  );
}

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 90px;
 
`;

const TittleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e3f7;
  width: 120px;
  height: 40px;
  margin-left: 100px;

  h1 {
    font-family: "roboto", sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #1a428a;
  }
`;
const ListButton = styled.button`
  margin-left: 30px;
  height: 40px;
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #4169e1;
  color: #ffffff;
  position: relative;
`;

const ListContainer = styled.div`
  position: absolute;
  display: none;
  display: flex;
  flex-direction: column;
  width: 120px;
  background-color: lightcoral;
  padding: 20px;
  top: 45px;
  right:3px;
  width:155px;
  padding:40px 0 40px 0;
`;
