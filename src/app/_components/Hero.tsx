import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-100 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hello, I'm <span className="text-primary">Anton Amarjargal</span>
          </h1>
          <p className="md:text-xl">
            A junior developer specializing in web development
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-foreground">
              <Github className="h-5 w-5">
                <span className="sr-only">GitHub</span>
              </Github>
            </Link>
            <Link href="#" className="hover:text-foreground">
              <Linkedin className="h-5 w-5">
                <span className="sr-only">LinkedIn</span>
              </Linkedin>
            </Link>
            <Link href="#" className="hover:text-foreground">
              <Twitter className="h-5 w-5 ">
                <span className="sr-only">Twitter</span>
              </Twitter>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[64] h-[64] rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src="/anton.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
