import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";

export default function TopBar({ setIndicator, indicator }) {
  const [indexList, setIndexList] = useState([
    "Índice FIEC",
    "Índice de Capacidade",
    "Infraestrutura",
  ]);

  const [showListContainer, setShowListContainer] = useState(false);
  const handleOptionChange = (event) => {
    setIndicator(event.target.value);
  };

  return (
    <TopBarContainer>
      <TittleBox>
        <BsBarChartFill size="24px" color="#1a428a" />
        <h1>Ranking</h1>
      </TittleBox>
      <ListButton onClick={() => setShowListContainer(!showListContainer)}>
        Selecione um indicador
        {showListContainer ? (
          <MdArrowDropUp size="30px" />
        ) : (
          <MdArrowDropDown size="30px" />
        )}
      </ListButton>

      {showListContainer && (
        <ListContainer>
          {indexList.map((i) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  id={i}
                  name="option"
                  value={i}
                  checked={indicator === i}
                  onChange={handleOptionChange}
                />
                <label htmlFor={i}>{i}</label>
              </div>
            );
          })}
        </ListContainer>
      )}
    </TopBarContainer>
  );
}

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 90px;
  position: relative;
`;

const TittleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 40px;
  margin-left: 100px;
  padding: 2px;

  h1 {
    font-family: "roboto", sans-serif;
    font-weight: 700;
    font-size: 20px; 
  }
`;
const ListButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 40px;
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #4169e1;
  color: #ffffff;
  cursor: pointer;
`;

const ListContainer = styled.div`
  position: absolute;
  display: none;
  display: flex;
  flex-direction: column;
  width: 120px;
  background-color: #ffffff;
  padding: 20px;
  top: 65px;
  left: 250px;
  width: 200px;
  padding: 40px 0 40px 0;
  input {
    margin: 5px 5px 0 0;
  }
`;
