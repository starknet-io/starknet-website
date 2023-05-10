import type { UserConfig } from 'vite'

export default {
  resolve: {
    conditions: ['import', 'module', 'node', 'default']
  },
} as UserConfig
