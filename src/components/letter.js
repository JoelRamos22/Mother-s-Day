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
        this.classCupon = "cupon"
    }
    static properties = {
        containerClass: {typeof: String}, letterClass: {typeof: String}, paperClass: {typeof: String}, coverClass: {typeof: String},
        classContainer: {typeof: String},
        classButonOpen: {typeof: String},
        classButonClose: {typeof: String},
        classCupon: {typeof: String}
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
            height: 40%;
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
            transition: transform 0.001s
        }
        .paper {
            display: flex;  
            align-items: center;
            flex-direction: column;
            position: absolute;
            height: 250px;
            width: 400px; 
            background-color: var(--color-page);
            transition: transform 0.1s
        }
        
        .container_options {
            position: relative;
            display: flex;
            flex-direction: row; 
            justify-content: space-around;
            gap: 30px; 
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
    openLetter() {
        const cover = this.shadowRoot.querySelector(`.${this.coverClass}`);
        const paper = this.shadowRoot.querySelector(`.${this.paperClass}`);
        cover.style.transform = "rotate(180deg)";
        paper.style.top = "-150px";
        paper.style.visibility = "visible"

    }
    closeLetter() {
        const cover = this.shadowRoot.querySelector(`.${this.coverClass}`);
        const paper = this.shadowRoot.querySelector(`.${this.paperClass}`);
        cover.style.transform = "rotate(0deg)"; 
        paper.style.top = "0"
        paper.style.visibility = "hidden"

    }
    render () {
        return html`
            <div class="${this.containerClass}">
                <div class="${this.coverClass}"></div>
                <div class="${this.paperClass}">
                    <h2>¡Feliz dia de la madre ❤️!</h2>
                    <h3>Te amo mami</h3>
                    <h3>🍔 Con cupon incluido para ir a comer 🍔</h3>
                </div>
                <div class="${this.letterClass}"></div>
            </div>
            <div class="${this.classContainer}">
                <button class="${this.classButonOpen}" @click="${this.openLetter}">Abrir</button>
                <button class="${this.classButonClose}" @click="${this.closeLetter}">Cerrar</button>
            </div>
        `
    }
}

customElements.define("my-letter", myLetter)