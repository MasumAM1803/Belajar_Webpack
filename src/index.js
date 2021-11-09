import pict from './images/face.png'
import svg from './images/faceB.svg'
import './styles/main.scss'

class Greeting {
    content = 'Selamat Belajar Webpack'
}
const greet = new Greeting()
const p = document.createElement('p')
p.textContent = `Hallo, ${greet.content}.`

const heading = document.createElement('h1')
heading.textContent = 'Belajar Webpack'

const app = document.querySelector('#root')
app.append(heading, p)