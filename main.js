import Alpine from 'alpinejs';
import './style.css';
import { Player } from  './alpine';
import component from 'alpinejs-component'
// import { axios } from 'axios';

// axios.get('/').then(response => {console.log(response.data)})

window.Alpine = Alpine;
Alpine.data('player', Player);

Alpine.plugin(component)
Alpine.start();