import styled from "styled-components";
import React, { useState,useEffect,useRef  } from "react";
import * as d3 from "d3";
import brazil_geo from "./brazil_geo.json";
import data from"./data.json"


export default function PageContent() {

    const [svg, setSvg] = useState(null);
    const svgRef = useRef(null);

    useEffect(() => {
      const width = 800;
      const height = 600;

      const color = d3
      .scaleSequential()
      .domain([0, d3.max(Object.values(data).map(d => d.indiceFIEC))])
      .interpolator(d3.interpolateBlues);

      const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);
  
      // Configure a projeção do mapa
      const projection = d3.geoMercator().center([-45, -10]).scale(750);
  
      // Configure o path para desenhar as regiões
      const path = d3.geoPath().projection(projection);
  
      // Desenhe o mapa
      svg
      .selectAll("path")
      .data(brazil_geo.features)
      .join("path")
      .attr("d", path)
      .attr("fill", (d) => color(data[d.id].indiceFIEC*1.5))
      .attr("stroke", "#fff");

    setSvg(svg);
  }, []);
 
    return(
        <PageContentTopBarContainer>
        <TopBar>Ola</TopBar>
        <Content>
        <svg ref={svgRef}/>
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
const TopBar = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 90px;

`;
const Content = styled.div`
  display: flex;
  background-color: #f4f6ff;
  height: 100%;
`;
