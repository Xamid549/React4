import './App.css'

function App() {
  return (
    <div>
    
    <header>

    <img src="./Logo.png" alt="" />

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Pricing</a></li>
        <button className='btn'>Register now</button>
      </ul>
    </nav>

    </header>

 <main>

      <section className='container'>
        <div className="text-box">
          <h1>Lessons and insights <span>from 8 years</span></h1>
          <p>Where to grow your business as a photographer: site or social media?</p>
          <button className='btn2'>
             Register
          </button>
        </div>
        <img src="./Illustration.png" alt="" />
      </section>
    </main>


    </div>
  )
}

export default App