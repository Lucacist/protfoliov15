"use client";

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion";
import { Paintbrush, CodeXml, BriefcaseBusiness, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"



export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative container mx-auto px-4 h-screen flex items-center justify-center gap-8">
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
              {t("hero.badge_dev")}
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Badge variant="outline" className="text-sm px-4 py-1">
              <Paintbrush data-icon="inline-start" />
              {t("hero.badge_design")}
            </Badge>
          </motion.div>
        </div>
        <motion.h1 className="text-7xl font-medium text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>{t("hero.title")}</motion.h1>
        <motion.h3 className="text-xl text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>{t("hero.subtitle")}</motion.h3>

        <div className="flex flex-row gap-2 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button asChild>
              <Link href="/projects"><BriefcaseBusiness />{t("hero.btn_projects")}</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <Button asChild>
              <Link href="/contact"><Send />{t("hero.btn_contact")}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <div>
        <img src="/landing/profile.png" alt="Profile" className="h-120 w-120 object-cover filter grayscale" />
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
          <img src="/landing/Hand.svg" alt="Hand" className="h-12 w-12 object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
}