import Link from "next/link";
interface FeatureProps {
  title: string;
  description: string;
  imageUrl: string;
}
export default function Home() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between border-b border-solid border-b-[#9ca3af] px-10 py-3">
        <div className="flex items-center gap-4 text-[#1d1c1d]">
          <div className="w-10 h-10">
            {/* logo */}
          </div>
          <h2 className="text-lg font-bold">WebForum</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex gap-2">
            <Link href="/login" className="flex items-center justify-center h-10 px-4 bg-[#611f69] text-white rounded-xl font-bold">
              Sign in
            </Link>
            <Link href="/register" className="flex items-center justify-center h-10 px-4 bg-[#9ca3af] text-[#1d1c1d] rounded-xl font-bold">
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container max-w-[960px] flex flex-col gap-6">
          {/* Hero Section */}
          <section
            className="flex min-h-[480px] flex-col gap-8 items-center justify-center p-4 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/1c9650f1-5310-41ed-b9b6-0684c546f6e1.png")',
            }}
          >
            <h1 className="text-white text-5xl font-black text-center">
              A new way to communicate with your team
            </h1>
            <div className="flex gap-3 justify-center">
              <Link href="/register" className="flex items-center justify-center h-12 px-5 bg-[#611f69] text-white rounded-xl font-bold">
                Create a free account
              </Link>
              <Link href="/login" className="flex items-center justify-center h-12 px-5 bg-[#9ca3af] text-[#1d1c1d] rounded-xl font-bold">
                Sign in
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="flex flex-col gap-10 px-4 py-10">
            <h1 className="text-[#1d1c1d] text-4xl font-black max-w-[720px]">
              Features
            </h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              {/* Repeat feature items as needed */}
              <Feature
                title="Real-time chat"
                description="Start a conversation with your team, right from your code"
                imageUrl="https://cdn.usegalileo.ai/stability/ea8f7506-0454-4070-aea2-5ce4ffe68f7d.png"
              />
              <Feature
                title="Code blocks"
                description="Share code snippets and files, with syntax highlighting"
                imageUrl="https://cdn.usegalileo.ai/sdxl10/ea6206f5-7063-4d49-a352-7b6cff8a2084.png"
              />
              {/* Additional feature items */}
            </div>
          </section>

          {/* Call to Action */}
          <section className="flex flex-col items-center gap-6 px-4 py-10">
            <h1 className="text-[#1d1c1d] text-4xl font-black text-center">
              Ready to get started?
            </h1>
            <p className="text-[#1d1c1d] text-base text-center">
              Try WebForum for free today
            </p>
            <div className="flex gap-3">
              <Link href="/register" className="flex items-center justify-center h-12 px-5 bg-[#611f69] text-white rounded-xl font-bold">
                Create a free account
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// Feature Component
function Feature({ title, description, imageUrl }: FeatureProps) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div>
        <p className="text-[#1d1c1d] text-base font-medium">{title}</p>
        <p className="text-[#9ca3af] text-sm">{description}</p>
      </div>
    </div>
  );
}
