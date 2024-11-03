import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[90dvh]">
      <div className="">
        <p className="text-5xl text-center">Welcome</p>
        <Link href='/home' className="text-center text-blue-600">Click Me to navigate to other pages</Link>
      </div>
    </div>
  );
}
