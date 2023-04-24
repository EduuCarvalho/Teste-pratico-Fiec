import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import data from "./data.json"

export default function GraphicBars ({indicator}) {

    const svgRef = useRef();

    useEffect(() => {
        
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); // para não renderizar um em cima do outro, seleciona todos o svg e remove
      const margin = { top: 20, right: 20, bottom: 20, left: 60 };
      const width = 500 - margin.left - margin.right;
      const height = 600 - margin.top - margin.bottom;
  
      const x = d3.scaleLinear().range([0, width]);
      const y = d3.scaleBand().range([height, 0]).padding(0.2);
  
      const maxIndex = d3.max(Object.values(data), (d) => d[indicator]);
      const minIndex = d3.min(Object.values(data), (d) => d[indicator]);
  
      const color = d3
        .scaleLinear()
        .domain([minIndex, maxIndex])
        .range(["#B3D9FF", "#1c4483"]);
  
      const xAxis = d3.axisBottom().scale(x);
      const yAxis = d3.axisLeft().scale(y);
  
      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
      x.domain([0, maxIndex]);
      y.domain(Object.keys(data).sort((a, b) => data[a][indicator] - data[b][indicator]));
  
      g.append("g")
        .attr("class", "axis-x")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);
  
      g.append("g").attr("class", "axis-y").call(yAxis);
  
      g.selectAll(".bar")
        .data(Object.entries(data))
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", (d) => y(d[0]))
        .attr("height", y.bandwidth())
        .attr("width", (d) => x(d[1][indicator]))
        .attr("fill", (d) => color(d[1][indicator] *1.5));
    }, [indicator]);
    return(
    <GraphicContainer>
        <GraphicBox>
            <svg ref={svgRef} width="500" height="700"></svg>
        </GraphicBox>
    </GraphicContainer>);
}

const GraphicContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:800px;
    
`

const GraphicBox = styled.div `

    background-color:#FFFFFF;
    width:600px;
    height:700px;
    border-radius:20px;
    box-shadow: 2px 2px 10px #888888;
`