import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export function IntroSection() {
  return (
    <section
      id="about"
      data-nav-section
      className="flex flex-col items-center text-center"
    >
      <h1
        className={`${instrumentSerif.className} text-6xl font-semibold leading-[1.15] text-white italic sm:text-7xl`}
      >
        hi, I&apos;m Krishna
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-white/90 sm:text-xl">
        I enjoy creating things{" "}
        <span className="font-semibold text-white">end-to-end</span>, whether
        it’s a <span className="font-semibold text-white">full-stack</span>{" "}
        product or an <span className="font-semibold text-white">AI agent</span>{" "}
        that solves a real problem—working across the stack, thinking through{" "}
        <span className="font-semibold text-white">architecture</span>, and
        crafting <span className="font-semibold text-white">agents</span> that
        behave the way they should.
      </p>
      <p className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg">
        Away from my editor, I&apos;m usually exploring the AI space, diving
        into papers and whitepapers, or unwinding with movies and anime.
      </p>
    </section>
  );
}
