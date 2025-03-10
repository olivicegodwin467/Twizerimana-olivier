import React, {useRef, useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import data from '../data/progress.json';
import skills from '../data/expertise.json';
import work from '../data/services.json';
import review from '../data/testimonials.json';
import projects from '../data/portfolio.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VanillaTilt from "vanilla-tilt";
import cv from '../documents/Updated-CV.pdf';

import 'swiper/css';
function Home() {
  // tilted images
  useEffect(() => {
    const devImages = document.querySelectorAll(".devImage");

    devImages.forEach((devImage) => {
      devImage.setAttribute("data-tilt", "");

      VanillaTilt.init(devImage, {
        max: 10,
        speed: 5000,
      });
    });

    // Clean up VanillaTilt on component unmount
    return () => {
      devImages.forEach((devImage) => {
        // Check if element has a VanillaTilt instance before destroying
        if (devImage.vanillaTilt) {
          devImage.vanillaTilt.destroy();
        }
      });
    };
  }, []);
  const progresses = data.progress;
  const expertize = skills.expertise;
  const services = work.services;
  const testimonials = review.testimonials;
  const portfolio = projects.portfolio;


  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNames = (event) => {
    setNames(event.target.value); 
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleSubject = (event) => {
    setSubject(event.target.value);
  }
  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const send = (e) => {
    e.preventDefault();
    if(names.trim()==='' && email.trim()==='' && subject.trim()==='' && message.trim()===''){
      return toast("Please fill out all fields", { type: "warning" });
    }else if(names.trim()===''){
      return toast("Name is required", { type: "warning" });
    }else if(email.trim()===''){
      return toast("Email is required", { type: "warning" });
    }else if(subject.trim()===''){
      return toast("Subject is required", { type: "warning" });
    }else if(message.trim()===''){
      return toast("Message is required", { type: "warning" });
    }else{
      // return toast("Free to continue", { type: "success" });
      setLoading(true);
      emailjs.sendForm('service_47c8oze', 'template_w2n2yol', form.current, 'IOhB6Nxg-_2KrNZWL')
      .then((result) => {
        toast.success("Message sent!");
        setNames("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, (error) => {
        toast.error("Message not sent, Try again");
        setNames("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .finally(() => {
        // After the booking process is complete (success or error), revert loading state
        setLoading(false);
      });
    }
  }
  return (
    <main>
      <section id="hero">
        <div className="contenti">
          <div className="intro">
            <div className="texts">
              <h1 data-aos="fade-up" data-aos-duration="1000">TWIZERIMANA Olivier</h1>
              <div className="desc">
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"><span>I am a </span><span className='span'><Typewriter options={{ autoStart: true,loop: true,delay: 20,deleteSpeed: 20,strings: ["Full Stack Developer", "UI/UX Designer", "Web developer", "IT Specialist", "Collaborator & Contributor", "Freelancer"]}} /></span></h3>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">I am a software engineer situated in Rwanda. Over the span of my short professional career, I have acquired considerable expertise and made substantial strides in enhancing my skill set.</p>
              </div>
                <a  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" href="#contact" className="btn-get-started">Say hello</a>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000"  className="image">
              <img className='' src={require("../images/imageOne.jpg")} alt="Developer's profile" />
            </div>
          </div>
          <div className="social">
            <a target='_blank' rel='noreferrer' href="#"><i class="fa-brands fa-twitter"></i></a>
            <a target='_blank' rel='noreferrer' href="#"><i class="fa-brands fa-instagram"></i></a>
            <a target='_blank' rel='noreferrer' href="#"><i class="fa-brands fa-github"></i></a>
            <a target='_blank' rel='noreferrer' href="#"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="scroll">
            <a href="#about"><i class="fa-solid fa-arrow-down"></i></a>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="page">
          <h3>01</h3>
          <div className="line"></div>
        </div>
        <div className="contenti">
          <div className="image">
            <img className='devImage' src={require("../images/imageTwo.jpg")} alt="" />
          </div>
          <div className="texts">
            <div className="title">
              <p>Discover</p>
              <h2 className='animate__backInRight'>About Me</h2>
              <div className="line"></div>
            </div>
            <div className="info">
              <p>I’m a passionate IT specialist with experience in developing web (Full Stack) and desktop applications, focusing on solving real-world problems and making a positive impact. My projects showcase expertise in various programming languages and tools, with a strong emphasis on user-centric design and scalability. I thrive on learning, sharing knowledge, and creating innovative solutions that help communities.</p>
              <div className="cards">
                <div className="card">
                  <i  class="fa-solid fa-gear"></i>
                  <h2 >Experience</h2>
                  <p >3+ years</p>
                </div>
                <div className="card">
                  <i  class="fa-solid fa-rectangle-list"></i>
                  <h2 >Completed</h2>
                  <p >10+ projects</p>
                </div>
                <div className="card">
                  <i  class="fa-solid fa-headset"></i>
                  <h2 >Support</h2>
                  <p >Online 24/7</p>
                </div>
                <div className="card">
                  <i  class="fa-brands fa-github"></i>
                  <h2 >Github</h2>
                  <p >650+ contributions</p>
                </div>
              </div>
              <a href={cv} download={true}><button>Download CV</button></a>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="page">
          <h3>02</h3>
          <div className="line"></div>
        </div>
        <div className="contenti">
          <div className="title">
            <p>Knowledge</p>
            <h2>My Education</h2>
            <div className="line"></div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="shape"></div>
              <p className="time">2015-2017</p>
              <p className="school">High school</p>
              <p className="desc">A2 in Computer Electronics at College de Bethel / A.P.R.U.D.E, This school is located in Sourthern province, Ruhango district.</p>
            </div>
            <div className="card">
              <div className="shape"></div>
              <p className="time">2019-2021</p>
              <p className="school">2 Years of University</p>
              <p className="desc">University of Lay Adventist Kigali / UNILAK. In faculty of Computing and Information Sciences / IT - Networking department.</p>
            </div>
            <div className="card">
              <div className="shape"></div>
              <p className="time">2021-2023</p>
              <p className="school">Software Engineering</p>
              <p className="desc">At Harvard university through its online program called EdX.</p>
            </div>
          </div>
          <div className="title">
            <p>Export</p>
            <h2>My Skills</h2>
            <div className="line"></div>
          </div>
          <div className="progresses">
            {progresses.map(progress => (
            <div className="progress" key={progress.id}>
              <div className="text">
                <p>{progress.name}</p>
                <p>{progress.width}%</p>
              </div>
              <div className="max">
                <div className="min" style={{width: `${progress.width}%`}}></div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      <section id="resume">
        <div className="page">
          <h3>03</h3>
          <div className="line"></div>
        </div>
        <div className="contenti">
          <div className="title">
            <p>Resume</p>
            <h2>My Expertise</h2>
            <div className="line"></div>
          </div>
          <div className="info">
            <div className="intro">
              <p>I aim to take any the roles of a software development, UI/UX designer, and IT Support. I'm enthusiastic about exploring fresh opportunities and continually expanding my skill set. You can access my resume <a href={cv}>here</a> for further details.</p>
            </div>
            <div className="expertize">
              {expertize.map(expertise => (
                <div className="expertise" key={expertise.id}>
                  <p className="time">{expertise.date}</p>
                  <div className="lines">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="desc">
                    <h3 className="company">{expertise.company}</h3>
                    <p className="name">{expertise.name}</p>
                    <ul>
                      <li><i class="fa-solid fa-arrow-right"></i> {expertise.one}</li>
                      <li><i class="fa-solid fa-arrow-right"></i> {expertise.two}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="page">
          <h3>04</h3>
          <div className="line"></div>
        </div>
        <div className="contenti">
          <div className="title">
            <p>What I do</p>
            <h2>My Services</h2>
            <div className="line"></div>
          </div>
          <div className="cards">
            {services.map(services => (
              <div className="card" key={services.id}>
                <div className="icon">
                  <div className="circle">
                    <i className={services.icon}></i>
                  </div>
                </div>
                <div className="desc">
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="page">
          <h3>05</h3>
          <div className="line"></div>
        </div>
        <div className="contenti">
          <div className="title">
            <p>Some of my work</p>
            <h2>My Projects</h2>
            <div className="line"></div>
          </div>
          <div className="cards">
            {portfolio.map(portfolio => (
              <div className="card" key={portfolio.id}>
                <img src={require(`../images/portfolio/${portfolio.image}`)} alt={portfolio.image} />
                <div className="li">
                  <a href={portfolio.link} target='_blank' rel="noreferrer"><i class="fa-solid fa-link"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="page">
          <h3>06</h3>
          <div className="line"></div>
        </div>
        <div className="contenti">
          <div className="title">
            <p>Reviews</p>
            <h2>Testimonials</h2>
            <div className="line"></div>
          </div>
          <Swiper className='cards' spaceBetween={10} slidesPerView={1} loop={true} breakpoints={{ 768:{ slidesPerView: 2, spaceBetween: 20, }, 1024:{ slidesPerView: 3, spaceBetween: 30, }, }} autoplay={{ delay: 5000, disableOnInteraction: false, }} pagination={{ clickable: true }} scrollbar={{ draggable: true }} modules={[Autoplay]} >
            {testimonials.map(testimonials => (
              <SwiperSlide className='card' key={testimonials.id}>
                <img src={require(`../images/testimonials/${testimonials.image}`)} alt="" />
                <h3>{testimonials.names}</h3>
                <h4>{testimonials.title}</h4>
                <p>{testimonials.testimonial}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section id="contact">
        <div className="page">
          <h3>07</h3>
          <div className="line"></div>
        </div>
        <div className="contenti">
          <div className="text">
            <div className="title">
              <p>Get in touch</p>
              <h2>Contact me</h2>
              <div className="line"></div>
            </div>
            <p>You can connect with me via several social media channels, reach out by phone, or send an email to get in touch with me</p>
            <p className='address'>KN 102 st, Kigali, Nyamirambo</p>
            <p className='address'>orivicegodwin@gmail.com</p>
            <p className='address'>+(250) - 785 - 273 - 109</p>
          </div>
          <div className="form">
            <form ref={form} autoComplete='off'>
              <input type="text" value={names} onChange={handleNames} name="names" placeholder='Your full names' />
              <input type="text" value={email} onChange={handleEmail} name="email" placeholder='Your email' />
              <input type="text" value={subject} onChange={handleSubject} name="subject" placeholder='Subject' />
              <textarea name="message" value={message} onChange={handleMessage} placeholder='Your message'></textarea>
              <button type="button" onClick={send} disabled={loading}>{loading? 'Loading...' : 'Send message'}</button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </main>
  )
}

export default Home
