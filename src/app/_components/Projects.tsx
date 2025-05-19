import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Check out some of my recent work.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3, 4].map((project) => (
            <div className="group relative overflow-hidden rounded-lg border">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/one.png"
                  alt=""
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold">Project Title</h3>
                <p className="mt-2">
                  A brief description of the project, technologies used, and
                  your role in it.
                </p>
                <div className="flex gap-2 mt-4">
                  <Button asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                  <Button asChild>
                    <Link href="#">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
