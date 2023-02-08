import {Button} from 'antd'

function App() {

  return (
    <div className="App">
      <p>
        <Button size={'small'}>Antd button</Button>
        <Button size={'middle'} type={'primary'} ghost>Antd button</Button>
        <Button size={'large'}>Antd button</Button>
      </p>
    </div>
  )
}

export default App
