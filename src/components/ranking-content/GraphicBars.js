import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import data from "./data.json"

export default function GraphicBars () {

    const svgRef = useRef();

    useEffect(() => {
      const svg = d3.select(svgRef.current);
  
      const margin = { top: 20, right: 20, bottom: 20, left: 60 };
      const width = 600 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;
  
      const x = d3.scaleLinear().range([0, width]);
      const y = d3.scaleBand().range([height, 0]).padding(0.1);
  
      const maxIndex = d3.max(Object.values(data), (d) => d.indiceFIEC);
      const minIndex = d3.min(Object.values(data), (d) => d.indiceFIEC);
  
      const color = d3
        .scaleLinear()
        .domain([minIndex, maxIndex])
        .range(["#B3D9FF", "#0066CC"]);
  
      const xAxis = d3.axisBottom().scale(x);
      const yAxis = d3.axisLeft().scale(y);
  
      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
      x.domain([0, maxIndex]);
      y.domain(Object.keys(data).sort((a, b) => data[a].indiceFIEC - data[b].indiceFIEC));
  
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
        .attr("width", (d) => x(d[1].indiceFIEC))
        .attr("fill", (d) => color(d[1].indiceFIEC));
    }, [data]);
    return(<GraphicContainer>
      <div className="chart-container">
      <svg ref={svgRef} width="600" height="400"></svg>
    </div>

    </GraphicContainer>);
}

const GraphicContainer = styled.div`
    background-color:lightcyan;
    width:100%;
`