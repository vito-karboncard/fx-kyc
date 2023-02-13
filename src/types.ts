type Types = {
  drawer: {
    open: boolean;
    onClose?: () => void;
  };
  modal: {
    open: boolean;
    onCancel?: () => void;
  };
};

export default Types;
