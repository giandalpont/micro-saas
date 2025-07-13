import { LucideClockFading } from "lucide-react";

export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return <LucideClockFading className="animate-spin"/>
}