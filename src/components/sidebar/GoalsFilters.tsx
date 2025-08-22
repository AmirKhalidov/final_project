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

export function GoalsFilters() {
  const {
    minGls,
    maxGls,
    setGlsRange,
    minGlsMinusPK,
    maxGlsMinusPK,
    setGlsMinusPKRange,
    minGlsMinusxG,
    maxGlsMinusxG,
    setGlsMinusxGRange,
    minGlsPerSh,
    maxGlsPerSh,
    setGlsPerShRange,
    minGlsPerSoT,
    maxGlsPerSoT,
    setGlsPerSoTRange,
    minGplusA,
    maxGplusA,
    setGplusARange,
    minGplusAminusPK,
    maxGplusAminusPK,
    setGplusAminusPKRange,
    minOG,
    maxOG,
    setOGRange,
    minxG,
    maxxG,
    setxGRange,
    minnpxG,
    maxnpxG,
    setnpxGRange,
  } = useFiltersStore();

  return (
    <Collapsible title="Goals & Scoring" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Goals & Scoring
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGls}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGls, maxGls]}
                      onValueChange={([min, max]) => setGlsRange(min, max)}
                      min={0}
                      max={31}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGls}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals minus Pen</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGlsMinusPK}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGlsMinusPK, maxGlsMinusPK]}
                      onValueChange={([min, max]) =>
                        setGlsMinusPKRange(min, max)
                      }
                      min={0}
                      max={24}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGlsMinusPK}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals minus xG</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGlsMinusxG}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGlsMinusxG, maxGlsMinusxG]}
                      onValueChange={([min, max]) =>
                        setGlsMinusxGRange(min, max)
                      }
                      min={0}
                      max={8.3}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGlsMinusxG}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals per Shot</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGlsPerSh}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGlsPerSh, maxGlsPerSh]}
                      onValueChange={([min, max]) => setGlsPerShRange(min, max)}
                      min={0}
                      max={1}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGlsPerSh}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals/ShotTarget</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGlsPerSoT}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGlsPerSoT, maxGlsPerSoT]}
                      onValueChange={([min, max]) =>
                        setGlsPerSoTRange(min, max)
                      }
                      min={0}
                      max={1}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGlsPerSoT}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals + Assists</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGplusA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGplusA, maxGplusA]}
                      onValueChange={([min, max]) => setGplusARange(min, max)}
                      min={0}
                      max={47}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGplusA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goals+As-Pen</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGplusAminusPK}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGplusAminusPK, maxGplusAminusPK]}
                      onValueChange={([min, max]) =>
                        setGplusAminusPKRange(min, max)
                      }
                      min={0}
                      max={2.65}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGplusAminusPK}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Own Goals</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minOG}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minOG, maxOG]}
                      onValueChange={([min, max]) => setOGRange(min, max)}
                      min={0}
                      max={3}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxOG}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">xG</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minxG}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minxG, maxxG]}
                      onValueChange={([min, max]) => setxGRange(min, max)}
                      min={0}
                      max={27.1}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxxG}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Non-penalty xG</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minnpxG}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minnpxG, maxnpxG]}
                      onValueChange={([min, max]) => setnpxGRange(min, max)}
                      min={0}
                      max={24}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxnpxG}
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
