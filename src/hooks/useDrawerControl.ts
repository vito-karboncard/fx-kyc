import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  return {
    open,
    onClose: () => {
      setOpen(false);
    },
    onOpen: () => {
      setOpen(true);
    },
  };
};
