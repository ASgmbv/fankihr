/** @jsx jsx */
import "./App.less";
import Header from "./components/Header";
import { jsx } from "@emotion/core";
import { Layout, Tag, Carousel } from "antd";
import Sider from "./components/Sider/Sider";
import Staff from "./components/Staff/Staff";
import Requests from "./components/Requests/Requests";
import Calendar from "./components/Calendar/Calendar";
import Base from "./components/Base/Base";
import Waterfall from "./components/Waterfall/Waterfall";
import Notifications from "./components/Notifications/Notifications";
import { ArrowLeft, ArrowRight } from "./icons/Main";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ backgroundColor: "#ececec" }}>
        <Header>Header</Header>
        <Layout
          css={{
            maxWidth: "1210px",
            marginRight: "auto",
            marginLeft: "auto",
            width: "100%",
            marginTop: "20px",
            backgroundColor: "#ececec",
          }}
        >
          <Sider />
          <Content
            style={{
              paddingLeft: "20px",
              overflow: "visible",
            }}
          >
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "auto",
                gridGap: "20px",
              }}
            >
              <Staff />
              <Requests>
                <div
                  css={{
                    minHeight: "150px",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <ArrowLeft />
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <span
                      css={{
                        fontSize: "14px",
                        color: "1D1C1D",
                        textAlign: "center",
                      }}
                    >
                      У вас{" "}
                    </span>
                    <Tag
                      css={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        borderRadius: "6px",
                        border: "none",
                        width: "fit-content",
                      }}
                      color="red"
                    >
                      2 несогласованных запроса
                    </Tag>

                    <span
                      css={{
                        fontSize: "14px",
                        color: "1D1C1D",
                        textAlign: "center",
                      }}
                    >
                      от сотрудников:{" "}
                      <strong>Петров Алексей и Шишкин Егор</strong>
                    </span>
                  </div>
                  <ArrowRight />
                </div>
              </Requests>
              <Calendar>
                <div
                  css={{
                    minHeight: "150px",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <ArrowLeft />
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <img src="/calendar.png" css={{ marginBottom: "10px" }} />
                    <span
                      css={{
                        color: "#616061",
                        textAlign: "center",
                        fontSize: "13px",
                        marginBottom: "15px",
                      }}
                    >
                      10:00 - 11:00 | Групповое событие
                    </span>
                    <span
                      css={{
                        color: "#000000",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      Презентация мобильной системы
                    </span>
                  </div>
                  <ArrowRight />
                </div>
              </Calendar>
              <Base>
                <div
                  css={{
                    minHeight: "150px",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <ArrowLeft />
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <img src="/books.png" css={{ marginBottom: "10px" }} />
                    <span
                      css={{
                        color: "#616061",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      Новых публикаций нет
                    </span>
                  </div>
                  <ArrowRight />
                </div>
              </Base>
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
