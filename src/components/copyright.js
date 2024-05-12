import { LitElement, html, css } from "lit";

class copyright extends LitElement {
    constructor (){
        super()
    }
    static styles = css`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .container_text {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `
    render (){
        return html`
            <div class="container_text">
                <h4>©️ Copyright by German Joel Ramos </h4>
            </div>
        `
    }
}

customElements.define("my-copyright", copyright)