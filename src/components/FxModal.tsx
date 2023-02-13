import type { ButtonProps, ModalProps } from "antd";
import Modal from "antd/es/modal/Modal";
import { Button, Typography } from "antd";
import Icon from "src/components/icon/index";
import type { ButtonHTMLAttributes } from "react";
import { useMemo } from "react";

function FxModal({
  title,
  closable,
  footer,
  cancelText,
  cancelButtonProps,
  onCancel,
  okType,
  okText,
  okButtonProps,
  onOk,
  confirmLoading,
  ...props
}: Omit<ModalProps, "closeIcon">) {
  const titleNode =
    typeof title === "string" ? (
      <Typography.Title level={3}>{title}</Typography.Title>
    ) : (
      title
    );
  const footerNode = useMemo(() => {
    if (footer) {
      return footer;
    } else if (typeof footer === "boolean" && !footer) {
      return null;
    }
    return (
      <DefaultFooter
        cancelText={cancelText}
        onOk={onOk}
        onCancel={onCancel}
        okText={okText}
        okType={okType}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
        confirmLoading={confirmLoading}
      />
    );
  }, [
    onCancel,
    footer,
    cancelText,
    cancelButtonProps,
    okText,
    okButtonProps,
    onOk,
    okType,
    confirmLoading,
  ]);
  return (
    <Modal
      width={380}
      title={
        <div className="flex items-center w-full justify-between mb-6">
          {titleNode}
          {!closable && <CloseButton onClick={onCancel} />}
        </div>
      }
      closable={false}
      footer={footerNode}
      onOk={onOk}
      onCancel={onCancel}
      {...props}
    />
  );
}

const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={"outline-none bg-transparent border-none cursor-pointer"}
    >
      <Icon name={"close"} size={18} />
    </button>
  );
};

const DefaultFooter = ({
  cancelText,
  onCancel,
  cancelButtonProps,
  okType,
  okText,
  okButtonProps,
  onOk,
  confirmLoading,
}: Pick<
  ModalProps,
  | "cancelButtonProps"
  | "onCancel"
  | "cancelText"
  | "okText"
  | "okButtonProps"
  | "okType"
  | "onOk"
  | "confirmLoading"
>) => {
  return (
    <div className={"grid grid-cols-2 gap-6"}>
      <div>
        <Button
          onClick={onCancel as any}
          className={"font-bold"}
          block
          {...cancelButtonProps}
        >
          {cancelText ?? "取消"}
        </Button>
      </div>

      <div>
        <Button
          type={(okType as ButtonProps["type"]) ?? "primary"}
          onClick={onOk as any}
          className={"font-bold"}
          loading={confirmLoading}
          block
          {...okButtonProps}
        >
          {okText ?? "确认"}
        </Button>
      </div>
    </div>
  );
};

FxModal.DeFaultFooter = DefaultFooter;
export default FxModal;
