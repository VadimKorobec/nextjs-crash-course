import Hello from "@/components/hello";

export default function Home() {
  console.log("SERVER/CLIENT");
  return (
    <>
      <h1 className="text-3xl">Welcomee to Next.js</h1>
      <Hello />
    </>
  );
}
