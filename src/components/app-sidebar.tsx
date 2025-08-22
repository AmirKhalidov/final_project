import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import Logo from "@/assets/logo7.webp";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useFiltersStore } from "@/stores/useFiltersStore";
import { Link } from "react-router";

import { PersonalFilters } from "./sidebar/PersonalFilters";
import { DribblingFilters } from "./sidebar/DribblingFilters";
import { ShootingFilters } from "./sidebar/ShootingFilters";
import { GoalsFilters } from "./sidebar/GoalsFilters";
import { AssistsFilters } from "./sidebar/AssistsFilters";
import { PassingFilters } from "./sidebar/PassingFilters";
import { DefendingFilters } from "./sidebar/DefendingFilters";
import { GoalkeepingFilters } from "./sidebar/GoalkeepingFilters";
import { PlayingTimeFilters } from "./sidebar/PlayingTimeFilters";
import { OtherFilters } from "./sidebar/OtherFilters";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { searchValue, setSearchValue, resetFilters } = useFiltersStore();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/">
          <img src={Logo} alt="Logo" className="" />
        </Link>
        <SearchForm
          onSearch={setSearchValue}
          value={searchValue}
          onValueChange={setSearchValue}
        />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <PersonalFilters />
        <DribblingFilters />
        <ShootingFilters />
        <GoalsFilters />
        <AssistsFilters />
        <PassingFilters />
        <DefendingFilters />
        <GoalkeepingFilters />
        <PlayingTimeFilters />
        <OtherFilters />
      </SidebarContent>

      <div className="p-4 mt-auto">
        <Button
          variant="outline"
          className="w-full cursor-pointer"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
