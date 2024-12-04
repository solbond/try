/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server"
import { getRouterManifest } from "@tanstack/start/router-manifest"
import { createClerkHandler } from "@clerk/tanstack-start/server"
import { createRouter } from "./router"

const handler = createStartHandler({
  createRouter,
  getRouterManifest,
})

// TODO: taken from https://github.com/TanStack/router/blob/main/examples/react/start-clerk-basic/app/ssr.tsx
// but it's breaking on types for some reason
// https://discord.com/channels/719702312431386674/1238170697650405547/1313838484854669362
// https://discord.com/channels/856971667393609759/1313502145936490538/1313838763000201239
// @ts-ignore
const clerkHandler = createClerkHandler(handler)
export default clerkHandler(defaultStreamHandler)
