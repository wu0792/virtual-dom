import { el } from "./element";

const root = el('div', { 'class': 'app' }, [
    el('div', {}, [
        el('h1', { style: 'font-size:28px' }, ['hello world'])
    ]),
    el('span', { style: 'border:solid 1px blue;width:200px;height:80px;display: inline-block;' }, 'hello javascript')
])

const app = document.getElementById('app')
app.appendChild(root.render())