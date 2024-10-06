import { useState } from "react";
import "./App.css";
import { Form, Input, Button, Card, Space, Typography } from "antd";
const { Title } = Typography;

function App() {
  const [form, setForm] = useState({ name: "", description: "" });
  const [showData, setShowData] = useState({});

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowData(form);
    setForm("");
    console.log(form);
  }

  return (
    <div style={{ padding: "10px", maxWidth: 800, margin: "0 auto" }}>
      <Title level={3}>Форма с использованием Ant Design</Title>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Имя"
          rules={[
            {
              message: "Name",
            },
          ]}
        >
          <Input name="name" value={form.name} onChange={handleForm} />
        </Form.Item>

        <Form.Item
          label="Описание"
          rules={[
            {
              message: "Description",
            },
          ]}
        >
          <Input
            name="description"
            value={form.description}
            onChange={handleForm}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Отправить
          </Button>
        </Form.Item>
      </Form>
      {showData && (
        <Space direction="vertical" size={16}>
          <Card
            title="Отправленные данные"
            style={{
              width: 300,
              marginTop: "30px",
            }}
          >
            <p>Имя: {showData.name}</p>
            <p>Описание: {showData.description}</p>
          </Card>
        </Space>
      )}
    </div>
  );
}

export default App;
