import { useEffect } from "react";
import { useState } from "react";

export function useSearchDebounce(delay = 1000) {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // search

  useEffect(() => {
    const delayFn = setTimeout(() => setSearch(searchQuery), delay);
    return () => clearTimeout(delayFn);
  }, [searchQuery, delay]);

  return [search, setSearchQuery];
}
