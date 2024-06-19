// src/js/control/customButton.js
import control from '../control'

export default class customButton extends control {
  static get definition() {
    return {
      i18n: {
        default: 'Custom Button'
      },
      icon: '🔳'
    }
  }

  build() {
    const button = this.markup('button', 'Click Me!', this.config)
    button.classList.add('btn', 'btn-custom')
    button.addEventListener('click', () => {
      alert('custom button was clicked!')
    })
    return button
  }
}

// Register the custom control
control.register('customButton', customButton)
