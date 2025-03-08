import React from 'react'
import ExpPeriod from './ExpPeriod'

export const TextHI = () => (
  <span>Hi, I'm Erin, a Web Designer from Taiwan.</span>
)

export const TextDes = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    <div>
      I have over <strong>10</strong> years of experience in the digital field. <br /><br/>I started my career as a Front-End Developer, where my coding knowledge has given me the ability to plan, consider user issues, and focus on the bottom line before starting any work. Currently, I work in the Digital Financial Department of Fubon Securities, where I am responsible for Figma UI design, user experience optimization, and front-end development.
    </div>

    <div style={{marginTop: 40}}>
      <a
        className={`btn`}
        href={`https://drive.google.com/file/d/1Xpb_j2u9FqUZUNSQ46EQA1LTzwSmfjLr/view?usp=drive_link`}
        target="_blank"
        style={{
          color: '#1484a1',
          borderColor: '#1484a1',
        }}
      >
        View CV
      </a>
    </div>
  </div>
)

export const ExpMygym = () => (
  <div>
    <h3>Fubon Securities Co. Ltd.</h3>
    <h4>Designer/Front-End Developer/PM</h4>

    <ul>
      <li>
        Led the optimization of the securities online account opening system by integrating data sources to track user behavior and identify pain points. Analyzed competitors' online account opening processes to identify areas of improvement and benchmark best practices.
      </li>

      <li>
        Transformed existing in-branch services to online services, primarily responsible for front-end development, Figma UI design, and user experience optimization.
      </li>

      <li>
        Planned and executed digital customer acquisition marketing strategies, including LINE Bank partnership and advertising operations, responsible for performance tracking and optimization.
      </li>

    </ul>
  </div>
)

export const ExpFFN = () => (
  <div>
    <h3>FriendFinder Networks Inc. - Taiwan branch</h3>
    <h4>Front-End Developer</h4>

    <ul>
      <li>
        Developed 3-5 projects monthly, supported Front-End development.
        Collaborated with the Back-End team from Taiwan and USA to ensure
        synchronized deployment.
      </li>
      <li>
        Responsible for maintaining and creating all aspects of the Front-End
        code of various FriendFinder Networks sites.
      </li>
      <li>
        Daily duties focused on templates' code optimization, bugs fixing,
        ensuring websites are highly functional to create positive user
        experience.
      </li>
      <li>
        Performed quality assurance and user testing to ensure that the websites
        were working across all browsers and devices.
      </li>
    </ul>
  </div>
)

export const Exp5213 = () => (
  <div>
    <h3>5213 I Love Clothes Inc. </h3>
    <h4>Designer</h4>
    <ul>
      <li>
        Conceptualized 2-3 promotional campaigns weekly, executed, designed
        website layout and ads.
      </li>
      <li>
        Operated e-commerce platform system, programmed HTML and CSS to enhance
        user experience.
      </li>
      <li>
        Photographic output, internet distribution, on-site model / product
        photo-shooting and styling.
      </li>
    </ul>
  </div>
)

export const ExpUniversity = () => (
  <div>
    <h3>University of Taipei</h3>
    <h4>Major in Computer Science</h4>
  </div>
)

export const TextPortfolio = () => (
  <span>
    I'm passionate about user experience and the visual design of web and app interfaces, <br/>and hope to have the opportunity to create great user experiences with an amazing team.
  </span>
)

export const TextTouch = () => (
  <span>
    <p>Thanks for your visit.</p>
    <p>Feel free to get in touch with me anytime.</p>
  </span>
)

export const FromMyGym = (props: {}) => (
  <ExpPeriod from="Dec. 2018" to="present" {...props} />
)

export const FromFFN = (props: {}) => (
  <ExpPeriod from="Sep. 2013" to="May. 2015" {...props} />
)

export const From5213 = () => <ExpPeriod from="Jul. 2010" to="Aug. 2013" />

export const FromUniversity = () => (
  <ExpPeriod from="Sep. 2006" to="Jul. 2010" />
)

export const Mail = () => <small>eyao.tw@gmail.com</small>

export const BtnTouch = () => (
  <div className="btn">
    <a href="mailto:eyao.tw@gmail.com">
      <svg
        fill="#fff"
        style={{ width: 22 }}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1696"
      >
        <path
          d="M897.152 894.656 126.848 894.656c-44.8 0-81.088-35.84-81.088-80.064L45.76 254.144c0-44.224 36.288-80.064 81.088-80.064l770.368 0c44.8 0 81.088 35.84 81.088 80.064l0 560.448C978.304 858.816 941.952 894.656 897.152 894.656zM937.728 254.144c0-22.08-18.176-40.064-40.576-40.064L126.848 214.08c-22.4 0-40.576 17.92-40.576 40.064l0 560.448c0 22.08 18.176 40 40.576 40l770.368 0c22.4 0 40.576-17.92 40.576-40L937.792 254.144zM776.512 407.744c-1.024 1.024-2.304 1.536-3.52 2.304L569.344 611.072c-31.68 31.296-83.008 31.296-114.688 0L250.304 409.28C250.24 409.28 250.176 409.216 250.112 409.216L192.768 352.576c-7.936-7.808-7.936-20.48 0-28.288 7.936-7.808 20.736-7.808 28.672 0L228.16 330.88 228.16 330.816l255.168 251.904c15.808 15.616 41.536 15.616 57.344 0l203.968-201.344c0.704-1.024 1.152-2.176 2.112-3.072l59.584-58.816c8.256-8.128 21.568-8.128 29.76 0 8.256 8.128 8.256 21.312 0 29.44L776.512 407.744zM287.68 626.88c7.936-7.808 20.736-7.808 28.672 0 7.936 7.808 7.936 20.48 0 28.288l-94.4 93.248c-7.936 7.808-20.736 7.808-28.672 0-7.936-7.808-7.936-20.48 0-28.288L287.68 626.88zM730.944 620.224l99.584 98.304c8.256 8.192 8.256 21.376 0 29.568-8.256 8.192-21.696 8.192-29.952 0l-99.584-98.304c-8.256-8.192-8.256-21.44 0-29.568C709.248 612.032 722.688 612.032 730.944 620.224z"
          p-id="1697"
        />
      </svg>
      Get In Touch
    </a>
  </div>
)

export const GetInTouch = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}>
      <div>
        <BtnTouch />
      </div>
      <Mail />
    </div>
  )
}
