import React from 'react'
import './style.css'
import logo from './images/logo.webp'
import about_img from './images/about-img.webp'

const Home = () => {
    const scrollToTop = ()=> {
      window.scroll({top: 0, behavior: "smooth"});
    }

    // Responsive Navbar

    const [isActive, setIsActive] = React.useState(false);

    const toggleNavbar = () => {
      setIsActive(!isActive);
    };

    React.useEffect(() => {
        const sectionHero = document.querySelector(".section-hero");
    
        const observerCallback = (entries) => {
          const ent = entries[0];
          !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
        };
    
        const options = {
          root: null,
          threshold: 0,
          rootMargin: "-100px",
        };
    
        const observer = new IntersectionObserver(observerCallback, options);
    
        observer.observe(sectionHero);
    
        // Cleanup on component unmount
        return () => {
          observer.disconnect();
        };
      }, []);

      React.useEffect(() => {
        const workdata = document.querySelector('.section-work');
    
        const workObserverCallback = (entries) => {
          const [entry] = entries;
          if (!entry.isIntersecting) return;
    
          const countNum = document.querySelectorAll('.counter-numbers');
          const speed = 150;
          countNum.forEach((curEle) => {
            const updateNum = () => {
              const target = parseInt(curEle.dataset.number);
              const initial = parseInt(curEle.innerText);
              const increment = Math.trunc(target / speed);
              if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum, 5);
              } else {
                curEle.innerText = `${target}+`;
              }
            };
            updateNum();
          });
        };
    
        const options = {
          root: null,
          threshold: 0,
        };
    
        const workObserve = new IntersectionObserver(workObserverCallback, options);
        workObserve.observe(workdata);

        return () => {
          workObserve.disconnect();
        };
      }, []);

    return (
    <>

        {/* Header Section */}

      <header className={`header ${isActive ? 'active' : ''}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Exchange Go</h2>
        </div>
          <nav className="navbar">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
          </nav>
          <div class="mobile-navbar-btn" onClick={toggleNavbar}>
              <i name="ham" class={`fa-solid fa-bars mobile-nav-icon ${isActive ? 'hidden' : ''}`}></i>
              <i name="cross" class={`fa-solid fa-xmark mobile-nav-icon ${isActive ? '' : 'hidden'}`}></i>
          </div>
      </header>

        {/* Hero Section */}

        <section className="section section-hero">
            <div className="overlay"></div>
            <div className="container section-hero-data">
                <h1>Welcome to ExchangeGo</h1>
                <p className='hero-para'>"Exchange Go simplifies tech upgrades with seamless device swapping options.."</p>
                <div>
                    <a href='#contact' className='btn'>Explore More</a>
                </div>
            </div>
        </section>

        {/* About Section */}

        <section className="section section-about" id='about'>
          <div className="container">
            <h2 className="common-heading">About Us&nbsp; <i class="fa-solid fa-user-tie"></i></h2>
            <p className='about-para'>Exchange Go is a platform facilitating seamless phone and laptop exchanges. It ensures secure transactions, competitive pricing, and user-friendly experiences.</p>
          </div>
          <div className="container grid grid-two-columns">
            <div className="section-about-data">
              <p className="strong-para">About Company</p>
              <p>Exchange Go: Your go-to platform for effortless phone and laptop exchanges. Experience secure transactions, competitive rates, and user-friendly services seamlessly.</p>
              <p className='strong-para'>Employee</p>
              <p>5k+ Employee</p>
              <p className="strong-para">Headquater</p>
              <p>Mumbai, India</p>
              <p className="strong-para">Founded</p>
              <p>2004</p>
            </div>
            <div className="section-about-img">
              <img src={about_img} alt="about" loading='lazy' />
            </div>
          </div>
        </section>

        {/* Service Section */}

        <section className="section section-service" id='service'>
            <div className="container">
                <h2 className="common-heading">Our Services&nbsp; <i class="fa-brands fa-servicestack"></i></h2>
                <p className='service-para'>Exchange Go is your go-to platform for seamless phone and laptop exchanges, offering convenience, trust, and value. Upgrade effortlessly with us!</p>
            </div>
            <div className="container grid grid-three-columns">
                <div className="service-box">
                    <i class="fa-solid fa-users"></i>
                    <h3>Customer Service</h3>
                    <p>Exceptional customer service is our commitment, ensuring satisfaction, trust, and efficiency.</p>
                </div>
                <div className="service-box">
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    <h3>Fast Exchange</h3>
                    <p>Our fast exchange service guarantees swift, seamless transactions for ultimate convenience.</p>
                </div>
                <div className="service-box">
                    <i class="fa-solid fa-display"></i>
                    <h3>Device Upgrade Program</h3>
                    <p>Seamless transitions to the latest devices with our efficient upgrade program.</p>
                </div>
                <div className="service-box">
                    <i class="fa-solid fa-earth-asia"></i>
                    <h3>Eco Friendly</h3>
                    <p>Promoting sustainability, our eco-friendly service prioritizes a greener, cleaner future.</p>
                </div>
                <div className="service-box">
                    <i class="fa-solid fa-medal"></i>
                    <h3>Warranty Support</h3>
                    <p>Reliable warranty support ensures peace of mind for device longevity.</p>
                </div>
                <div className="service-box">
                    <i class="fa-solid fa-suitcase"></i>
                    <h3>Trade-In Service</h3>
                    <p>Trade-in service offers value, upgrading your device seamlessly with convenience.</p>
                </div>
            </div>
        </section>

        {/* <!-- Animated Counter Section --> */}

        <section className="section section-work">
            <div className="container grid grid-three-columns">
                <div>
                    <h2 className="counter-numbers" data-number="1500+">0+</h2>
                    <p className="work-para">Exchange Product</p>
                </div>
                <div>
                    <h2 className="counter-numbers" data-number="3000+">0+</h2>
                    <p className="work-para">Happy Clients</p>
                </div>
                <div>
                    <h2 className="counter-numbers" data-number="6000+">0+</h2>
                    <p className="work-para">Experience</p>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        
        <section className="section section-contact" id='contact'>
          <div className="container">
            <h2 className="common-heading">Contact Us&nbsp; <i class="fa-solid fa-phone-volume"></i></h2>
          </div>

          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.58771735367!2d77.93473398378957!3d30.3255508049571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1707394666507!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <div className="section-contact-main contact-container">
            <form action="https://formspree.io/f/xdoqevwj" method='POST'>
              <div className="grid grid-two-columns">
                <input class="input-here" id="name" name="Name" type="text" placeholder="Name" required autocomplete="off" />
                <input class="input-here" id="email" name="Email" type="email" placeholder="Email" required autocomplete="off" />
              </div>
              <div>
                <input class="input-here" id="subject" name="subject" type="text" placeholder="Subject" required autocomplete="off" />
              </div>
              <div>
                <select name="type" id="type">
                  <option value="phone">Phone 📱</option>
                  <option value="laptop">Laptop 💻</option>
                </select>
              </div>
              <div>
                <textarea class="input-here" id="message" name="message" cols="30" rows="10" placeholder="Message" required autocomplete="off"></textarea>
              </div>
              <div>
                <input id="submit" name="submit" type="submit" class="btn" value="Send Message" />
              </div>
            </form>
          </div>
        </section>

        {/* <!-- Footer Section --> */}

        <footer class="section section-footer">
            <div class="container grid grid-three-columns">
                <div class="f-about">
                    <h3>About</h3>
                    <p>Exchange Go simplifies tech upgrades with seamless device swapping options. Unlock value by easily exchanging phones and laptops on Exchange Go.</p>
                </div>
                <div class="f-links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#"><i class="fa-solid fa-arrow-right"></i>&nbsp;Home</a></li>
                        <li><a href="#about"><i class="fa-solid fa-arrow-right"></i>&nbsp;About</a></li>
                        <li><a href="#service"><i class="fa-solid fa-arrow-right"></i>&nbsp;Service</a></li>
                        <li><a href="#contact"><i class="fa-solid fa-arrow-right"></i>&nbsp;Contact</a></li>
                    </ul>
                </div>
                <div class="f-address">
                    <h3>Address</h3>
                    <address>
                        <div><p><i class="fa-solid fa-location-dot"></i>&nbsp; Dehradun, Uttarakhand, India</p></div>
                        <div><p><i class="fa-solid fa-phone"></i>&nbsp; <a href="tel:+919149349278">+91 9149349278</a></p></div>
                        <div><p><i class="fa-regular fa-envelope"></i>&nbsp; &nbsp;
                        <a href="mailto:3469harshsharma@gmail.com">3469harshsharma@gmail.com</a></p></div>
                    </address>

                </div>
            </div>
            <div class="container">
                <div class="f-credits">
                    <p>Copyright <i class="fa-regular fa-copyright"></i> 2024 All right reserved || Exchange Go ❤️</p>
                </div>
            </div>
        </footer>

        <div class="scroll-top-style">
            <i class="fa-solid fa-arrow-up scroll-top" onClick={scrollToTop}></i>
        </div>
    </>
    )
}

export default Home