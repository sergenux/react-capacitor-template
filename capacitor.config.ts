import type { CapacitorConfig } from '@capacitor/cli'
import process from 'node:process'

const config: CapacitorConfig = {
  appId: 'com.my.app',
  appName: 'app',
  webDir: './build/client'
}

if (process.env.DEV_SERVER_URL) {
  config.server = {
    url: process.env.DEV_SERVER_URL,
    cleartext: true
  }
}

export default config
