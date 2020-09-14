/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Tag, Avatar } from "antd";

const NCard = ({ title, date, description, event }) => {
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
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
          flexDirection: "column",
        }}
      >
        <div
          css={{
            display: "flex",
            width: "100%",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <span css={{ marginRight: "10px", color: "black" }}>{title}</span>
          <span css={{ color: "#959595", fontWeight: 500 }}>{date}</span>
        </div>

        <Tag
          css={{
            fontWeight: "bold",
            fontSize: "10px",
            borderRadius: "6px",
            border: "none",
            width: "fit-content",
          }}
          color="blue"
        >
          {event}
        </Tag>
        <p css={{ marginTop: "10px" }}>{description}</p>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Владимиров Владимир",
    description: "Текст объявления, который написан от лица компании.",
    date: "10:50",
    event: "НАЗНАЧАЕТ ВАМ ЗАДАЧУ",
  },
  {
    title: "Владимиров Владимир",
    description: "Текст объявления, который написан от лица сотрудника.",
    date: "9:20",
    event: "СОЗДАЁТ СОБЫТИЕ",
  },
];

const Notifications = () => {
  return (
    <Card
      title="УВЕДОМЛЕНИЯ"
      extra={<Tag color="#f50">1</Tag>}
      style={{
        borderLeft: "20px",
        borderRadius: "6px",
        filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
        flex: 1,
        fontSize: "13px",
      }}
      actions={["уведомления →"]}
    >
      {data.map(({ title, date, description, event }, index) => (
        <NCard
          title={title}
          date={date}
          description={description}
          event={event}
          key={index}
        />
      ))}
    </Card>
  );
};

export default Notifications;
