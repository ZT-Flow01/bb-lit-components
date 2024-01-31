import { LitElement, html, css } from 'lit-element';
import styles from './style.scss';

class BbLitAvatar extends LitElement {
    static get properties() {
        return {
            avatarSrc: { type: String },
            color: { type: String },
            fullName: { type: String },
            height: { type: Number },
            maxHeight: { type: Number },
            maxWidth: { type: Number },
            minHeight: { type: Number },
            minWidth: { type: Number },
            radius: { type: [Number, String], attribute: 'border-radius' },
            size: { type: [Number, String] },
            text: { type: String },
            width: { type: Number },
        };
    }

    static get styles() {
        [styles];
    }

    get handledBorderRadius() {
        return typeof this.radius === 'number' ? `${this.radius}%` : this.radius;
    }

    get displayText() {
        return (
            this.text ||
            (this.fullName
                ?.split(' ')
                .map((item) => item[0])
                .join('')
                .toUpperCase() || '')
        );
    }

    get avatarPath() {
        return `url('${this.avatarSrc}')`;
    }

    render() {
        return html`
      <div
        class="bb-avatar"
        style="border-radius: ${this.handledBorderRadius}; background-image: ${this.avatarPath};"
      >
        ${this.avatarSrc ? '' : this.displayText}
        <slot></slot>
      </div>
    `;
    }
}

customElements.define('bb-avatar', BbLitAvatar);
