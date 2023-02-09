import { type ReactNode } from "react";
import AntdTheme from "./config/Ant Design Theme.json";
import { ConfigProvider } from "antd";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={AntdTheme}>
      <ConfigProvider
        theme={{
          inherit: true,
          components: {
            Button: {
              paddingContentHorizontal: 24,
              controlHeight: 40,
              paddingContentHorizontalLG: 24,
              controlHeightLG: 44,
              paddingContentHorizontalSM: 24,
              controlHeightSM: 24,
            },
            Input: {
              controlHeight: 44,
              colorTextPlaceholder: AntdTheme.token.colorTextSecondary,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ConfigProvider>
  );
}

export default AppProvider;
