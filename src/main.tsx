import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { playlistData } from './playlist'
import List from './components/List'
import SidebarRight from './components/Sidebar'

import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='main-content'>
      {playlistData.map(item => {
        return (
          <List playlist={item}/>
        )
      })}
    </div>
    <SidebarRight />
  </StrictMode>,
)
