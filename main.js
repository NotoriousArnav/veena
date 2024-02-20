import Alpine from 'alpinejs';
import './style.css';
import { Player } from  './alpine';
import component from 'alpinejs-component'
 
window.Alpine = Alpine;
Alpine.data('player', Player);

Alpine.plugin(component)
Alpine.start();

// document.querySelector('#app').innerHTML = `Simple AlpineS+Vite Application`
