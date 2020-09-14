import React from "react";
import { Layout, Menu } from "antd";
import Flash from "../../icons/Flash";
import "./styles.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

const subMenuItems1 = [
  {
    title: "Главная",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
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
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Календарь",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "База Знаний",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Новости",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Задачи",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Чаты",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
];

const subMenuItems2 = [
  {
    title: "Статистика компании",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Структура компании",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Сотрудники",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "База знаний",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Новости",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Настройки",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
        }}
      />
    ),
  },
  {
    title: "Служба поддержки",
    icon: (
      <Flash
        style={{
          verticalAlign: "middle",
          marginLeft: "-24px",
          marginRight: "10px",
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
        defaultSelectedKeys={["1"]}
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
