import './App.css'
import StatusUpdates from './components/statusUpdates'
import Chat from './components/Chat'
import PersonalFeed from './components/PersonalFeed'

function App() {
  return (
    <div className='flex flex-row h-screen'>
      <div className='w-1/3'>
        <StatusUpdates />
      </div>
      <div className='w-1/3'>
        <PersonalFeed />
      </div>
      <div className='w-1/3'>
        <Chat />
      </div>
    </div>
  )
}

export default App
