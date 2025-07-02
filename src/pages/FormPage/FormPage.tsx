import { useTelegram } from "@/hooks/useTelegram";
import type { FormProps } from "antd";
import { Form, Input, Select } from "antd";
import { useEffect } from "react";

type FieldType = {
  country?: string;
  street?: string;
  subject?: string;
};

function FormPage() {
  const [form] = Form.useForm();
  const matchForm = Form.useWatch([], form);

  const { tg } = useTelegram();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  useEffect(() => {
    if (!form.getFieldValue("country") || !form.getFieldValue("street")) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [tg, matchForm, form]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить",
    });
  }, [tg]);

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <Form
        form={form}
        name="form"
        initialValues={{
          subject: "physical",
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Ваша страна"
          name="country"
          rules={[{ required: true, message: "Please input your country!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Ваша улица"
          name="street"
          rules={[{ required: true, message: "Please input your street!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Физ. Лицо / Юр. Лицо"
          name="subject"
          rules={[{ required: true, message: "Please input your subject!" }]}
        >
          <Select
            options={[
              { value: "physical", label: "Физ. Лицо" },
              { value: "legal", label: "Юр. Лицо" },
            ]}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormPage;
