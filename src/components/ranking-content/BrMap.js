import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import brazil_geo from "./brazil_geo.json";
import data from "./data.json";
import styled from "styled-components";

export default function BrMap() {
  const [svg, setSvg] = useState(null);
  const svgRef = useRef();
  const tooltipRef = useRef();
  const [state,setState] = useState()
  const [stateData,setStateData] = useState(null);
  useEffect(() => {
      const width = 800;
      const height = 600;

    // Define a escala de cores
    const color = d3
      .scaleSequential()
      .domain([0, d3.max(Object.values(data).map((d) => d.indiceFIEC))])
      .interpolator(d3.interpolateBlues);

    // Seleciona o elemento svg e define suas dimensões
    const svg = d3.select(svgRef.current).attr("width", width).attr("height", height);

    // Define a projeção geográfica a ser usada e seu centro
    const projection = d3.geoMercator().center([-45, -10]).scale(750);

    // Cria um caminho (path) baseado na projeção
    const path = d3.geoPath().projection(projection);

    // Desenha os estados do Brasil
    svg
      .selectAll("path")
      .data(brazil_geo.features)
      .join("path")
      .attr("d", path)
      .attr("fill", (d) => color(data[d.id].indiceFIEC*2))
      .attr("stroke", "#fff")
      .on("mouseover", (event, d) => {
        setStateData(data[d.id].indiceFIEC)
        setState(d.properties.name)
        const tooltip = tooltipRef.current;
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = 1;
        tooltip.style.top = `${event.pageY}px`;
        tooltip.style.left = `${event.pageX}px`;
      })
      .on("mousemove", (event, d) => {
        // Atualiza a posição do tooltip quando o mouse se move
        const tooltip = d3.select(tooltipRef.current);
        tooltip
          .style("top", `${event.pageY}px`)
          .style("left", `${event.pageX}px`);
      })
      .on("mouseout", (event, d) => {
        const tooltip = tooltipRef.current;
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = 0;
      })

    setSvg(svg);
  }, []);

  return (
    <MapContainer>
      <svg ref={svgRef} />
      <Tool ref={tooltipRef}>Estado: {state}<br />População: {stateData}</Tool>
    </MapContainer>
  );
}

const MapContainer = styled.div`
  background-color:lightcoral;
`

const Tool = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid black;
  padding: 5px;
  opacity: 0;
`