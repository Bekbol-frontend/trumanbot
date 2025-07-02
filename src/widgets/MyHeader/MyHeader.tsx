import { Button, Flex, Layout, Typography } from "antd";
import styles from "./MyHeader.module.css";

const { Header } = Layout;
const { Title } = Typography;

function MyHeader() {
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
          <Button type="primary">Close</Button>
          <Button type="primary">Toggle</Button>
        </Flex>
      </Flex>
    </Header>
  );
}

export default MyHeader;
