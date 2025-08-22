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

export function ShootingFilters() {
  const {
    minSh,
    maxSh,
    setShRange,
    minSoT,
    maxSoT,
    setSoTRange,
    minSoTPct,
    maxSoTPct,
    setSoTPctRange,
    minSh90,
    maxSh90,
    setSh90Range,
    minSoT90,
    maxSoT90,
    setSoT90Range,
  } = useFiltersStore();

  return (
    <Collapsible title="Shooting" className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
        >
          <CollapsibleTrigger>
            Shooting
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Shots</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSh}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSh, maxSh]}
                      onValueChange={([min, max]) => setShRange(min, max)}
                      min={0}
                      max={152}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSh}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Shots on Target</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSoT}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSoT, maxSoT]}
                      onValueChange={([min, max]) => setSoTRange(min, max)}
                      min={0}
                      max={75}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSoT}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Shots on Target%</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSoTPct}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSoTPct, maxSoTPct]}
                      onValueChange={([min, max]) => setSoTPctRange(min, max)}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSoTPct}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Shots per 90</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSh90}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSh90, maxSh90]}
                      onValueChange={([min, max]) => setSh90Range(min, max)}
                      min={0}
                      max={90}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSh90}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="grid w-full items-center [grid-template-columns:92px_26px_80px_20px] gap-[6px]">
                    <span className="whitespace-nowrap">Shots Target/90</span>
                    <span className="text-xs text-muted-foreground text-right">
                      {minSoT90}
                    </span>
                    <DualRangeSlider
                      label={undefined}
                      labelPosition="bottom"
                      value={[minSoT90, maxSoT90]}
                      onValueChange={([min, max]) => setSoT90Range(min, max)}
                      min={0}
                      max={90}
                      step={1}
                    />
                    <span className="text-xs text-muted-foreground">
                      {maxSoT90}
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
