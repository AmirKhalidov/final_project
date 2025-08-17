import * as React from "react";
import { ChevronRight } from "lucide-react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useFiltersStore } from "@/stores/useFiltersStore";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {
    searchValue,
    minYear,
    maxYear,
    minAge,
    maxAge,
    nationality,
    club,
    position,
    competition,
    minCarries,
    maxCarries,
    setSearchValue,
    setYearRange,
    setAgeRange,
    setNationality,
    setClub,
    setPosition,
    setCompetition,
    setCarriesRange,
    resetFilters,

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
    minAtt,
    maxAtt,
    setAttRange,
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
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={["1.0.1", "1.1.0-alpha", "2.0.0-beta1"]}
          defaultVersion="1.0.1"
        />
        <SearchForm
          onSearch={setSearchValue}
          value={searchValue}
          onValueChange={setSearchValue}
        />
      </SidebarHeader>
      <SidebarContent className="gap-0">
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
                        <span className="whitespace-nowrap">
                          Year of Birth
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minYear}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minYear, maxYear]}
                            onValueChange={([min, max]) =>
                              setYearRange(min, max)
                            }
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
                            onValueChange={([min, max]) =>
                              setAgeRange(min, max)
                            }
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
                        <span className="whitespace-nowrap w-24">
                          Nationality
                        </span>
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
                          <option value="">All</option>
                          <option value="FW">FW</option>
                          <option value="FW,MF">FW,MF</option>
                          <option value="MF,FW">MF,FW</option>
                          <option value="MF">MF</option>
                          <option value="DF,FW">DF,FW</option>
                          <option value="MF,DF">MF,DF</option>
                          <option value="DF">DF</option>
                          <option value="GK">GK</option>
                        </select>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <div className="flex items-center w-full gap-2">
                        <span className="whitespace-nowrap w-24">
                          Competition
                        </span>
                        <select
                          value={competition}
                          onChange={(e) => setCompetition(e.target.value)}
                          className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
                        >
                          <option value="">All</option>
                          <option value="de Bundesliga">Bundesliga</option>
                          <option value="eng Premier League">
                            Premier League
                          </option>
                          <option value="es La Liga">La Liga</option>
                          <option value="fr Ligue 1">Ligue 1</option>
                          <option value="it Serie A">Serie A</option>
                        </select>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

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
                          onValueChange={([min, max]) =>
                            setCarriesRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Progress Carries
                        </span>
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
                        <span className="whitespace-nowrap">
                          Prog Carry Dist
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minPrgDist}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minPrgDist, maxPrgDist]}
                            onValueChange={([min, max]) =>
                              setPrgDistRange(min, max)
                            }
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
                        <span className="whitespace-nowrap">
                          Progressive Runs
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minPrgR}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minPrgR, maxPrgR]}
                            onValueChange={([min, max]) =>
                              setPrgRRange(min, max)
                            }
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
                        <span className="whitespace-nowrap">
                          Miscontrols
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minMis}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minMis, maxMis]}
                            onValueChange={([min, max]) =>
                              setMisRange(min, max)
                            }
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
                        <span className="whitespace-nowrap">
                          Dispossessed
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minDis}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minDis, maxDis]}
                            onValueChange={([min, max]) =>
                              setDisRange(min, max)
                            }
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
                        <span className="whitespace-nowrap">
                          Dribbles Attempt
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minAtt}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minAtt, maxAtt]}
                            onValueChange={([min, max]) =>
                              setAttRange(min, max)
                            }
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
                        <span className="whitespace-nowrap">
                          Success Dribbles
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minSucc}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minSucc, maxSucc]}
                            onValueChange={([min, max]) =>
                              setSuccRange(min, max)
                            }
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
                        <span className="whitespace-nowrap">
                          Dribble Success%
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minSuccPct}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minSuccPct, maxSuccPct]}
                            onValueChange={([min, max]) =>
                              setSuccPctRange(min, max)
                            }
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
                        <span className="whitespace-nowrap">
                          Dribbles Att3rd
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minAtt3rd}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minAtt3rd, maxAtt3rd]}
                            onValueChange={([min, max]) =>
                              setAtt3rdRange(min, max)
                            }
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
                        <span className="whitespace-nowrap">
                          Dribb PenArea
                        </span>
                          <span className="text-xs text-muted-foreground text-right">
                            {minAttPen}
                          </span>
                          <DualRangeSlider
                            label={undefined}
                            labelPosition="bottom"
                            value={[minAttPen, maxAttPen]}
                            onValueChange={([min, max]) =>
                              setAttPenRange(min, max)
                            }
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


        
      </SidebarContent>

      <div className="p-4 mt-auto">
        <Button
          variant="outline"
          className="w-full cursor-pointer"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
