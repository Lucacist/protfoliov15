import Hero from "@/components/home/Hero";
import Sec2 from "@/components/home/sec2";
import Sec3 from "@/components/home/sec3";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <Hero />
      <Sec2 />
      <Sec3 />
    </section>
  );
}
