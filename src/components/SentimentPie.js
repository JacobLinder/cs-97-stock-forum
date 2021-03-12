import React from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';

/**
 * Formats the budget items into a pie chart.
 * @author Jacob Linder
 * @version 1.0.0
 * @param {Array} props.items - The array of budget items
 */
export default function SentimentPie(props) {

  COLORS = [
    '#FF6666', '#FFB266', '#FFFF66', '#B2FF66',
    '#66FF66', '#66FFB2', '#66FFFF', '#66B2FF',
    '#6666FF', '#B266FF', '#FF66FF', '#FF66B2', '#C0C0C0'
  ];

  /**
   * Formats the label so it looks good.
   * @param {PieSlice} e - Info about the slice and the budget item itself
   * @returns JSX text component with the label
   */
  renderCustomizedLabel = (e) => {
    const RADIAN = Math.PI / 180;
    const radius = e.innerRadius + (e.outerRadius - e.innerRadius) * 0.6;
    const x = e.cx + radius * Math.cos(-e.midAngle * RADIAN);
    const y = e.cy + radius * Math.sin(-e.midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > e.cx ? 'start' : 'end'}
        dominantBaseline="central"
        style={{ font: "icon", fontStyle: "italic" }}>
          {/* font: mont smthng */}
        {e.name}
      </text>
    );
  };
  
  /**
   * Renders the budget pie JSX component.
   * @returns Pie chart JSX component
   */
  const items = this.props.items ? this.props.items : null;
  if (items != null) {
    return (
      <center>
        <PieChart width={600} height={600}>
          <Pie
            dataKey="price"
            data={items}
            fill="#8884d8"
            label={this.renderCustomizedLabel}
            labelLine={false}
          >
            {
              items.map((item, index) => <Cell
                key={`cell-${index}`}
                fill={this.COLORS[index % this.COLORS.length]}
              />)
            }
          </Pie>
        </PieChart>
      </center>
    );
  } else {
    return(null);
  }
}