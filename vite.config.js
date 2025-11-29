import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        project: 'project/project.html',
        stack: 'stack/stack.html',
        summary: 'summary/summary.html',
        mashup: 'mashup/mashup.html'
      }
    }
  }
})