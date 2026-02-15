import { createAsync } from "@solidjs/router";
import { ErrorBoundary, JSX, Suspense } from "solid-js";
import { getSomeData } from "~/lib/queries";

export default function Secondary(): JSX.Element {
  const data = createAsync(() => getSomeData());

  return (
    <Suspense>
      <ErrorBoundary fallback={(err) => <div>{err.message}</div>}>
        <div>test</div>
      </ErrorBoundary>
    </Suspense>
  );
}
