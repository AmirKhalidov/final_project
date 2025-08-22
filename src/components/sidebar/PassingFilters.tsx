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

export function PassingFilters() {
  const {
    minCmp,
    maxCmp,
    setCmpRange,
    minCmpPct,
    maxCmpPct,
    setCmpPctRange,
    minAtt,
    maxAtt,
    setAttRange,
    minTB,
    maxTB,
    setTBRange,
    minKP,
    maxKP,
    setKPRange,
    minPPA,
    maxPPA,
    setPPARange,
    minCrs,
    maxCrs,
    setCrsRange,
    minCrsPA,
    maxCrsPA,
    setCrsPARange,
    minSw,
    maxSw,
    setSwRange,
    minTO,
    maxTO,
    setTORange,
  } = useFiltersStore();

  return (
    <Collapsible title="Passing" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Passing
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Passes Cmpltd</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCmp}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCmp, maxCmp]}
                      onValueChange={([min, max]) => setCmpRange(min, max)}
                      min={0}
                      max={3269}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCmp}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Pass Cmpltd%</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCmpPct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCmpPct, maxCmpPct]}
                      onValueChange={([min, max]) => setCmpPctRange(min, max)}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCmpPct}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Passes Attmptd</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minAtt}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minAtt, maxAtt]}
                      onValueChange={([min, max]) => setAttRange(min, max)}
                      min={0}
                      max={3652}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxAtt}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Through Balls</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minTB}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minTB, maxTB]}
                      onValueChange={([min, max]) => setTBRange(min, max)}
                      min={0}
                      max={33}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxTB}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Key Passes</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minKP}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minKP, maxKP]}
                      onValueChange={([min, max]) => setKPRange(min, max)}
                      min={0}
                      max={95}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxKP}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Passes to PenAr</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPPA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPPA, maxPPA]}
                      onValueChange={([min, max]) => setPPARange(min, max)}
                      min={0}
                      max={111}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPPA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Crosses</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCrs}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCrs, maxCrs]}
                      onValueChange={([min, max]) => setCrsRange(min, max)}
                      min={0}
                      max={269}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCrs}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Crosses to PenAr</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCrsPA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCrsPA, maxCrsPA]}
                      onValueChange={([min, max]) => setCrsPARange(min, max)}
                      min={0}
                      max={33}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCrsPA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Switches</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSw}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSw, maxSw]}
                      onValueChange={([min, max]) => setSwRange(min, max)}
                      min={0}
                      max={50}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSw}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Turnovers</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minTO}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minTO, maxTO]}
                      onValueChange={([min, max]) => setTORange(min, max)}
                      min={0}
                      max={38}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxTO}
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
