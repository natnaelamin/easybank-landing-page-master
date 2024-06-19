
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

      <div className='article'>
        <h1 className='choose-header'>Latest Articles</h1>
        <div className='article-body'>
          <div className='article-card'>
            <img className='article-img' src="/images/image-currency.jpg" alt="currency" />
            <div className='article-cardbody'>
              <p className='auther'>By Claire Robinson</p>
              <h2 className='article-h2'>Receive money in any currency with no fees</h2>
              <p className='article-text'>The world is getting smaller and we’re becoming more mobile. So why should you be 
              forced to only receive money in a single …</p>
            </div>
          </div>
          <div className='article-card'>
            <img className='article-img' src="/images/image-restaurant.jpg" alt="restaurant" />
            <div className='article-cardbody'>
              <p className='auther'>By Wilson Hutton</p>
              <h2 className='article-h2'>Treat yourself without worrying about money</h2>
              <p className='article-text'>Our simple budgeting feature allows you to separate out your spending and set 
              realistic limits each month. That means you …</p>
            </div>
          </div>
          <div className='article-card'>
            <img className='article-img' src="/images/image-plane.jpg" alt="plane" />
            <div className='article-cardbody'>
              <p className='auther'>By Wilson Hutton</p>
              <h2 className='article-h2'>Take your Easybank card wherever you go</h2>
              <p className='article-text'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
              while you’re abroad. We’ll even show you …</p>
            </div>
          </div>
          <div className='article-card'>
            <img className='article-img' src="/images/image-confetti.jpg" alt="confetti" />
            <div className='article-cardbody'>
              <p className='auther'>By Claire Robinson</p>
              <h2 className='article-h2'>Our invite-only Beta accounts are now live!</h2>
              <p className='article-text'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
              It’s easy to request an invite through the site ...</p>
            </div>
          </div>
        </div>
        
      </div>
      <footer className="footer">
        <div className='footer-icons'>
          <img className='footer-img' src="/images/easybanklogo.png" alt="logo" />
          <div className='icons'>
            <img className='iconimage' src="/images/icon-facebook.svg" alt="fb" />
            <img className='iconimage' src="/images/icon-youtube.svg" alt="yt" />
            <img className='iconimage' src="/images/icon-twitter.svg" alt="tweeter" />
            <img className='iconimage' src="/images/icon-pinterest.svg" alt="pinterest" />
            <img className='iconimage' src="/images/icon-instagram.svg" alt="ig" />
          </div>
        </div>
        <div className='info'>
          <div>
            <h4>About Us</h4>
            <h4>Contact</h4>
            <h4>Blog</h4>
          </div>
          <div>
            <h4>Careers</h4>
            <h4>Support</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
        <div className='footer-license'>
          <div className='stub-btn'>
            <button className='unversal-btn'>Request invite</button>
          </div>
          <h5 className='license'>© Easybank. All Rights Reserved</h5>
        </div>
      </footer>
    </main>
  )
}

export default App
