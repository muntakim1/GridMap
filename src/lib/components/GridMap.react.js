import PropTypes, { object } from 'prop-types';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default function GridMap({id, data,className,style,width,height,show_axes }) {
    const svgRef = useRef(null);
  
    useEffect(() => {
      const svg = d3.select(svgRef.current);
  
      // Set the dimensions of the heatmap
      const margin = { top: 30, right: 30, bottom: 30, left: 30 };
      const width1 = width - margin.left - margin.right;
      const height1 = height - margin.top - margin.bottom;
      // Create scales for x and y axes
      const sortedData = data.sort((a, b) => a.x - b.x);

      const xScale = d3.scaleBand()
        .domain(sortedData.map(d => d.x))
        .range([0, width1])
        .padding(0.1);
      const yScale = d3.scaleBand().range([0, height1]);
  
      // Create x and y axes
      const xAxis = show_axes ? d3.axisBottom(xScale) : d3.axisBottom(xScale).tickValues(0);
      const yAxis = show_axes ? d3.axisLeft(yScale) : d3.axisLeft(yScale).tickValues(0);
  
      // Set the domain of the scales based on the data
      xScale.domain(data.map(d => d.x));
      yScale.domain(data.map(d => d.y));
  
      // Append x and y axes to the SVG
      svg
        .append('g')
        .attr('transform', `translate(${margin.left}, ${height1})`)
        .attr("class", "axis--x")
        .call(xAxis);
  
      svg
        .append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .attr("class", "axis--y")
        .call(yAxis);

      svg.selectAll('domain')
        .style('display', 'none');
      svg.selectAll('.domain')
        .style('display', 'none');
      // Create the heatmap rectangles
      svg
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.x) + margin.left)
        .attr('y', d => yScale(d.y))
        .attr('width', xScale.bandwidth())
        .attr('height', yScale.bandwidth())
        .style('fill', d => d.color)
        .on('mouseover', (event, d) => {
          d3.select(event.target).style('opacity', 0.7);
          const tooltip = d3.select('#tooltip');
          tooltip.style('visibility', 'visible')
            .style('top', `${event.pageY}px`)
            .style('left', `${event.pageX}px`)
            // .style('color', `#0000ff`)
            .style('background-color', `${d.color}`)
            .html(`Timestamp: ${d.timestamp}<br>Value: ${d.value}`);
        })
        .on('mouseout', (event, d) => {
          d3.select(event.target).style('opacity', 1);
          const tooltip = d3.select('#tooltip');
          tooltip.style('visibility', 'hidden');
        });


    }, [data,height,width,show_axes]);
  
    return (
        <div id={id} className={className} style={style}>
      <svg ref={svgRef} width={width} height={height}>
        {/* SVG content goes here */}
      </svg>
      <div id="tooltip" style={{ position: 'absolute', visibility: 'hidden' }}></div>        
        </div>

   
    );
  }
  

GridMap.defaultProps = {};

GridMap.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dataset.
     */
    data: PropTypes.arrayOf(object).isRequired,
    /**
     * Classname .
     */
    className: PropTypes.string,
    /**
     * The value displayed in the input.
     */
    height: PropTypes.number,
    /**
     * The value displayed in the input.
     */
    style: PropTypes.object,
    /**
     * The value displayed in the input.
     */

    width: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    show_axes: PropTypes.bool
};
