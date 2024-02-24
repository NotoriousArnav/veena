import './tailwind.css'
import Alpine from 'alpinejs'
import component from 'alpinejs-component'


window.Alpine = Alpine
Alpine.plugin(component)
Alpine.start()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="p-2">
    <x-component url="./src/player.html"></x-component>
</div>
<div class="p-2">
    <x-component url="./src/lyrics.html"></x-component>
</div>
`