import React from "react";
import { Layout, Menu } from "antd";
import Flash from "../../icons/Flash";
import {
  Main,
  Calendar,
  Book,
  OpenBook,
  CheckMark,
  MessageCircle,
  TrendingUp,
  Copy,
  People,
  Layers,
  Settings,
} from "../../icons/Main";
import "./styles.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

const subMenuItems1 = [
  {
    title: "Главная",
    icon: (
      <Main
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Запросы",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Календарь",
    icon: (
      <Calendar
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "База Знаний",
    icon: (
      <Book
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Новости",
    icon: (
      <OpenBook
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Задачи",
    icon: (
      <CheckMark
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Чаты",
    icon: (
      <MessageCircle
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
];

const subMenuItems2 = [
  {
    title: "Статистика компании",
    icon: (
      <TrendingUp
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Структура компании",
    icon: (
      <Copy
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Сотрудники",
    icon: (
      <People
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "База знаний",
    icon: (
      <Book
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Новости",
    icon: (
      <OpenBook
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Настройки",
    icon: (
      <Settings
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
  {
    title: "Служба поддержки",
    icon: (
      <Layers
        style={{
          verticalAlign: "middle",
          marginLeft: "-15px",
          marginRight: "8px",
        }}
      />
    ),
  },
];

export default () => {
  return (
    <Sider theme="light">
      <Menu
        mode="inline"
        defaultSelectedKeys={["0"]}
        defaultOpenKeys={["sub1", "sub2"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
      >
        <SubMenu key="sub1" title="КОМПАНИЯ">
          {subMenuItems1.map(({ title, icon }, index) => (
            <Menu.Item key={index} icon={icon}>
              {title}
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="sub2" title="АДМИНИСТРАТОР">
          {subMenuItems2.map(({ title, icon }, index) => (
            <Menu.Item key={index + subMenuItems1.length} icon={icon}>
              {title}
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};
