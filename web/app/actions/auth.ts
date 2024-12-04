import { createServerFn } from "@tanstack/start"
import { getAuth } from "@clerk/tanstack-start/server"
import { getWebRequest } from "vinxi/http"

export const $fetchClerkAuth = createServerFn({ method: "GET" }).handler(
  async () => {
    // TODO: fix any https://discord.com/channels/719702312431386674/1238170697650405547/1313495141507403826
    const user = (await getAuth(getWebRequest())) as any
    return {
      user,
    }
  },
)
