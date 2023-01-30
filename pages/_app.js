import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [state, setState] = useState({});
  return (
      <Component {...pageProps} />
  )
}
