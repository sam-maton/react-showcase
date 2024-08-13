import { useState, useTransition } from 'react';

export default function Root() {
  const [tab, setTab] = useState('about');
  const [isPending, startTransition] = useTransition();

  function updateTab(tab: string) {
    startTransition(() => {
      setTab(tab);
    });
  }

  return (
    <main className="flex h-svh">
      <aside className="w-60 bg-slate-300 h-full">
        <h1 className="p-4 text-center">Nav Bar</h1>
      </aside>
      <div className="flex-auto">
        <header className="w-full bg-red-300 h-24">
          <h1>Header Bar</h1>
        </header>
        <div className="w-40 mx-auto pt-40 flex flex-col gap-8">
          <h1>Use Transition demo</h1>

          <div className="flex gap-4">
            <button
              className="py-2 px-4 border rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
              onClick={() => updateTab('about')}
            >
              About
            </button>
            <button
              className="py-2 px-4 border rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
              onClick={() => updateTab('contacts')}
            >
              Contact
            </button>
            <button
              className="py-2 px-4 border rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
              onClick={() => updateTab('jobs')}
            >
              Jobs
            </button>
          </div>
          <div>
            {isPending && <h1>Loading...</h1>}
            {tab === 'about' && !isPending && <h1>About</h1>}
            {tab === 'contacts' && !isPending && <h1>Contacts</h1>}
            {tab === 'jobs' && !isPending && <Jobs />}
          </div>
        </div>
      </div>
    </main>
  );
}

function Jobs() {
  let jobs = [];

  for (let i = 0; i < 1000; i++) {
    jobs.push(<Job key={i} id={i} />);
  }

  return (
    <div>
      <h1 className="font-medium text-xl pb-2">Jobs</h1>
      <ul className="overflow-y-scroll h-60 w-60">{jobs}</ul>
    </div>
  );
}

function Job({ id }) {
  const startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // Do nothing
  }

  return <li>Job {id}</li>;
}
