/** @jsx jsx */
import { jsx } from "@emotion/core";
import Logo from "../logo.svg";
import Bell from "../bell.svg";
// import Lion from "../lion.svg";
import { Lion, ArrowDown } from "../icons/Main";
// import ArrowDown from "../arrowDown.svg";

export default () => {
  return (
    <header
      css={{
        height: "54px",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <div
        css={{
          marginRight: "auto",
          marginLeft: "auto",
          height: "100%",
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <div
          css={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            css={{
              borderLeft: "1px solid #DDDDDD",
              paddingLeft: "20px",
              borderRight: "1px solid #DDDDDD",
              paddingRight: "20px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "center",
                borderRadius: "6px",
                border: "1px solid #DDDDDD",
                padding: "6px 12px",
                backgroundColor: "#F8F8F8",
              }}
            >
              <img src={Bell} alt="bell-icon" />
              <span
                css={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#959595",
                  marginLeft: "8px",
                  lineHeight: "0",
                }}
              >
                Сообщений нет
              </span>
            </div>
          </div>
          <div
            css={{
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <div
              css={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#1D1C1D",
                lineHeight: "17px",
              }}
            >
              Александров Александр
            </div>
            <div css={{ color: "#959595", lineHeight: "17px", mt: "2px" }}>
              Frontend разработчик
            </div>
          </div>
          <Lion style={{ marginLeft: "20px" }} />
          <ArrowDown style={{ marginLeft: "20px" }} />
        </div>
      </div>
    </header>
  );
};
