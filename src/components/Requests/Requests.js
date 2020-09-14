import React from "react";
import { Card, Tag } from "antd";
import "./styles.less";

const Requests = ({ children }) => {
  return (
    <Card
      title="ЗАПРОСЫ"
      extra={<Tag color="#f50">1</Tag>}
      style={{
        borderLeft: "20px",
        borderRadius: "6px",
        filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
        flex: 1,
        marginRight: "20px",
        marginBottom: "20px",
        fontSize: "13px",
      }}
      actions={[<span>Запросы →</span>]}
    >
      {children}
    </Card>
  );
};

export default Requests;
