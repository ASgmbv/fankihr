/** @jsx jsx */
import { Card, Tag, Divider, Avatar } from "antd";
import { jsx } from "@emotion/core";

const WCard = ({ title, date, description }) => {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <div css={{ marginRight: "15px" }}>
        <Avatar style={{ backgroundColor: "#2D9CDB" }}>
          {title.substr(0, 1)}
        </Avatar>
      </div>
      <div
        css={{
          display: "flex",
          alignItems: "space-between",
          flexDirection: "column",
        }}
      >
        <div css={{ fontSize: "14px", fontWeight: 800 }}>
          <span css={{ marginRight: "10px", color: "black" }}>{title}</span>
          <span css={{ color: "#959595" }}>{date}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Fanki Soft",
    description: "Текст объявления, который написан от лица компании.",
    date: "Сегодня, 10:50",
  },
  {
    title: "Калинина Оксана",
    description: "Текст объявления, который написан от лица сотрудника.",
    date: "Сегодня, 9:20",
  },
];

const Waterfall = () => {
  return (
    <Card
      title="Водопад событий"
      extra={<Tag color="#f50">2</Tag>}
      style={{
        borderLeft: "20px",
        borderRadius: "6px",
        filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
        flex: 2,
        marginRight: "20px",
        fontSize: "13px",
        textTransform: "uppercase",
      }}
    >
      <Divider orientation="left" plain>
        <div
          style={{
            border: "1px solid #FF4C00",
            borderRadius: "4px",
            padding: "2px 20px",
            color: "#FF4C00",
          }}
        >
          Новое
        </div>
      </Divider>
      <div css={{ display: "flex", flexDirection: "column" }}>
        {data.map(({ title, date, description }, index) => (
          <WCard
            title={title}
            date={date}
            description={description}
            key={index}
          />
        ))}
      </div>
      <Divider orientation="left" plain>
        <div
          style={{
            border: "1px solid #DDDDDD",
            borderRadius: "4px",
            padding: "2px 20px",
            color: "#FF4C00",
          }}
        >
          Вчера
        </div>
      </Divider>
    </Card>
  );
};

export default Waterfall;
