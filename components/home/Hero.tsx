"use client";

import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion";
import { Paintbrush, CodeXml, BriefcaseBusiness, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"



export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 py-20 md:py-0">
      <div className="flex flex-col gap-4">
        {/* <img src="/landing/wave.svg" alt="Profile" className="absolute top-0 left-0 w-full object-cover" /> */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Badge variant="outline" className="text-xs sm:text-sm px-3 sm:px-4 py-1">
              <CodeXml data-icon="inline-start" />
              {t("hero.badge_dev")}
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Badge variant="outline" className="text-xs sm:text-sm px-3 sm:px-4 py-1">
              <Paintbrush data-icon="inline-start" />
              {t("hero.badge_design")}
            </Badge>
          </motion.div>
        </div>
        <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-center md:text-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>{t("hero.title")}</motion.h1>
        <motion.h3 className="text-base sm:text-lg md:text-xl text-center md:text-start max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>{t("hero.subtitle")}</motion.h3>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button asChild size="sm" className="sm:size-default">
              <Link href="/projects"><BriefcaseBusiness />{t("hero.btn_projects")}</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <Button asChild size="sm" className="sm:size-default">
              <Link href="/contact"><Send />{t("hero.btn_contact")}</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="flex items-center"
          ><Tooltip>
              <TooltipTrigger asChild>
                <a href="https://assystem.com/">
                  <img src="/landing/assystem.svg" alt="Assystem" className="h-6 w-auto object-cover" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Assystem</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="flex items-center"
          >    <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://cesi.fr/">
                  <img src="/landing/cesi.png" alt="CESI" className="h-6 w-auto object-cover" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>CESI</p>
              </TooltipContent>
            </Tooltip>

          </motion.div>
        </div>
      </div>
      <div className="relative hidden md:block">
        <img src="/rosas/rosas1.svg" className="absolute top-[-30px] left-[-50px] h-30 w-30 object-cover z-10 opacity-50" />
        <img src="/rosas/rosas2.svg" className="absolute bottom-[-100px] right-[-50px] h-60 w-60 object-cover z-10 opacity-80 " />
        <img src="/landing/profile.png" alt="Profile" className="h-80 lg:h-120 w-80 lg:w-120 object-cover filter grayscale" />
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/landing/Hand.svg" alt="Hand" className="h-8 w-8 sm:h-12 sm:w-12 object-cover" />
        </motion.div>
      </motion.div>
    </section >
  );
}