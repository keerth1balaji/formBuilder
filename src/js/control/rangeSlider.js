/**
 * Range Slider class
 * Output a range slider form element
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = []
window.fbControls.push(function(controlClass) {
  /**
   * Range Slider class
   * @extends control
   */
  class controlRangeSlider extends controlClass {
    /**
     * Class configuration - return the icon & label related to this control
     * @return {Object} definition object
     */
    static get definition() {
      return {
        icon: '🎚️', 
        i18n: {
          default: 'Range Slider',
        },
      }
    }

    /**
     * Build a range slider DOM element
     * @return {HTMLElement[]} Array containing the input and a span element
     */
    build() {
      this.input = this.markup('input', null, {
        ...this.config,
        type: 'range',
        min: 0, // Example: Minimum value
        max: 100, // Example: Maximum value
        step: 1, // Example: Step size
      })
      this.field = this.markup('span')
      return [this.input, this.field]
    }

    /**
     * On render callback
     */
    onRender() {
      const input = $(this.input)
      input.val(this.config.value || 50) // Example: Default value
      input.on('input', () => {
        $(this.field).text(input.val()) // Update span with current value
      })
    }
  }

  // Register this control for the 'rangeSlider' type
  controlClass.register('rangeSlider', controlRangeSlider)
  return controlRangeSlider
})
