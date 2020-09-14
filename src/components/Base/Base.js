import React from "react";
import { Card, Tag } from "antd";

const Base = ({ children }) => {
  return (
    <Card
      title="БАЗА ЗНАНИЙ"
      extra={<Tag color="#f50">1</Tag>}
      style={{
        borderLeft: "20px",
        borderRadius: "6px",
        filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
        flex: 1,
        marginBottom: "20px",
      }}
      actions={["База знаний →"]}
    >
      {children}
    </Card>
  );
};

export default Base;
