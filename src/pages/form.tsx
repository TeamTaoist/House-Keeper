import { useEffect } from "react";
import styled from "@emotion/styled";
export default function FormPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.onload = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Tally.loadEmbeds();
    };
    s.type = "text/javascript";
    document.getElementById("root")?.appendChild(s);
  }, []);

  useEffect(() => {
      const fn = () => {
         const bc = new BroadcastChannel("HOUSE_KEEPER");
         bc.postMessage("lalala");
    };
    window.addEventListener("beforeunload", fn);
    return () => {
      window.removeEventListener("beforeunload", fn);
    };
  }, []);
  return (
    <Page>
      <iframe
        data-tally-src="https://tally.so/embed/3NXLpl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="200"
        title="JoannaOriginForm"
        style={{ border: "none" }}
      ></iframe>
    </Page>
  );
}

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;
