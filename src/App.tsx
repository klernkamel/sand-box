
import { useState } from 'react'
import { Button } from './components/button';
import { Card } from './components/card';

function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Card title='Is Loh Form'>
      <form>
        <label>
          Name: 
        </label>
        <input/>
        <label>
          Password:
        </label>
        <input type='password'/>
        <label>
          Is a cool guy
        </label>
        <input type='checkbox'/>
        <Button>
          Submit 
        </Button>
      </form>
    </Card>
  )
}


export default App;