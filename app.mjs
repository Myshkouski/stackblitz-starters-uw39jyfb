import { createApp } from 'h3'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
import { apollo } from "./apollo.mjs"

export const app = createApp()

app.use('/', startServerAndCreateH3Handler(apollo))
