import { useTelegram } from "@/hooks/useTelegram";
import FormPage from "@/pages/FormPage/FormPage";
import HomePage from "@/pages/HomePage/HomePage";
import MyHeader from "@/widgets/MyHeader/MyHeader";
import { Layout, ConfigProvider } from "antd";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const { Content } = Layout;

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-roboto)",
        },
      }}
    >
      <Layout className="layout">
        <MyHeader />
        <Content className="main-content">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
