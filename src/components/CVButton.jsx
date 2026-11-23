import { useState } from "react";
import { CV_URL } from "../data";

// Downloads the CV via fetch -> blob so it works reliably (even when the browser
// would otherwise open the PDF in a tab), and shows a message if the file is missing.
export default function CVButton({ className = "btn ghost" }) {
  const [state, setState] = useState("idle"); // idle | loading | error

  const download = async (e) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch(CV_URL);
      const type = res.headers.get("content-type") || "";
      if (!res.ok || type.includes("text/html")) throw new Error("CV not found");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Kashan_Ali_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setState("idle");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3500);
    }
  };

  return (
    <a className={className} href={CV_URL} download="Kashan_Ali_CV.pdf" onClick={download}>
      {state === "loading" ? "Downloading…" : state === "error" ? "CV unavailable, try again" : "Download CV"}
    </a>
  );
}
