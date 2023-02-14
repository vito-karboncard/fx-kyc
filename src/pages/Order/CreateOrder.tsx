import type { ButtonProps } from "antd";
import { Button, DatePicker, Form, Input } from "antd";
import type Types from "src/types";
import Icon from "src/components/icon/index";
import useModalControl from "src/hooks/useModalControl";
import FxModal from "src/components/FxModal";
import { OrderType } from "src/pages/Order/types";
import FxSelect from "src/components/FxSelect";

function CreateOrderModal({ open, onCancel }: Types["modal"]) {
  const [form] = Form.useForm();
  const orderType = Form.useWatch("type", form);
  console.log("-> orderType", orderType);
  return (
    <FxModal title="新建订单" open={open} onCancel={onCancel} footer={false}>
      <Form
        layout={"vertical"}
        form={form}
        initialValues={{
          type: OrderType.companyRegister,
        }}
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Form.Item name={"type"} label={"订单类型"}>
          <FxSelect
            options={[
              {
                label: <span className="font-bold">公司注册</span>,
                value: OrderType.companyRegister,
              },
              {
                label: <span className="font-bold">公司年审</span>,
                value: OrderType.annualReview,
              },
              {
                label: <span className="font-bold">银行账户</span>,
                value: OrderType.bankAccount,
              },
            ]}
          />
        </Form.Item>
        <CompanyRegisterFormItems
          hidden={orderType !== OrderType.companyRegister}
        />
        <AnnualReviewFormItems hidden={orderType !== OrderType.annualReview} />
        <BankAccountFormItems hidden={orderType !== OrderType.bankAccount} />
        <Form.Item label={"备注"} name={"remarks"}>
          <Input.TextArea
            placeholder={"请输入"}
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </Form.Item>
        <FxModal.DeFaultFooter
          okText={"创建"}
          okButtonProps={{ htmlType: "submit" }}
        />
      </Form>
    </FxModal>
  );
}

const CompanyRegisterFormItems = ({ hidden }: { hidden?: boolean }) => {
  return (
    <>
      <Form.Item label={"客户名"} name={"customerName"} hidden={hidden}>
        <Input />
      </Form.Item>
      <Form.Item label={"公司注册地"} hidden={hidden}>
        <div className={"grid grid-cols-1 gap-3"}>
          <Form.Item name={"country"} noStyle>
            <Input placeholder={"国家"} />
          </Form.Item>
          <Form.Item name={"address"} noStyle>
            <Input placeholder={"州/省/地区"} />
          </Form.Item>
        </div>
      </Form.Item>
    </>
  );
};
const AnnualReviewFormItems = ({ hidden }: { hidden?: boolean }) => {
  return (
    <Form.Item
      hidden={hidden}
      label={"年审到期时间"}
      name={"annualVerificationExpiredDt"}
    >
      <DatePicker />
    </Form.Item>
  );
};

const BankAccountFormItems = ({ hidden }: { hidden?: boolean }) => {
  return (
    <Form.Item label={"账户要求"} name={"bankAccountRemarks"} hidden={hidden}>
      <Input />
    </Form.Item>
  );
};

const CreateOrder = ({ primaryButton }: { primaryButton?: boolean }) => {
  const modal = useModalControl();
  return (
    <>
      {primaryButton ? (
        <Button
          type={"primary"}
          onClick={modal.onOpen}
          icon={<Icon name={"cross"} className={"mr-2"} />}
        >
          新建订单
        </Button>
      ) : (
        <CreateButton onClick={modal.onOpen} />
      )}
      <CreateOrderModal {...modal} />
    </>
  );
};

export const CreateButton = ({ onClick }: Pick<ButtonProps, "onClick">) => {
  return (
    <Button
      icon={<Icon name={"cross"} className={"mr-1"} size={12} />}
      style={{ paddingLeft: 16, paddingRight: 16 }}
      onClick={onClick}
    >
      新增
    </Button>
  );
};

export default CreateOrder;
