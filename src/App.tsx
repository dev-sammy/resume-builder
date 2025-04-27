import './App.css'
import Resume from './components/Resume'
import Steps from './components/Steps'
import { ResumeProvider } from './context/resume-context'

function App() {

  return (
    <ResumeProvider>
    <div className='container mx-auto mt-20 flex flex-col place-items-center'>
      <header className='text-center'>
      <h1 className='text-3xl font-semibold'>Resume Builder</h1>
      </header>
      <div className='w-5xl rounded-md shadow-md border border-gray-200 my-15 p-8 flex gap-8'>
        <Steps/>
        <Resume/>
      </div>
    </div>
    </ResumeProvider>
  )
}

export default App
