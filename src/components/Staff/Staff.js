/** @jsx jsx */
import { useState } from "react";
import { Card, Tag, Tabs, Avatar } from "antd";
import "./styles.less";
import { jsx } from "@emotion/core";

const tabList = [
  {
    key: "tab1",
    tab: "Сегодня, 20 авг",
  },
  {
    key: "tab2",
    tab: "Завтра, 21 авг",
  },
  {
    key: "tab3",
    tab: "Неделя",
  },
];

const { TabPane } = Tabs;

const SCard = ({ title, dates, description, color = "blue" }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        margin: "20px",
        marginRight: "50px",
        flex: 1,
      }}
    >
      <div
        css={{
          width: "100%",
          display: "flex",
          maxWidth: "300px",
          marginBottom: "10px",
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
          <span
            css={{
              marginRight: "10px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#1D1C1D",
            }}
          >
            {title}
          </span>
          <span css={{ fontSize: "12px", color: "#616061" }}>
            {description}
          </span>
        </div>
      </div>
      <div>
        <Tag
          css={{
            fontWeight: "bold",
            border: "none",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
          }}
          color={color}
        >
          {dates}
        </Tag>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Никифорова Валентина",
    description: "Менеджер по продажам",
    dates: "10 августа 2020 - 21 августа 2020",
    color: "blue",
  },
  {
    title: "Сапогова Лилия",
    description: "Менеджер по продажам",
    dates: "20 августа 2020 - 31 августа 2020",
    color: "orange",
  },
  {
    title: "Шепелева Галина",
    description: "Менеджер по продажам",
    dates: "20 августа 2020 - 10 сентября 2020",
    color: "red",
  },
  {
    title: "Федотов Алексей",
    description: "Менеджер по продажам",
    dates: "20 августа 2020 - 25 августа 2020",
    color: "blue",
  },
  {
    title: "Кузнецова Екатерина",
    description: "Менеджер по продажам",
    dates: "15 августа 2020 - 1 сентября 2020",
    color: "orange",
  },
  {
    title: "Яковлев Николай",
    description: "Менеджер по продажам",
    dates: "10 августа 2020 - 21 августа 2020",
    color: "red",
  },
  {
    title: "Гончаров Леонид",
    description: "Менеджер по продажам",
    dates: "10 августа 2020 - 21 августа 2020",
    color: "blue",
  },
  {
    title: "Зырянов Кирилл",
    description: "Менеджер по продажам",
    dates: "10 августа 2020 - 21 августа 2020",
    color: "orange",
  },
  {
    title: "Терентьев Валерий",
    description: "Менеджер по продажам",
    dates: "10 августа 2020 - 21 августа 2020",
    color: "red",
  },
];

const Tab = ({ title, stats, color }) => (
  <div
    css={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#F8F8F8",
      width: "220px",
      paddingTop: "10px",
      paddingBottom: "10px",
      borderRadius: "6px",
      paddingLeft: "10px",
      paddingRight: "10px",
    }}
  >
    <div
      css={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        css={{
          marginRight: "10px",
          width: "3px",
          height: "25px",
          backgroundColor: color,
        }}
      />
      <span>{title}</span>
    </div>

    <span>{stats}</span>
  </div>
);

const contentList = {
  tab1: (
    <Tabs defaultActiveKey="1">
      <TabPane
        tab={<Tab title="Все" stats="23 сотрудника" color="#27AE60" />}
        key="1"
        type="editable-card"
      >
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            border: "1px solid #DDDDDD",
            borderRadius: "6px",
          }}
        >
          {data.map(({ title, description, dates, color }, index) => (
            <SCard
              title={title}
              key={index}
              description={description}
              dates={dates}
              color={color}
            />
          ))}
        </div>
      </TabPane>
      <TabPane
        tab={<Tab title="В отпуске" stats="7 сотрудников" color="#2F80ED" />}
        key="2"
      >
        Content of Tab Pane 2
      </TabPane>
      <TabPane
        tab={<Tab title="Отгул" stats="10 сотрудников" color="#F2994A" />}
        key="3"
      >
        Content of Tab Pane 3
      </TabPane>
      <TabPane
        tab={<Tab title="Больничный" stats="Нет" color="#FF0F00" />}
        key="4"
      >
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  ),
  tab2: (
    <Tabs defaultActiveKey="1">
      <TabPane
        tab={<Tab title="Все" stats="23 сотрудника" color="#27AE60" />}
        key="1"
        type="editable-card"
      >
        Content of Tab Pane 1
      </TabPane>
      <TabPane
        tab={<Tab title="В отпуске" stats="7 сотрудников" color="#2F80ED" />}
        key="2"
      >
        Content of Tab Pane 2
      </TabPane>
      <TabPane
        tab={<Tab title="Отгул" stats="10 сотрудников" color="#F2994A" />}
        key="3"
      >
        Content of Tab Pane 3
      </TabPane>
      <TabPane
        tab={<Tab title="Больничный" stats="Нет" color="#FF0F00" />}
        key="3"
      >
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  ),
  tab3: (
    <Tabs defaultActiveKey="1">
      <TabPane
        tab={<Tab title="Все" stats="23 сотрудника" color="#27AE60" />}
        key="1"
        type="editable-card"
      >
        Content of Tab Pane 1
      </TabPane>
      <TabPane
        tab={<Tab title="В отпуске" stats="7 сотрудников" color="#2F80ED" />}
        key="2"
      >
        Content of Tab Pane 2
      </TabPane>
      <TabPane
        tab={<Tab title="Отгул" stats="10 сотрудников" color="#F2994A" />}
        key="3"
      >
        Content of Tab Pane 3
      </TabPane>
      <TabPane
        tab={<Tab title="Больничный" stats="Нет" color="#FF0F00" />}
        key="3"
      >
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  ),
};

const Staff = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Card
      title="Отсутствующие сотрудники"
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={(key) => {
        setActiveTab(key);
      }}
      tabProps={{
        type: "card",
        style: { marginTop: "10px" },
      }}
      style={{
        borderRadius: "6px",
        marginBottom: "20px",
        filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
      }}
    >
      {contentList[activeTab]}
    </Card>
  );
};

export default Staff;
