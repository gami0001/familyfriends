import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Image src="https://placecats.com/neo/300/200" alt="Picture of the author" width={300} height={200} />
    </section>
  );
}
