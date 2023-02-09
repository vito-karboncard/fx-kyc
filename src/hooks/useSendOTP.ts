import { useEffect, useState } from "react";
import { useCountDown } from "ahooks";

type State = "init" | "pending" | "failed" | "waiting";

interface SendOTP {
  sendTo: {
    label?: string;
    value: string;
  };
  sendOtp?: (value: string) => Promise<{ error: string } | void>;
  pause?: boolean;
  onError?: (error: string) => void;
  waitingSeconds?: number;
}

const useSendOTP = ({
  sendOtp,
  sendTo,
  pause,
  onError,
  waitingSeconds = 60,
}: SendOTP) => {
  const [state, setState] = useState<State>("init");
  const [targetDate, setTargetDate] = useState<number>();
  const [countdown] = useCountDown({
    targetDate,
    onEnd() {
      setState("waiting");
    },
  });
  const handleSendOTP = async () => {
    if (sendOtp == null || state === "pending") return;
    const handleError = (error: string) => {
      onError?.(error);
      setState("failed");
    };

    try {
      const res = await sendOtp(sendTo.value);
      if (res?.error) {
        handleError(res.error);
      } else {
        setState("pending");
        setTargetDate(Date.now() + waitingSeconds * 1000);
      }
    } catch (e) {
      handleError((e as Error).message);
    }
  };
  useEffect(() => {
    setState("init");
  }, [sendTo.value, pause]);
  useEffect(() => {
    if (state === "init" && !pause) {
      handleSendOTP();
    }
  }, [state, pause]);
  return {
    countdown: Math.round(countdown / 1000),
    state,
    handleSendOTP,
  };
};

export default useSendOTP;
