import './tailwind.css'
import Alpine from 'alpinejs'
import component from 'alpinejs-component'


window.Alpine = Alpine
Alpine.plugin(component)
Alpine.start()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="p-2">
    Player
    <!--Use X Component to Import Player Template-->
</div>
<div class="p-2">
    Lyrics
    <!--Use X Component to Import Lyrics Template-->
</div>
`