"use client";

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion";
import { Paintbrush, CodeXml, BriefcaseBusiness, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"



export default function Hero() {
  return (
    <section className="container mx-auto px-4 h-screen flex items-center justify-center gap-8">
      <div className="flex flex-col gap-4">
        {/* <img src="/landing/wave.svg" alt="Profile" className="absolute top-0 left-0 w-full object-cover" /> */}
        <div className="flex flex-row gap-2 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Badge variant="outline" className="text-sm px-4 py-1">
              <CodeXml data-icon="inline-start" />
              Développeur web full-stack
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Badge variant="outline" className="text-sm px-4 py-1">
              <Paintbrush data-icon="inline-start" />
              Designer UI/UX
            </Badge>
          </motion.div>
        </div>
        <motion.h1 className="text-7xl font-medium text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>Salut, je suis Luca</motion.h1>
        <motion.h3 className="text-xl text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>Étudiant ingénieur à CESI chez Assystem, je travaille sur toute la stack : backend, frontend et expérience produit.</motion.h3>

        <div className="flex flex-row gap-2 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button asChild>
              <Link href="/projects"><BriefcaseBusiness />Projets</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <Button asChild>
              <Link href="/contact"><Send />Contact</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <div>
        <img src="/landing/profile.png" alt="Profile" className="h-120 w-120 object-cover filter grayscale" />
      </div>
    </section>
  );
}