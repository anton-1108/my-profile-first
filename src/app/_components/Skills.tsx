export function Skills() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-900">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Expertise
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Here are some of the technologies and tools I work with.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-xl font-bold">FE</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <p className="text-center ">
              HTML, CSS, JavaScript, Typescript, React, Next.js, Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-xl font-bold">BE</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p className="text-center"> Node.js, Express, MongoDb, SQL</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-xl font-bold">TO</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Tools</h3>
            <p className="text-center">GitHub, VS Code, AWS, Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
