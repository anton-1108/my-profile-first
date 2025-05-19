import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Have a project in mind or want to collaborate? Feel free to reach
              out !
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg mt-8">
          <div className="grid gap-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">Email</h3>
            <p className="">antonamarjargal27@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Linkedin className="h-6 w-6 text-primary" />
          <div>
            <h3 className="font-medium">LinkedIn</h3>
            <p>linkedin.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Github className="h-6 w-6 text-primary" />
          <div>
            <h3>GitHub</h3>
            <p>github.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button className="w-full" asChild>
          <Link href="">Send Email</Link>
        </Button>
      </div>
    </div>
  );
}
