import { Button, Flex, Layout, Typography } from "antd";
import styles from "./MyHeader.module.css";
import { useTelegram } from "@/hooks/useTelegram";

const { Header } = Layout;
const { Title } = Typography;

function MyHeader() {
  const { close, toggleMainBtn } = useTelegram();

  return (
    <Header className={styles.header}>
      <Flex align="center" justify="space-between" flex={1} gap={10}>
        <Title
          level={3}
          style={{
            color: "#fff",
            margin: 0,
          }}
        >
          User
        </Title>
        <Flex gap={10}>
          <Button type="primary" onClick={close}>
            Close
          </Button>
          <Button type="primary" onClick={toggleMainBtn}>
            Toggle
          </Button>
        </Flex>
      </Flex>
    </Header>
  );
}

export default MyHeader;
