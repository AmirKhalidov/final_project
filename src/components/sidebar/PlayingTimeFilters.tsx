import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useFiltersStore } from "@/stores/useFiltersStore";

export function PlayingTimeFilters() {
  const {
    minMP,
    maxMP,
    setMPRange,
    minMin,
    maxMin,
    setMinRange,
    minMinPct,
    maxMinPct,
    setMinPctRange,
    minStarts,
    maxStarts,
    setStartsRange,
    minIn,
    maxIn,
    setInRange,
    minMnPerMP,
    maxMnPerMP,
    setMnPerMPRange,
    minMnPerStart,
    maxMnPerStart,
    setMnPerStartRange,
    minMnPerSub,
    maxMnPerSub,
    setMnPerSubRange,
    minUnSub,
    maxUnSub,
    setUnSubRange,
  } = useFiltersStore();

  return (
    <Collapsible title="Playing Time" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Playing Time
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Matches Played</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minMP}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minMP, maxMP]}
                      onValueChange={([min, max]) => setMPRange(min, max)}
                      min={1}
                      max={38}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxMP}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Minutes Played</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minMin}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minMin, maxMin]}
                      onValueChange={([min, max]) => setMinRange(min, max)}
                      min={1}
                      max={3420}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxMin}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Team Minutes%</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minMinPct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minMinPct, maxMinPct]}
                      onValueChange={([min, max]) => setMinPctRange(min, max)}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxMinPct}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Games Started</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minStarts}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minStarts, maxStarts]}
                      onValueChange={([min, max]) => setStartsRange(min, max)}
                      min={0}
                      max={38}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxStarts}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Substitute Ins</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minIn}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minIn, maxIn]}
                      onValueChange={([min, max]) => setInRange(min, max)}
                      min={0}
                      max={29}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxIn}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Minutes/Match</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minMnPerMP}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minMnPerMP, maxMnPerMP]}
                      onValueChange={([min, max]) => setMnPerMPRange(min, max)}
                      min={1}
                      max={90}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxMnPerMP}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Minutes per Start</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minMnPerStart}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minMnPerStart, maxMnPerStart]}
                      onValueChange={([min, max]) =>
                        setMnPerStartRange(min, max)
                      }
                      min={9}
                      max={90}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxMnPerStart}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Minutes per Sub</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minMnPerSub}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minMnPerSub, maxMnPerSub]}
                      onValueChange={([min, max]) => setMnPerSubRange(min, max)}
                      min={1}
                      max={76}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxMnPerSub}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Unused Sub</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minUnSub}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minUnSub, maxUnSub]}
                      onValueChange={([min, max]) => setUnSubRange(min, max)}
                      min={0}
                      max={37}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxUnSub}
                    </span>
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
