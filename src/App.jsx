import './App.css'
import Nav from './components/Nav'
import CardPost from './components/CardPost'
import postData from './components/Post'

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className='container-post-home'>
          <h1 className='title-blog'>Maternity Blog</h1>
          <div className='container-card-post-home'>
            {postData.map((post) => (
              <CardPost key={post.id} post={post} />
            ))}
          </div>

        </section>
      </main>

    </>
  )
}

export default App
