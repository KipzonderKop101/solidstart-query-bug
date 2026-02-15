import { createAsync } from "@solidjs/router";
import { ErrorBoundary, JSX, Suspense } from "solid-js";
import { getSomeData } from "~/lib/queries";

export default function Secondary(): JSX.Element {
  // This should trigger the query and thus the randomHelperFunction, which should log something on the server and throw an error if the fetch fails
  const data = createAsync(() => getSomeData());

  return (
    <Suspense>
      <ErrorBoundary fallback={(err) => <div>{err.message}</div>}>
        <div>test</div>
      </ErrorBoundary>
    </Suspense>
  );
}
