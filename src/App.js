/** @jsx jsx */
import "./App.less";
import Header from "./components/Header";
import { jsx } from "@emotion/core";
import { Layout, Tag } from "antd";
import Sider from "./components/Sider/Sider";
import Staff from "./components/Staff/Staff";
import Requests from "./components/Requests/Requests";
import Calendar from "./components/Calendar/Calendar";
import Base from "./components/Base/Base";
import Waterfall from "./components/Waterfall/Waterfall";
import Notifications from "./components/Notifications/Notifications";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout
          css={{
            maxWidth: "1200px",
            marginRight: "auto",
            marginLeft: "auto",
            width: "100%",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Sider />
          <Content style={{ marginLeft: "20px" }}>
            <Staff />
            <div
              css={{
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <Requests>
                <div
                  css={{
                    minHeight: "100px",
                  }}
                >
                  <span>У вас </span>
                  <Tag>2 несогласованных запроса</Tag>
                  <span>от сотрудников: Петров Алексей и Шишкин Егор</span>
                </div>
              </Requests>
              <Calendar>
                <div
                  css={{
                    minHeight: "100px",
                  }}
                >
                  <span>10:00 - 11:00 | Групповое событие</span>
                </div>
              </Calendar>
              <Base>
                <div
                  css={{
                    minHeight: "100px",
                  }}
                >
                  <span>Новых публикаций нет</span>
                </div>
              </Base>
            </div>
            <div
              css={{
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <Waterfall />
              <Notifications />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
