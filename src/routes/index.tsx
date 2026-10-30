import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import siteCss from "../site/2am.css?url";
import { markup } from "../site/markup";
import playerJs from "../site/2am-player.js?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "2AM" },
      { name: "description", content: "2AM — music for moments that stay. The songs we used to listen to together." },
      { property: "og:title", content: "2AM" },
      { property: "og:description", content: "Music for moments that stay." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400&display=swap",
      },
      { rel: "stylesheet", href: siteCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (document.getElementById("twoam-player")) return;
    const s = document.createElement("script");
    s.id = "twoam-player";
    s.textContent = playerJs;
    document.body.appendChild(s);
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
