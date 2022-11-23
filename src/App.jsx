import { Header } from './components/Header'
import { Post } from './Post'

import './styles.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post 
      author='Caio Fernando' 
      content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, eum, accusamus architecto officiis soluta voluptatum itaque tempora, quod nemo beatae inventore tempore quisquam velit omnis maxime saepe ab similique dignissimos!'
      />
      <Post
        author="Rodrigo Fernandes"
        content='Um novo post muito legal'

      />
        
    </div>
  )
}


