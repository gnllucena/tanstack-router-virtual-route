import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(workspace)")({
  component: () => <div>hey</div>,
})
