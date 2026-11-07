"use client";

import type { LinkItem } from "@/data/profile";

function trackClick(id: string) {
  const body = JSON.stringify({ id });
  // sendBeacon은 페이지를 떠나는 순간에도 요청이 끊기지 않아요.
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/click", new Blob([body], { type: "application/json" }));
  } else {
    fetch("/api/click", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(link.id)}
      className="block w-full rounded-2xl border border-card-border bg-card px-6 py-[1.125rem] text-center text-[15px] font-semibold tracking-tight shadow-[0_6px_24px_-10px_var(--shadow-tint)] backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-card-hover hover:shadow-[0_10px_30px_-12px_var(--shadow-tint)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {link.title}
    </a>
  );
}
