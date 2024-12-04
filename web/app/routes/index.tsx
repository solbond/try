import { createFileRoute } from "@tanstack/react-router"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/tanstack-start"

function RouteComponent() {
  return (
    <div className="absolute top-4 right-4">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
    </div>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
