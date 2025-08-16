import { Search } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export function SearchForm({
  onSearch,
  value,
  onValueChange,
  ...props
}: React.ComponentProps<"form"> & {
  onSearch?: (name: string) => void;
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  const [internalValue, setInternalValue] = useState(value ?? "");

  useEffect(() => {
    setInternalValue(value ?? "");
  }, [value]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInternalValue(e.target.value);
    if (onValueChange) onValueChange(e.target.value);
    if (onSearch) onSearch(e.target.value);
  }

  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        if (onSearch) onSearch(internalValue);
      }}
    >
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search by the name..."
            className="pl-8"
            value={internalValue}
            onChange={handleChange}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
