import 'dotenv/config'

import type { UserConfig } from 'vite'

export default {
  resolve: {
    conditions: ['import', 'module', 'node', 'default']
  },
  define: {
    'YOUTUBE_API_KEY': JSON.stringify(process.env.YOUTUBE_API_KEY)
  }
} as UserConfig
