import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [filter, setFilter] = useState('all')
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post(
        `https://letterboxd-be.onrender.com/api/v1/users/messages`,
        messageData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log('message sent', response.data);
      setMessageData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setLoading(false)
      alert('Your Message has been sent')
    } catch (error) {
      console.error('error sending message', error);
      setMessageData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setLoading(false)
      alert('There has been a problem sending the message. Please check all the details properly and send again')
    }
  }

  return (
    <div>
      <main className='home-main' id='home'>
      <ul className='home-main-ul'>
          <a href='#home'>Home</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#resume'>Resume</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </ul>
        <div className='home-details'>
        <h2 className='home-main-title'>Hello I'm</h2>
        <h1 className='home-main-name'>BILAL ABDULLA</h1>
        <p className='resume-text'>And this is my resume</p>
        </div>
      </main>
      <section className='home-section' id='portfolio'>
            <h4 className='featured-title'>Featured</h4>
            <ul className='featured-ul'>
                <li onClick={() => setFilter('all')}
                  className={(filter === 'all') && 'orange'}>All</li>
                <li onClick={() => setFilter('html')}
                  className={(filter === 'html') && 'orange'}>HTML</li>
                <li onClick={() => setFilter('css')}
                  className={(filter === 'css') && 'orange'}>CSS</li>
                <li onClick={() => setFilter('js')}
                  className={(filter === 'js') && 'orange'}>FIREBASE</li>
                <li onClick={() => setFilter('react')}
                  className={(filter === 'react') && 'orange'}>REACT</li>
                <li onClick={() => setFilter('node')}
                  className={(filter === 'node') && 'orange'}>NODE</li>
            </ul>

            {
              (filter === 'all') &&
              <>
              <div className='image-div' >
                <a href='https://quizabdulla.netlify.app/' className='image'>
                <img src='/firebase.png' className='img' />
                <h4 className='img-title'>Quiz Creator Web App</h4>
                <p className='img-text'>REACT.JS with Firebase</p>
                </a>
                <a href='https://recap-fe.netlify.app/' className='image'>
                <img src='/mern.png' className='img' />
                <h4 className='img-title'>RECAP - Full Featured Social Media App</h4>
                <p className='img-text'> REACT.JS, Node.JS & MongoDB </p>
                </a>
                <a href='https://letterboxd-fe.netlify.app/' className='image'>
                <img src='/mern.png' className='img' />
                <h4 className='img-title'>CLUB 49 - Social Media For Movie Lovers</h4>
                <p className='img-text'>REACT.JS, Node.js & MongoDB</p>
                </a>
            </div>

              <div className='image-div' >
                <a href='https://azureabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Azure Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
                </a>
                <a href='https://doordashabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Doordash Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
                </a>
                <a href='https://spotifyabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Spotify Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
                </a>
            </div>

            <div className='image-div'>
                <a href='https://ubereatsabdulla3.netlify.app/' className='image'>
                <img src='/react.jpg' className='img' />
                <h4 className='img-title'>Uber Eats Website</h4>
                <p className='img-text'>REACT.JS Clone</p>
                </a>
                <a href='https://questionreactabdulla.netlify.app/' className='image'>
                <img src='/react.jpg' className='img' />
                <h4 className='img-title'>Quiz App</h4>
                <p className='img-text'>REACT.JS Fully Functional Web app</p>
                </a>
                <a href='https://socialmediaabdulla.netlify.app/' className='image'>
                <img src='/react.jpg' className='img' />
                <h4 className='img-title'>Social Media Frontend App</h4>
                <p className='img-text'>REACT.JS App with external API</p>
                </a>
            </div>
            </>
}
{
          (filter === 'html') &&
              <div className='image-div'>
                <a href='https://azureabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Azure Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
                </a>
                <a href='https://doordashabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Doordash Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
                </a>
                <a href='https://spotifyabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Spotify Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
                </a>
            </div>
}
{
      (filter === 'css') && 
        <div className='image-div'>
          <a href='https://azureabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Azure Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
                </a>
                <a href='https://doordashabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Doordash Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
                </a>
                <a href='https://spotifyabdulla.netlify.app/' className='image'>
                <img src='/html.png' className='img' />
                <h4 className='img-title'>Spotify Website</h4>
                <p className='img-text'>HTML & CSS Clone</p>
              </a>
        </div>
}
{
        (filter === 'js') && 
            <div className='image-div'>
                <a href='https://quizabdulla.netlify.app/' className='image'>
                <img src='/firebase.png' className='img' />
                <h4 className='img-title'>Quiz Creator Web App</h4>
                <p className='img-text'>REACT.JS with Firebase</p>
                </a>
            </div>
}
{
      (filter === 'react') && 
          <div className='image-div'>
                <a href='https://ubereatsabdulla3.netlify.app/' className='image'>
                <img src='/react.jpg' className='img' />
                <h4 className='img-title'>Uber Eats Website</h4>
                <p className='img-text'>REACT.JS Clone</p>
                </a>
                <a href='https://questionreactabdulla.netlify.app/' className='image'>
                <img src='/react.jpg' className='img' />
                <h4 className='img-title'>Quiz App</h4>
                <p className='img-text'>REACT.JS Fully Functional Web app</p>
                </a>
                <a href='https://socialmediaabdulla.netlify.app/' className='image'>
                <img src='/react.jpg' className='img' />
                <h4 className='img-title'>Social Media Frontend App</h4>
                <p className='img-text'>REACT.JS App with external API</p>
                </a>
            </div>
}
{
        (filter === 'node') && 
            <div className='image-div'>
                <a href='https://doordashabdulla.netlify.app/' className='image'>
                <img src='/mern.png' className='img' />
                <h4 className='img-title'>RECAP - Full Featured Social Media App</h4>
                <p className='img-text'> REACT.JS, Node.JS & MongoDB </p>
                </a>
                <a href='https://spotifyabdulla.netlify.app/' className='image'>
                <img src='/mern.png' className='img' />
                <h4 className='img-title'>CLUB 49 - Social Media For Movie Lovers</h4>
                <p className='img-text'>REACT.JS, Node.js & MongoDB</p>
                </a>
            </div>
}
      </section>

      <section className='resu-section' id='resume'>
        <div className='resu-div'>
          <h4>Education</h4>

          <div className='resu-card'> 
              <p className='date'>2017 - 2022</p>
              <p className='subject'>Bachelor of Technology - Computer Science</p>
              <p className='content'>Graduated with 6.63 CGPA</p>
              <p className='uni'>North East Frontier Technical University</p>
          </div>

          <div className='resu-card'> 
              <p className='date'>2015 - 2016</p>
              <p className='subject'>Higher Secondary - Science</p>
              <p className='content'>Graduated with Good Scores</p>
              <p className='uni'>MMVHSS</p>
          </div>

          {/* <div className='resu-card'> 
              <p className='date'>march 2013</p>
              <p className='subject'>Information technology</p>
              <p className='content'>lorem sdsdsdsdsdsdsdsdsddsdsdsdsdsdsd</p>
              <p className='uni'>University</p>
          </div>

          <div className='resu-card'> 
              <p className='date'>march 2013</p>
              <p className='subject'>Information technology</p>
              <p className='content'>lorem sdsdsdsdsdsdsdsdsddsdsdsdsdsdsd</p>
              <p className='uni'>University</p>
          </div> */}
        </div>
        <div className='resu-div'>
        <h4>Experience</h4>

        <div className='resu-card'> 
              <p className='date'>May 2024 - Present</p>
              <p className='subject'>Software development - Training</p>
              <p className='content'>Obtained Prolific knowledge about various programming languages Such as React.js, Node.js, Python, Javascript, HTML, CSS and Database management systems such as MongoDB and ProgreSQL</p>
              <p className='uni'>Vonnue - Wayanad</p>
          </div>

          {/* <div className='resu-card'> 
              <p className='date'>march 2013</p>
              <p className='subject'>Information technology</p>
              <p className='content'>lorem sdsdsdsdsdsdsdsdsddsdsdsdsdsdsd</p>
              <p className='uni'>University</p>
          </div>

          <div className='resu-card'> 
              <p className='date'>march 2013</p>
              <p className='subject'>Information technology</p>
              <p className='content'>lorem sdsdsdsdsdsdsdsdsddsdsdsdsdsdsd</p>
              <p className='uni'>University</p>
          </div>

          <div className='resu-card'> 
              <p className='date'>march 2013</p>
              <p className='subject'>Information technology</p>
              <p className='content'>lorem sdsdsdsdsdsdsdsdsddsdsdsdsdsdsd</p>
              <p className='uni'>University</p>
          </div> */}
        </div>
      </section>

      <section className='about' id='about'>
        <img src='/profile.jpg' className='about-img'/>
        <div className='about-div'>
          <h2 className='about-title'><span>About</span> me</h2>
          <h4 className='about-text-one'>Software developer who is always keen on gaining new knowledge</h4>
          <p className='about-text-two'>Skilled software developer in coding, testing, and deploying applications. Proficient in multiple programming languages such as Javascipt, Python, React.js and Node.js, with strong expertise in front-end and back-end development also with Database management systems such as MongoDB and ProgreSQL. Adept at solving complex problems, implementing scalable solutions, and collaborating in agile environments. Passionate about continuous learning and driving innovation through technology.</p>
          <a href="/bilal-abdulla-resume.pdf" className='about-btn' download='bilal-abdulla-resume.pdf'>Download CV</a>
        </div>
      </section>

      {/* <section className='services'>
        <h2>My Services</h2>
        <div>
          <div>
            <p>Web Design</p>
          </div>
          <div>
            <p>Full Stack Development</p>
          </div>
          <div>
            Game Development
          </div>
        </div>
      </section> */}

    <h2 className='send-msg-title'><span>Get</span> In Touch</h2>
    <main className='end-main'>
      <section className='send-msg'>

        <form className='send-msg-form' onSubmit={handleSubmit}>

            <h4 className='send-msg-text'>Get in Touch</h4>

            <input type='text' 
            className='input' value={messageData.name}
            placeholder='Your Name' 
            onChange={(e) => setMessageData({...messageData, name: e.target.value})}/>

            <input type='text' 
            className='input' value={messageData.email}
            placeholder='Your Email'
            onChange={(e) => setMessageData({...messageData, email: e.target.value})}/>
           
            <input type='text' 
            className='input' value={messageData.phone}
            placeholder='Your Phone' 
            onChange={(e) => setMessageData({...messageData, phone: e.target.value})}/>
            
            <textarea className='textarea'
            value={messageData.message}
            placeholder='Write a Message' 
            onChange={(e) => setMessageData({...messageData, message: e.target.value})}/>

            <button type='submit' className='btn'>SEND MESSAGE</button>
        </form>
      </section>

      <aside className='contact' id='contact'>
            <h4>Contact Details</h4>

            <div className='contact-div'>
                <p className='key'>Email</p>
                <p className='value'>Bilalabdullaav9@gmail.com</p>
            </div>
            
            <div className='contact-div'>
                <p className='key'>Phone</p>
                <p className='value'>7356466733</p>
            </div>
            
            {/* <div className='contact-div'>
                <p className='key'>Fax</p>
                <p className='value'>dsdsd</p>
            </div>
             */}
            <div className='contact-div'>
                <p className='key'>Address</p>
                <p className='value'>Halwa Bazaar</p>
                <p className='value'>Kuttichira</p>
                <p className='value'>Calicut</p>
            </div>
      </aside>

      {loading && <div className='loading'></div>}
      
      </main>

    </div>
  )
}

export default Home
