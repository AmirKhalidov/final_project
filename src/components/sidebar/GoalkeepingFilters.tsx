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

export function GoalkeepingFilters() {
  const {
    minCS,
    maxCS,
    setCSRange,
    minCSPct,
    maxCSPct,
    setCSPctRange,
    minSaves,
    maxSaves,
    setSavesRange,
    minSavePct,
    maxSavePct,
    setSavePctRange,
    minGA,
    maxGA,
    setGARange,
    minGA90,
    maxGA90,
    setGA90Range,
    minSoTA,
    maxSoTA,
    setSoTARange,
    minPSxG,
    maxPSxG,
    setPSxGRange,
    minPSxGPlusMinus,
    maxPSxGPlusMinus,
    setPSxGPlusMinusRange,
    minPKA,
    maxPKA,
    setPKARange,
    minPKsv,
    maxPKsv,
    setPKsvRange,
    minAvgDist,
    maxAvgDist,
    setAvgDistRange,
    minAvgLen,
    maxAvgLen,
    setAvgLenRange,
    minLaunchPct,
    maxLaunchPct,
    setLaunchPctRange,
  } = useFiltersStore();

  return (
    <Collapsible title="Goalkeeping" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Goalkeeping
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Clean Sheets</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCS}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCS, maxCS]}
                      onValueChange={([min, max]) => setCSRange(min, max)}
                      min={0}
                      max={16}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCS}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Clean Sheet%</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCSPct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCSPct, maxCSPct]}
                      onValueChange={([min, max]) => setCSPctRange(min, max)}
                      min={0}
                      max={200}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCSPct}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Saves</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSaves}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSaves, maxSaves]}
                      onValueChange={([min, max]) => setSavesRange(min, max)}
                      min={0}
                      max={150}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSaves}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Save%</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSavePct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSavePct, maxSavePct]}
                      onValueChange={([min, max]) => setSavePctRange(min, max)}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSavePct}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals Against</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGA, maxGA]}
                      onValueChange={([min, max]) => setGARange(min, max)}
                      min={0}
                      max={77}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals Agnst/90</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGA90}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGA90, maxGA90]}
                      onValueChange={([min, max]) => setGA90Range(min, max)}
                      min={0}
                      max={4.58}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGA90}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">ShotsTrgt agnst</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSoTA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSoTA, maxSoTA]}
                      onValueChange={([min, max]) => setSoTARange(min, max)}
                      min={0}
                      max={209}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSoTA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Post-Shot xG</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPSxG}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPSxG, maxPSxG]}
                      onValueChange={([min, max]) => setPSxGRange(min, max)}
                      min={0}
                      max={73.5}
                      step={0.1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPSxG}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">PSxG +/-</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPSxGPlusMinus}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPSxGPlusMinus, maxPSxGPlusMinus]}
                      onValueChange={([min, max]) =>
                        setPSxGPlusMinusRange(min, max)
                      }
                      min={0}
                      max={14.6}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPSxGPlusMinus}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Penalties Against</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPKA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPKA, maxPKA]}
                      onValueChange={([min, max]) => setPKARange(min, max)}
                      min={0}
                      max={13}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPKA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Penalty Saves</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPKsv}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPKsv, maxPKsv]}
                      onValueChange={([min, max]) => setPKsvRange(min, max)}
                      min={0}
                      max={4}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPKsv}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Avrg Shot Dist</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minAvgDist}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minAvgDist, maxAvgDist]}
                      onValueChange={([min, max]) => setAvgDistRange(min, max)}
                      min={2}
                      max={28}
                      step={0.1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxAvgDist}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Avrg Punt Leng</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minAvgLen}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minAvgLen, maxAvgLen]}
                      onValueChange={([min, max]) => setAvgLenRange(min, max)}
                      min={6}
                      max={56.3}
                      step={0.1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxAvgLen}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Long Ball%</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minLaunchPct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minLaunchPct, maxLaunchPct]}
                      onValueChange={([min, max]) =>
                        setLaunchPctRange(min, max)
                      }
                      min={0}
                      max={92.3}
                      step={0.1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxLaunchPct}
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
