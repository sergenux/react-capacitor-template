#! /usr/bin/env node
import { Command } from 'commander'
import { spawn } from 'node:child_process'
import process from 'node:process'
import { createServer } from 'vite'

const app = new Command()

const run = (command) => spawn(command, { shell: true, stdio: 'inherit' })

app.command('dev <os>').action(async (os) => {
  const server = await createServer({ server: { host: true } })
  await server.listen()
  process.env.DEV_SERVER_URL = server.resolvedUrls?.network.at(0)
  run(`cap sync ${os} && cap open ${os}`)
})

app.parse()
