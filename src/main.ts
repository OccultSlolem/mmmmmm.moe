import './style.css';
import './assets/webfontkit-20230124-184923/stylesheet.css'
import { setupEventListeners } from './script';

const mmmmmmm = '/mmmmmmm.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <marquee behavior="scroll" direction="left" scrollamount="10">
      <p class="marquee-text">引き出し論法 😭😭</p>
    </marquee>
    <hr style="width:80%;"/>
    <div class="mmmmmmm-container">
      <button id="nyah1button"><img src="${mmmmmmm}" class="mmmmmmm" alt="mmmmmmm" /></button>
      <button id="nyah2button"><img src="${mmmmmmm}" class="mmmmmmm" alt="mmmmmmm" /></button>
      <button id="nyah3button"><img src="${mmmmmmm}" class="mmmmmmm" alt="mmmmmmm" /></button>
      <div id="text-container"></div>
    </div>

    <div class="footer">
      <p class="footer-text">(c) 2023 Gay Retard Corp.</p>
      <a href="https://github.com/OccultSlolem/mmmmmm.moe">lol</a>
    </div>
  </div>
  `;

  setupEventListeners(document.querySelector<HTMLButtonElement>('#nyah1button') as HTMLButtonElement, '/nyah1.mp3');
  setupEventListeners(document.querySelector<HTMLButtonElement>('#nyah2button') as HTMLButtonElement, '/nyah2.mp3');
  setupEventListeners(document.querySelector<HTMLButtonElement>('#nyah3button') as HTMLButtonElement, '/nyah3.mp3');
  
  // setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
