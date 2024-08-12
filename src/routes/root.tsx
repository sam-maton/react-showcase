export default function Root() {
  return (
    <main className="flex h-svh">
      <aside className="w-60 bg-slate-300 h-full">
        <h1 className="p-4 text-center">Nav Bar</h1>
      </aside>
      <div className="flex-auto">
        <header className="w-full bg-red-300 h-24">
          <h1>Header Bar</h1>
        </header>
        <div>Main Content</div>
      </div>
    </main>
  );
}
