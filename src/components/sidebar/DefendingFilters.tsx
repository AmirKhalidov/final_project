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

export function DefendingFilters() {
  const {
    minTkl,
    maxTkl,
    setTklRange,
    minTklW,
    maxTklW,
    setTklWRange,
    minTklInt,
    maxTklInt,
    setTklIntRange,
    minTklPct,
    maxTklPct,
    setTklPctRange,
    minInt,
    maxInt,
    setIntRange,
    minBlocks,
    maxBlocks,
    setBlocksRange,
    minClr,
    maxClr,
    setClrRange,
    minErr,
    maxErr,
    setErrRange,
    minLost,
    maxLost,
    setLostRange,
    minWon,
    maxWon,
    setWonRange,
    minWonPct,
    maxWonPct,
    setWonPctRange,
    minFld,
    maxFld,
    setFldRange,
    minFls,
    maxFls,
    setFlsRange,
    minCrdY,
    maxCrdY,
    setCrdYRange,
    minCrdR,
    maxCrdR,
    setCrdRRange,
    min2CrdY,
    max2CrdY,
    set2CrdYRange,
    minPKwon,
    maxPKwon,
    setPKwonRange,
    minPKcon,
    maxPKcon,
    setPKconRange,
  } = useFiltersStore();

  return (
    <Collapsible title="Defending" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Defending
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Tackles</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minTkl}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minTkl, maxTkl]}
                      onValueChange={([min, max]) => setTklRange(min, max)}
                      min={0}
                      max={133}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxTkl}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Tackles Won</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minTklW}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minTklW, maxTklW]}
                      onValueChange={([min, max]) => setTklWRange(min, max)}
                      min={0}
                      max={80}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxTklW}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Tackles+Intrs</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minTklInt}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minTklInt, maxTklInt]}
                      onValueChange={([min, max]) => setTklIntRange(min, max)}
                      min={0}
                      max={181}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxTklInt}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Tackle Success%</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minTklPct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minTklPct, maxTklPct]}
                      onValueChange={([min, max]) => setTklPctRange(min, max)}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxTklPct}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Interceptions</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minInt}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minInt, maxInt]}
                      onValueChange={([min, max]) => setIntRange(min, max)}
                      min={0}
                      max={72}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxInt}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Blocks</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minBlocks}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minBlocks, maxBlocks]}
                      onValueChange={([min, max]) => setBlocksRange(min, max)}
                      min={0}
                      max={75}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxBlocks}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Clearances</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minClr}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minClr, maxClr]}
                      onValueChange={([min, max]) => setClrRange(min, max)}
                      min={0}
                      max={249}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxClr}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Errors</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minErr}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minErr, maxErr]}
                      onValueChange={([min, max]) => setErrRange(min, max)}
                      min={0}
                      max={10}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxErr}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Possession Lost</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minLost}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minLost, maxLost]}
                      onValueChange={([min, max]) => setLostRange(min, max)}
                      min={0}
                      max={63}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxLost}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Duels Won</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minWon}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minWon, maxWon]}
                      onValueChange={([min, max]) => setWonRange(min, max)}
                      min={0}
                      max={164}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxWon}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Duels Won %</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minWonPct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minWonPct, maxWonPct]}
                      onValueChange={([min, max]) => setWonPctRange(min, max)}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxWonPct}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Fouls Drawn</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minFld}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minFld, maxFld]}
                      onValueChange={([min, max]) => setFldRange(min, max)}
                      min={0}
                      max={18}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxFld}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Fouls Committed</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minFls}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minFls, maxFls]}
                      onValueChange={([min, max]) => setFlsRange(min, max)}
                      min={0}
                      max={83}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxFls}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Yellow Cards</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCrdY}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCrdY, maxCrdY]}
                      onValueChange={([min, max]) => setCrdYRange(min, max)}
                      min={0}
                      max={15}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCrdY}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Red Cards</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minCrdR}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minCrdR, maxCrdR]}
                      onValueChange={([min, max]) => setCrdRRange(min, max)}
                      min={0}
                      max={3}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxCrdR}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Second Yell Cards</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {min2CrdY}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[min2CrdY, max2CrdY]}
                      onValueChange={([min, max]) => set2CrdYRange(min, max)}
                      min={0}
                      max={2}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {max2CrdY}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Penalties Won</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPKwon}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPKwon, maxPKwon]}
                      onValueChange={([min, max]) => setPKwonRange(min, max)}
                      min={0}
                      max={5}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPKwon}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Penalties Conc</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minPKcon}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minPKcon, maxPKcon]}
                      onValueChange={([min, max]) => setPKconRange(min, max)}
                      min={0}
                      max={4}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxPKcon}
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
