import Link from "next/link";
import Image from "next/image";
import uomLogo from "@/images/University_of_Moratuwa_logo.png";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent mt-12">
      <div className="container mx-auto flex flex-col items-center justify-center py-6 gap-2">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
          {/* University logo and badge */}
          <div className="flex items-center gap-3">
            <Image
              src={uomLogo}
              alt="University of Moratuwa Logo"
              width={40}
              height={40}
              className="rounded-full bg-white w-10 h-10 object-contain"
              priority
            />
            <span className="font-semibold text-base text-muted-foreground">University of Moratuwa</span>
          </div>
          <span className="mx-2 hidden md:inline">·</span>
          <span className="text-center text-sm text-muted-foreground">
            Research and Development Project — Dept. of Computer Science and Engineering, University of Moratuwa
          </span>
          <span className="mx-2 hidden md:inline">·</span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="mailto:isshintech@gmail.com" className="flex items-center gap-1 hover:underline text-primary" style={{fontSize: '14px'}}>
              <Mail size={16} className="inline align-middle" />
              <span className="ml-0.5">isshintech@gmail.com</span>
            </a>
            <span className="mx-1">|</span>
            <a href="https://www.linkedin.com/company/isshintech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-primary" style={{fontSize: '14px'}}>
              <Linkedin size={16} className="inline align-middle" />
              <span className="ml-0.5">LinkedIn</span>
            </a>
          </span>
        </div>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50 mt-2" />
    </footer>
  );
}
