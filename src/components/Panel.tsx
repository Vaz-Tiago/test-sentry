import { useEffect } from "react";

import * as Sentry from "@sentry/react";

/**@ts-ignore */
export default function Panel({ list }) {
  const erroredFunction = () => {
    try {
      /**@ts-ignore */
      list.map((item) => console.log(item));
    } catch (e: any) {
      Sentry.setTag("Implementation", "Panel");
      Sentry.captureException({
        errorType: "ApiSHOff",
        message: e.message,
        stackTrace: e.stackTrace,
      });
    }
  };

  useEffect(() => {
    const teste = fetch("https://www.teste1234567890.com").then((a) =>
      console.log(a)
    );
  });

  return (
    <>
      <button onClick={erroredFunction}>Click to throw a error</button>
    </>
  );
}
