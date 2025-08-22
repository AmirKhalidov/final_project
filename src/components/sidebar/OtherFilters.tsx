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

export function OtherFilters() {
  const {
    minPPM,
    maxPPM,
    setPPMRange,
    minRec,
    maxRec,
    setRecRange,
    minRecov,
    maxRecov,
    setRecovRange,
    minTouches,
    maxTouches,
    setTouchesRange,
    minFK,
    maxFK,
    setFKRange,
    minCK,
    maxCK,
    setCKRange,
    minTI,
    maxTI,
    setTIRange,
    minLive,
    maxLive,
    setLiveRange,
    minDead,
    maxDead,
    setDeadRange,
  } = useFiltersStore();

  return (
    <Collapsible title="Other" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Other
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Points Per Match</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPPM}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPPM, maxPPM]}
                      onValueChange={([min, max]) => setPPMRange(min, max)}
                      min={0}
                      max={3}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPPM}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Passes Received</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minRec}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minRec, maxRec]}
                      onValueChange={([min, max]) => setRecRange(min, max)}
                      min={0}
                      max={3047}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxRec}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Recoveries</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minRecov}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minRecov, maxRecov]}
                      onValueChange={([min, max]) => setRecovRange(min, max)}
                      min={0}
                      max={254}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxRecov}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Touches</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minTouches}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minTouches, maxTouches]}
                      onValueChange={([min, max]) => setTouchesRange(min, max)}
                      min={0}
                      max={3867}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxTouches}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Free Kicks</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minFK}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minFK, maxFK]}
                      onValueChange={([min, max]) => setFKRange(min, max)}
                      min={0}
                      max={20}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxFK}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Corner Kicks</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCK}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCK, maxCK]}
                      onValueChange={([min, max]) => setCKRange(min, max)}
                      min={0}
                      max={140}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCK}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Throw-Ins</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minTI}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minTI, maxTI]}
                      onValueChange={([min, max]) => setTIRange(min, max)}
                      min={0}
                      max={399}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxTI}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Live Ball</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minLive}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minLive, maxLive]}
                      onValueChange={([min, max]) => setLiveRange(min, max)}
                      min={0}
                      max={3354}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxLive}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Dead Ball</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minDead}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minDead, maxDead]}
                      onValueChange={([min, max]) => setDeadRange(min, max)}
                      min={0}
                      max={462}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxDead}
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
