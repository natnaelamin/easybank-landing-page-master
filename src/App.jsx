
import './App.css'

function App() {

  return (
    <main>
      <nav className='nav'>
        <img src="/images/logo.svg" alt="logo" />
        <div className='links'>
          <button className='link-btn'>Home</button>
          <button className='link-btn'>About</button>
          <button className='link-btn'>Contact</button>
          <button className='link-btn'>Blog</button>
          <button className='link-btn'>Careers</button>
        </div>
        <button className='unversal-btn'>Request invite</button>
      </nav>
      <div className='header-left'>
        <div className='intro'>
          <h1 className='intro-header'>Next generation digital banking</h1>
          <p className='intro-text'>Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.</p>
          <button className='unversal-btn'>Request invite</button>
        </div>
        <div className='pic'>
          <img className='main-pic' src="/images/image-mockups.png" alt="mockup" />
        </div>
      </div>

      <div className='choose'>
        <div className='choose-top'>
          <h1 className='choose-header'>Why choose Easybank?</h1>
          <p className='choose-text'>We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.</p>
        </div>
        <div className='benefits'>
          <div className='benefits-card'>
            <img src="/images/icon-online.svg" alt="online" />
            <h1 className='benefits-header'>Online Banking</h1>
            <p className='benefits-text'>Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.</p>
          </div>
          <div className='benefits-card'>
            <img src="/images/icon-budgeting.svg" alt="budgeting" />
            <h1 className='benefits-header'>Simple Budgeting</h1>
            <p className='benefits-text'>See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.</p>
          </div>
          <div className='benefits-card'>
            <img src="/images/icon-onboarding.svg" alt="onboarding" />
            <h1 className='benefits-header'>Fast Onboarding</h1>
            <p className='benefits-text'>We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.</p>
          </div>
          <div className='benefits-card'>
            <img src="/images/icon-api.svg" alt="api" />
            <h1 className='benefits-header'>Open API</h1>
            <p className='benefits-text'>Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
