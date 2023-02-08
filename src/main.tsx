import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ConfigProvider} from 'antd'
import AntdTheme from './config/Ant Design Theme.json'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={AntdTheme}>
      <ConfigProvider theme={{
        inherit: true,
        components: {
          Button: {
            paddingContentHorizontal: 24,
            controlHeight: 40,
            paddingContentHorizontalLG: 24,
            controlHeightLG: 44,
            paddingContentHorizontalSM: 24,
            controlHeightSM: 24,
          }
        }
      }}>
        <App />
      </ConfigProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
