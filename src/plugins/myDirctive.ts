import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    app.directive('two-decimal', {
      mounted (el) {
        el.addEventListener('input', (event: any) => {
          const input = event.target as HTMLInputElement
          const value = input.value
          const regex = /^\d*\.?\d{0,2}$/
          if (!regex.test(value)) {
            input.value = value.slice(0, -1)
            // input.value = value.replace(/^(-?\d*)\.?(\d{0,2}).*$/, '$1.$2')
          }
          event.target.dispatchEvent(new Event('input'))
        })
      }
    })

    app.directive('focus-clear', {
      mounted (el) {
        if (el.tagName !== 'INPUT') {
          const inputTag = el.querySelector('input')
          if (inputTag && inputTag.tagName === 'INPUT') {
            el = inputTag
          } else {
            return
          }
        }

        let oldValue = ''
        el.addEventListener('focus', (event: any) => {
          const input = event.target as HTMLInputElement
          oldValue = input.value
          el.value = ''
        })

        el.addEventListener('blur', (event: any) => {
          const input = event.target as HTMLInputElement
          if (input.value === '') {
            input.value = oldValue || ''
          }
        })
        // input.dataset.previousValue
      }
    })

    app.directive('phone', {
      beforeMount (el) {
        el.addEventListener('input', (event: any) => {
          const input = event.target.value
          const phoneRegex = /^1[3-9]\d{9}$/
          if (phoneRegex.test(input)) {
            event.target.value = input
          } else {
            event.target.value = ''
          }
        })
      },
      updated (el) {
        const input = el.value
        const phoneRegex = /^1[3-9]\d{9}$/
        if (phoneRegex.test(input)) {
          el.value = input
        } else {
          el.value = ''
        }
      }
    })
  }
}
