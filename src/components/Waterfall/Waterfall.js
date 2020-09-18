/** @jsx jsx */
import { Card, Tag, Divider, Avatar } from "antd";
import { jsx } from "@emotion/core";
import "./styles.less";

const WCard = ({ title, date, description, style, icon }) => {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        ...style,
      }}
    >
      <div css={{ marginRight: "15px" }}>
        <Avatar size={36} style={{ backgroundColor: "#2D9CDB" }} src={icon} />
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
          <span css={{ color: "#959595", fontWeight: 400 }}>{date}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

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
        fontSize: "13px",
        textTransform: "uppercase",
        gridColumn: "1 / 3",
      }}
    >
      <Divider orientation="left" plain>
        <div
          style={{
            border: "1px solid #FF4C00",
            borderRadius: "4px",
            padding: "2px 20px",
            color: "#FF4C00",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Новое
        </div>
      </Divider>
      <div css={{ display: "flex", flexDirection: "column" }}>
        <WCard
          title={"Fanki Soft"}
          date={"Сегодня, 9:20"}
          description={"Текст объявления, который написан от лица компании."}
          style={{ backgroundColor: "#FEF9EC" }}
          icon="/dino.png"
        />
        <Divider orientation="right" plain>
          <div
            style={{
              border: "1px solid #DDDDDD",
              borderRadius: "6px",
              color: "#FF4C00",
              fontWeight: "bold",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "3px",
            }}
          >
            <img src="/Smile.png" css={{ backgroundColor: "#f5f5f5" }} />
            <img
              src="/Mask.png"
              css={{ height: "fit-content", marginLeft: "5px" }}
            />
          </div>
        </Divider>
        <WCard
          title={"Калинина Оксана"}
          date={"Сегодня, 9:20"}
          description={"Текст объявления, который написан от лица сотрудника."}
          style={{ backgroundColor: "#F8F8F8" }}
          icon="/dolphin.png"
        />
      </div>
      <Divider orientation="left" plain>
        <div
          style={{
            border: "1px solid #DDDDDD",
            borderRadius: "4px",
            padding: "2px 20px",
            color: "#FF4C00",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Вчера
        </div>
      </Divider>
      <div css={{ display: "flex", flexDirection: "column" }}>
        <img src="/Updates.png" />
        <span
          css={{
            color: "#959595",
            fontSize: "13px",
            lineHeight: "16.25px",
            marginBottom: "5px",
            marginTop: "5px",
            textTransform: "none",
          }}
        >
          30 апреля 2020, 12:00
        </span>
        <span
          css={{
            color: "#1D1C1D",
            fontWeight: 800,
            lineHeight: "20px",
            fontSize: "16px",
            marginBottom: "5px",
            textTransform: "none",
          }}
        >
          Здесь будет находится длинный очень длинный заголовокопубликованной
          новости в водопаде событий
        </span>
        <span
          css={{
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "16.25px",
            color: "#959595",
            textTransform: "none",
          }}
        >
          Разнообразный и богатый опыт постоянный количественный рост и сфера
          нашей активности позволяет оценить значение позиций, занимаемых...{" "}
        </span>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <img src="/comm1.png" />
          <img src="/comm2.png" css={{ marginLeft: "10px" }} />
          <img src="/comm3.png" css={{ marginLeft: "10px" }} />
          <img src="/comments.png" css={{ marginLeft: "auto" }} />
        </div>
      </div>
    </Card>
  );
};

export default Waterfall;
