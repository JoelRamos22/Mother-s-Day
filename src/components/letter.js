import { LitElement, html, css } from "lit";

export class myLetter extends LitElement {
    constructor () {
        super()
        this.containerClass = "container"
        this.letterClass = "letter"
        this.paperClass = "paper"
        this.coverClass = "cover"
        this.classContainer = "container_options"
        this.classButonClose = "buton_close"
        this.classButonOpen = "buton_open"
    }
    static properties = {
        containerClass: {typeof: String}, letterClass: {typeof: String}, paperClass: {typeof: String}, coverClass: {typeof: String},
        classContainer: {typeof: String},
        classButonOpen: {typeof: String},
        classButonClose: {typeof: String}
    }
    static styles = css`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        :host {
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            align-items: center;
            gap: 30px
        }
        :root {
            --color-background: #FAD6DF;
            --color-left-right-side: #FF989F;
            --color-bottom: #FF858B;
            --color-page: #FFFDFF;
            --color-top: #FF3335;
            --color-font: #000000dd;
        }
        .container {
            position: relative; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .letter {
            position: absolute;
            border-top: 125px solid transparent;
            border-left: 200px solid var(--color-left-right-side);
            border-bottom: 125px solid var(--color-bottom);
            border-right: 200px solid var(--color-left-right-side);
        }
        .cover {
            position: absolute;
            border-top: 125px solid var(--color-top);
            border-left: 200px solid transparent;
            border-bottom: 125px solid transparent;
            border-right: 200px solid transparent;
            transform-origin: top;
            transform: rotate(180deg);
            transition: transform .75s;
        }
        .paper {
            height: 250px;
            width: 400px; 
            background-color: var(--color-page)
        }
        .container_options {
            display: flex;
            flex-direction: row; 
            justify-content: space-around;
            gap: 20px; 
            width: 400px;
        }
        .buton_open {
            background-color: var(--color-top);
            border: none;
            border-radius: 10px;
            padding: 7px;
            width: 120px;
            color: var(--color-page);
            font-size: 1.2em;
            font-weight: 700;
            cursor: pointer;
        }
        .buton_close {
            border: none;
            border-radius: 10px;
            padding: 7px;
            width: 120px;
            color: var(--color-font);
            font-size: 1.2em;
            font-weight: 700;
            cursor: pointer;
        }

    `
    render () {
        return html`
            <div class="${this.containerClass}">
                <div class="${this.coverClass}"></div>
                <div class="${this.paperClass}"> lorem impuasjkdaskdjaksdljkasjkl</div>
                <div class="${this.letterClass}"></div>
            </div>
            <div class="${this.classContainer}">
                <button class="${this.classButonOpen}">Abrir</button>
                <button class="${this.classButonClose}">Cerrar</button>
            </div>
        `
    }
}

customElements.define("my-letter", myLetter)