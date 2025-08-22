import { ChevronRight } from "lucide-react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useFiltersStore } from "@/stores/useFiltersStore";

export function PersonalFilters() {
  const {
    minYear,
    maxYear,
    setYearRange,
    minAge,
    maxAge,
    setAgeRange,
    nationality,
    setNationality,
    club,
    setClub,
    position,
    setPosition,
    competition,
    setCompetition,
  } = useFiltersStore();

  return (
    <Collapsible title="Personal" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Personal
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Year of Birth</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minYear}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minYear, maxYear]}
                      onValueChange={([min, max]) => setYearRange(min, max)}
                      min={1982}
                      max={2008}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground text-left">
                      {maxYear}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Age</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minAge}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minAge, maxAge]}
                      onValueChange={([min, max]) => setAgeRange(min, max)}
                      min={16}
                      max={41}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground text-left">
                      {maxAge}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="flex items-center w-full gap-2">
                    <span className="whitespace-nowrap w-24">Nationality</span>
                    <input
                      type="text"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      placeholder="3 letters abbr"
                      className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
                    />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="flex items-center w-full gap-2">
                    <span className="whitespace-nowrap w-24">Club</span>
                    <input
                      type="text"
                      value={club}
                      onChange={(e) => setClub(e.target.value)}
                      placeholder="Team/Squad"
                      className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
                    />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="flex items-center w-full gap-2">
                    <span className="whitespace-nowrap w-24">Position</span>
                    <select
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
                    >
                      <option value="">All Positions</option>
                      <option value="GK">Goalkeeper</option>
                      <option value="DF">Defender</option>
                      <option value="MF">Midfielder</option>
                      <option value="FW">Forward</option>
                      <option value="DF-MF">Defender-Midfielder</option>
                      <option value="MF-FW">Midfielder-Forward</option>
                      <option value="DF-FW">Defender-Forward</option>
                      <option value="GK-DF">Goalkeeper-Defender</option>
                    </select>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="flex items-center w-full gap-2">
                    <span className="whitespace-nowrap w-24">Competition</span>
                    <select
                      value={competition}
                      onChange={(e) => setCompetition(e.target.value)}
                      className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
                    >
                      <option value="">All Competitions</option>
                      <option value="Premier League">Premier League</option>
                      <option value="La Liga">La Liga</option>
                      <option value="Serie A">Serie A</option>
                      <option value="Bundesliga">Bundesliga</option>
                      <option value="Ligue 1">Ligue 1</option>
                    </select>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
