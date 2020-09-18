import React from "react";
import { Card, Tag, Carousel } from "antd";
import "./styles.less";

const Calendar = ({ children }) => {
  return (
    <Card
      title="КАЛЕНДАРЬ"
      extra={<Tag color="#f50">1</Tag>}
      style={{
        borderLeft: "20px",
        borderRadius: "6px",
        filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
        flex: 1,
      }}
      actions={[<span>Календарь →</span>]}
    >
      {children}
    </Card>
  );
};

export default Calendar;
