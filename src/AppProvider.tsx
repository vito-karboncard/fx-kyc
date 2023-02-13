import { type ReactNode } from "react";
import AntdTheme from "./config/Ant Design Theme.json";
import { ConfigProvider } from "antd";
import Icon from "src/components/icon/index";

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
            Pagination: {
              borderRadius: 8,
            },
            Select: {
              controlHeight: 44,
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
