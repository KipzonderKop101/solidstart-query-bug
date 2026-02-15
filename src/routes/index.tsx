import { A } from "@solidjs/router";
import { ErrorBoundary, JSX, Suspense } from "solid-js";

// Route to the secondary page using client-side routing.
export default function Home(): JSX.Element {
  return (
    <Suspense>
      <ErrorBoundary fallback={(err) => <div>{err.message}</div>}>
        <A href="/secondary">Test</A>
      </ErrorBoundary>
    </Suspense>
  );
}
