import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import Link from './Link';
import Theme from './Theme';
import AutoTheme from './AutoTheme';

import githubIcon from './icons/githubIcon.png';
import youtubeIcon from './icons/youtubeIcon.png';
import twitterIcon from './icons/twitterIcon.png';
import twitchIcon from './icons/twitchIcon.png';
import discordIcon from './icons/discordIcon.webp';


const links = {
  github: {
    image: githubIcon,
    text: "Github profile",
    url: "https://github.com/WannaBe2D"
  },
  youtube: {
    image: youtubeIcon,
    text: "Here's my YouTube Channel!",
    url: "https://www.youtube.com/channel/UCJBrY8gyD6_7SOmo0KjGw2A"
  },
  twitter: {
    image: twitterIcon,
    text: "I'm on Twitter!",
    url: "https://twitter.com/nronin47/"
  },
  twitch: {
    image: twitchIcon,
    text: "Follow me on Twitch",
    url: "https://www.twitch.tv/nronin47"
  },
  discrod: {
    image: discordIcon,
    text: "Discord community",
    url: "https://discord.gg/nUqmnj7k"
  }
}


function MainPage(){
  return(
    <div className="MainPage">
      <Avatar />
      <Theme />
      <UserInfo />
      <Link image={links.github.image} text={links.github.text} url={links.github.url} />
      <Link image={links.youtube.image} text={links.youtube.text} url={links.youtube.url}/>
      <Link image={links.twitter.image} text={links.twitter.text} url={links.twitter.url}/>
      <Link image={links.twitch.image} text={links.twitch.text} url={links.twitch.url} />
      <Link image={links.discrod.image} text={links.discrod.text} url={links.discrod.url}/>
      <div id="mda"></div>
    </div>
  )
}

ReactDOM.render(
  <MainPage />,
  document.getElementById('root')
);
ReactDOM.render(
  <AutoTheme />,
  document.getElementById('mda')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
