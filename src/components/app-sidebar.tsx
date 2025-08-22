import * as React from "react";
import { ChevronRight } from "lucide-react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import Logo from "@/assets/logo7.webp";
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
import { Link } from "react-router";

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
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/">
          <img src={Logo} alt="Logo" className="" />
        </Link>
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
                        <span className="whitespace-nowrap">Year of Birth</span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minYear}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minYear, maxYear]}
                          onValueChange={([min, max]) => setYearRange(min, max)}
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
                          onValueChange={([min, max]) => setAgeRange(min, max)}
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
                        <span className="whitespace-nowrap">Dribb PenArea</span>
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
                        <span className="whitespace-nowrap">
                          Shots on Target
                        </span>
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
                        <span className="whitespace-nowrap">
                          Shots on Target%
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minSoTPct}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minSoTPct, maxSoTPct]}
                          onValueChange={([min, max]) =>
                            setSoTPctRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Shots Target/90
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minSoT90}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minSoT90, maxSoT90]}
                          onValueChange={([min, max]) =>
                            setSoT90Range(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Goals minus Pen
                        </span>
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
                        <span className="whitespace-nowrap">
                          Goals minus xG
                        </span>
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
                        <span className="whitespace-nowrap">
                          Goals per Shot
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minGlsPerSh}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minGlsPerSh, maxGlsPerSh]}
                          onValueChange={([min, max]) =>
                            setGlsPerShRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Goals/ShotTarget
                        </span>
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
                        <span className="whitespace-nowrap">
                          Goals + Assists
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minGplusA}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minGplusA, maxGplusA]}
                          onValueChange={([min, max]) =>
                            setGplusARange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Non-penalty xG
                        </span>
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
                        <span className="whitespace-nowrap">
                          Expctd Assists
                        </span>
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
                        <span className="whitespace-nowrap">
                          Expctd AstGoals
                        </span>
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
                        <span className="whitespace-nowrap">
                          Shot Create Acts
                        </span>
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
                          onValueChange={([min, max]) =>
                            setSCA90Range(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Goal Create Acts
                        </span>
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
                          onValueChange={([min, max]) =>
                            setGCA90Range(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setCmpPctRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Passes Attmptd
                        </span>
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
                        <span className="whitespace-nowrap">
                          Passes to PenAr
                        </span>
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
                        <span className="whitespace-nowrap">
                          Crosses to PenAr
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minCrsPA}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minCrsPA, maxCrsPA]}
                          onValueChange={([min, max]) =>
                            setCrsPARange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setTklIntRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Tackle Success%
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minTklPct}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minTklPct, maxTklPct]}
                          onValueChange={([min, max]) =>
                            setTklPctRange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setBlocksRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Possession Lost
                        </span>
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
                          onValueChange={([min, max]) =>
                            setWonPctRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Fouls Committed
                        </span>
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
                        <span className="whitespace-nowrap">
                          Second Yell Cards
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {min2CrdY}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[min2CrdY, max2CrdY]}
                          onValueChange={([min, max]) =>
                            set2CrdYRange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setPKwonRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Penalties Conc
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minPKcon}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minPKcon, maxPKcon]}
                          onValueChange={([min, max]) =>
                            setPKconRange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setCSPctRange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setSavesRange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setSavePctRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Goals Agnst/90
                        </span>
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
                        <span className="whitespace-nowrap">
                          ShotsTrgt agnst
                        </span>
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
                        <span className="whitespace-nowrap">
                          Penalties Against
                        </span>
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
                        <span className="whitespace-nowrap">
                          Avrg Shot Dist
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minAvgDist}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minAvgDist, maxAvgDist]}
                          onValueChange={([min, max]) =>
                            setAvgDistRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Avrg Punt Leng
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minAvgLen}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minAvgLen, maxAvgLen]}
                          onValueChange={([min, max]) =>
                            setAvgLenRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Matches Played
                        </span>
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
                        <span className="whitespace-nowrap">
                          Minutes Played
                        </span>
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
                          onValueChange={([min, max]) =>
                            setMinPctRange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setStartsRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Substitute Ins
                        </span>
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
                          onValueChange={([min, max]) =>
                            setMnPerMPRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Minutes per Start
                        </span>
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
                        <span className="whitespace-nowrap">
                          Minutes per Sub
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {minMnPerSub}
                        </span>
                        <DualRangeSlider
                          label={undefined}
                          labelPosition="bottom"
                          value={[minMnPerSub, maxMnPerSub]}
                          onValueChange={([min, max]) =>
                            setMnPerSubRange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setUnSubRange(min, max)
                          }
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
                        <span className="whitespace-nowrap">
                          Points Per Match
                        </span>
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
                        <span className="whitespace-nowrap">
                          Passes Received
                        </span>
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
                          onValueChange={([min, max]) =>
                            setRecovRange(min, max)
                          }
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
                          onValueChange={([min, max]) =>
                            setTouchesRange(min, max)
                          }
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
