module.exports = {
   theme: {
     fontFamily: {
       'sans': '"Work Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
       'serif': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
       'mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
       'display': ['Montserrat'],
       'body': ['Work Sans'],
     },
     fontSize: {
       'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
       '7xl': '5rem',
       '8xl': '6rem',
       '9xl': '8rem',
     },
     variants: {},
     plugins: [],
     purge: {
       enabled: process.env.NODE_ENV === 'production',
       content: [
         "components/**/*.vue",
         "layouts/**/*.vue",
         "pages/**/*.vue",
         "plugins/**/*.js",
         "nuxt.config.js",
         // TypeScript
         "plugins/**/*.ts",
         "nuxt.config.ts"
       ]
     }
   }
 }
 