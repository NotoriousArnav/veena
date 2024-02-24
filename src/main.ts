import './style.css'
import './main.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import Alpine from 'alpinejs'
import { setupCounter } from './counter.ts'

window.Alpine = Alpine
Alpine.start()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button" class="p-2 rounded-lg bg-red-300 hover:bg-red-400 text-black"></button>
    </div>
    <p class="read-the-docs p-2">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
