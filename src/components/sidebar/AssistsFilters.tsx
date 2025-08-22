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

export function AssistsFilters() {
  const {
    minAst,
    maxAst,
    setAstRange,
    minxA,
    maxxA,
    setxARange,
    minxAG,
    maxxAG,
    setxAGRange,
    minKP,
    maxKP,
    setKPRange,
    minSCA,
    maxSCA,
    setSCARange,
    minSCA90,
    maxSCA90,
    setSCA90Range,
    minGCA,
    maxGCA,
    setGCARange,
    minGCA90,
    maxGCA90,
    setGCA90Range,
  } = useFiltersStore();

  return (
    <Collapsible title="Assists & Creation" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Assists & Creation
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Assists</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minAst}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minAst, maxAst]}
                      onValueChange={([min, max]) => setAstRange(min, max)}
                      min={0}
                      max={18}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxAst}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Expctd Assists</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minxA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minxA, maxxA]}
                      onValueChange={([min, max]) => setxARange(min, max)}
                      min={0}
                      max={12.6}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxxA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Expctd AstGoals</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minxAG}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minxAG, maxxAG]}
                      onValueChange={([min, max]) => setxAGRange(min, max)}
                      min={0}
                      max={14.2}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxxAG}
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
                    <span className="whitespace-nowrap">Shot Create Acts</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSCA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSCA, maxSCA]}
                      onValueChange={([min, max]) => setSCARange(min, max)}
                      min={0}
                      max={202}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSCA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">SCA per 90</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSCA90}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSCA90, maxSCA90]}
                      onValueChange={([min, max]) => setSCA90Range(min, max)}
                      min={0}
                      max={48.46}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSCA90}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Goal Create Acts</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGCA}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGCA, maxGCA]}
                      onValueChange={([min, max]) => setGCARange(min, max)}
                      min={0}
                      max={29}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGCA}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">GCA per 90</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minGCA90}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minGCA90, maxGCA90]}
                      onValueChange={([min, max]) => setGCA90Range(min, max)}
                      min={0}
                      max={12.86}
                      step={0.01}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxGCA90}
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
