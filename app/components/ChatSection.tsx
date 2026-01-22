"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { Locale } from "../content";
import { getCopy } from "../content";

type Props = {
  locale: Locale;
};

function useTypewriter(text: string, speedMs = 22, disabled = false) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setIndex(0);
    setDone(false);
  }, [text]);

  useEffect(() => {
    if (disabled) {
      setIndex(text.length);
      setDone(true);
      return;
    }
    if (done) return;
    const id = window.setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= text.length) {
          window.clearInterval(id);
          setDone(true);
          return text.length;
        }
        return next;
      });
    }, speedMs);

    return () => window.clearInterval(id);
  }, [text, speedMs, done, disabled]);

  return { value: text.slice(0, index), done };
}

export function ChatSection({ locale }: Props) {
  const copy = getCopy(locale);
  const prompt = copy.chat.prompt;
  const reducedMotion = useReducedMotion() ?? false;
  const { value, done } = useTypewriter(prompt, 18, reducedMotion);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => setBlink((b) => !b), 520);
    return () => window.clearInterval(id);
  }, []);

  const cursor = useMemo(() => {
    if (!done) return "▍";
    return blink ? "▍" : " ";
  }, [done, blink]);

  return (
    <section className="border-t border-[color:var(--border)] bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-medium tracking-wide text-neutral-600">
              {copy.chat.eyebrow}
            </div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl">
              {copy.chat.title}
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
              {copy.chat.subtitle}
            </p>
            <div className="mt-5">
              <span className="inline-flex items-center rounded-full border border-black/10 bg-[color:var(--panel)] px-3 py-1 text-xs font-medium text-neutral-700">
                {copy.chat.badge}
              </span>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[#F9F9F9] shadow-soft">
            <div className="flex items-center justify-between border-b border-black/10 bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-auto"
                    width={22}
                    height={22}
                  />
                  <div className="text-xs font-medium text-neutral-700">arah.ai</div>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700">
                {copy.chat.badge}
              </span>
            </div>

            <div className="px-4 py-6 sm:px-6">
              <div className="rounded-2xl border border-black/10 bg-white px-4 py-5">
                <div className="font-mono text-sm leading-relaxed text-neutral-900">
                  <span className="text-neutral-500">$</span> {value}
                  <span className="text-neutral-900">{cursor}</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-neutral-500">
                {copy.chat.previewNote}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
