export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'slate',
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md'
      }
    },
    input: {
      default: {
        size: 'md'
      }
    },
    cardGroup: {
      wrapper: 'grid grid-cols-3'
    },
    card: {
      rounded: 'rounded-xl'
    },
    footer: {
      top: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'py-8 lg:py-16'
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    },
    page: {
      hero: {
        wrapper: 'lg:py-24'
      }
    },
    header: {
      popover: {
        links: {
          wrapper: 'grid grid-cols-3'
        }
      }
    },
  },
})
