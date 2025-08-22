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

export function DribblingFilters() {
  const {
    minCarries,
    maxCarries,
    setCarriesRange,
    minPrgC,
    maxPrgC,
    setPrgCRange,
    minPrgDist,
    maxPrgDist,
    setPrgDistRange,
    minPrgR,
    maxPrgR,
    setPrgRRange,
    minMis,
    maxMis,
    setMisRange,
    minDis,
    maxDis,
    setDisRange,
    minSucc,
    maxSucc,
    setSuccRange,
    minSuccPct,
    maxSuccPct,
    setSuccPctRange,
    minAtt3rd,
    maxAtt3rd,
    setAtt3rdRange,
    minAttPen,
    maxAttPen,
    setAttPenRange,
  } = useFiltersStore();

  return (
    <Collapsible title="Carries" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Dribbling & Carrying
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_84px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Carries</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCarries}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCarries, maxCarries]}
                      onValueChange={([min, max]) => setCarriesRange(min, max)}
                      min={0}
                      max={2399}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground text-left">
                      {maxCarries}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_84px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Progress Carries</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPrgC}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPrgC, maxPrgC]}
                      onValueChange={([min, max]) => setPrgCRange(min, max)}
                      min={0}
                      max={213}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground text-left">
                      {maxPrgC}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Prog Carry Dist</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPrgDist}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPrgDist, maxPrgDist]}
                      onValueChange={([min, max]) => setPrgDistRange(min, max)}
                      min={0}
                      max={25308}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPrgDist}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Progressive Runs</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPrgR}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPrgR, maxPrgR]}
                      onValueChange={([min, max]) => setPrgRRange(min, max)}
                      min={0}
                      max={488}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPrgR}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Miscontrols</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minMis}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minMis, maxMis]}
                      onValueChange={([min, max]) => setMisRange(min, max)}
                      min={0}
                      max={117}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxMis}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Dispossessed</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minDis}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minDis, maxDis]}
                      onValueChange={([min, max]) => setDisRange(min, max)}
                      min={0}
                      max={94}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxDis}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Success Dribbles</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSucc}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSucc, maxSucc]}
                      onValueChange={([min, max]) => setSuccRange(min, max)}
                      min={0}
                      max={161}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSucc}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Dribble Success%</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSuccPct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSuccPct, maxSuccPct]}
                      onValueChange={([min, max]) => setSuccPctRange(min, max)}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSuccPct}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Dribbles Att3rd</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minAtt3rd}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minAtt3rd, maxAtt3rd]}
                      onValueChange={([min, max]) => setAtt3rdRange(min, max)}
                      min={0}
                      max={27}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxAtt3rd}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Dribb PenArea</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minAttPen}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minAttPen, maxAttPen]}
                      onValueChange={([min, max]) => setAttPenRange(min, max)}
                      min={0}
                      max={356}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxAttPen}
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