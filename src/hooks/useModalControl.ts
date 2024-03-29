import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  return {
    open,
    onCancel: () => {
      setOpen(false);
    },
    onOpen: () => {
      setOpen(true);
    },
  };
};
