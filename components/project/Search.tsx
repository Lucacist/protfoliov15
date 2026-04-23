"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/language-context";

export default function Search({
  onSearchChange,
}: {
  onSearchChange?: (value: string) => void;
}) {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearchChange?.(value);
  };

  return (
    <div className="relative flex-1">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={t("projects.ui.searchPlaceholder")}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-9 !h-11"
      />
    </div>
  );
}