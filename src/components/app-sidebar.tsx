// import * as React from "react";
// import { ChevronRight } from "lucide-react";
// import { DualRangeSlider } from "@/components/ui/dual-range-slider";

// import { SearchForm } from "@/components/search-form";
// import { VersionSwitcher } from "@/components/version-switcher";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar";

// export function AppSidebar({
//   onSearch,
//   searchValue,
//   onSearchValueChange,
//   yearRange = [1982, 2008],
//   onYearRangeChange,
//   ageRange = [16, 41],
//   onAgeRangeChange,
//   nationality,
//   onNationalityChange,
//   club,
//   onClubChange,
//   position,
//   onPositionChange,
//   competition,
//   onCompetitionChange,
//   ...props
// }: React.ComponentProps<typeof Sidebar> & {
//   onSearch?: (name: string) => void;
//   searchValue?: string;
//   onSearchValueChange?: (value: string) => void;
//   yearRange?: [number, number];
//   onYearRangeChange?: (range: [number, number]) => void;
//   ageRange?: [number, number];
//   onAgeRangeChange?: (range: [number, number]) => void;
//   nationality?: string;
//   onNationalityChange?: (value: string) => void;
//   club?: string;
//   onClubChange?: (value: string) => void;
//   position?: string;
//   onPositionChange?: (value: string) => void;
//   competition?: string;
//   onCompetitionChange?: (value: string) => void;
// }) {
//   return (
//     <Sidebar {...props}>
//       <SidebarHeader>
//         <VersionSwitcher
//           versions={["1.0.1", "1.1.0-alpha", "2.0.0-beta1"]}
//           defaultVersion="1.0.1"
//         />
//         <SearchForm
//           onSearch={onSearch}
//           value={searchValue}
//           onValueChange={onSearchValueChange}
//         />
//       </SidebarHeader>
//       <SidebarContent className="gap-0">
//         <Collapsible title="Personal" className="group/collapsible">
//           <SidebarGroup>
//             <SidebarGroupLabel
//               asChild
//               className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer"
//             >
//               <CollapsibleTrigger>
//                 Personal
//                 <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
//               </CollapsibleTrigger>
//             </SidebarGroupLabel>
//             <CollapsibleContent>
//               <SidebarGroupContent>
//                 <SidebarMenu>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton>
//                       <div className="flex items-center w-full gap-0">
//                         <span className="whitespace-nowrap w-2/5">
//                           Year of Birth
//                         </span>
//                         <div className="flex-1 flex items-center gap-0 justify-around">
//                           <span className="text-xs text-muted-foreground">
//                             {yearRange[0]}
//                           </span>
//                           <DualRangeSlider
//                             label={undefined}
//                             labelPosition="bottom"
//                             value={yearRange}
//                             onValueChange={onYearRangeChange}
//                             min={1982}
//                             max={2008}
//                             step={1}
//                           />
//                           <span className="text-xs text-muted-foreground">
//                             {yearRange[1]}
//                           </span>
//                         </div>
//                       </div>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton>
//                       <div className="flex items-center w-full gap-0">
//                         <span className="whitespace-nowrap w-2/5">Age</span>
//                         <div className="flex-1 flex items-center gap-2 justify-center">
//                           <span className="text-xs text-muted-foreground">
//                             {ageRange[0]}
//                           </span>
//                           <DualRangeSlider
//                             label={undefined}
//                             labelPosition="bottom"
//                             value={ageRange}
//                             onValueChange={onAgeRangeChange}
//                             min={16}
//                             max={41}
//                             step={1}
//                           />
//                           <span className="text-xs text-muted-foreground">
//                             {ageRange[1]}
//                           </span>
//                         </div>
//                       </div>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton>
//                       <div className="flex items-center w-full gap-2">
//                         <span className="whitespace-nowrap w-24">
//                           Nationality
//                         </span>
//                         <input
//                           type="text"
//                           value={nationality}
//                           onChange={(e) =>
//                             onNationalityChange?.(e.target.value)
//                           }
//                           placeholder="3 letters abbr"
//                           className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
//                         />
//                       </div>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton>
//                       <div className="flex items-center w-full gap-2">
//                         <span className="whitespace-nowrap w-24">Club</span>
//                         <input
//                           type="text"
//                           value={club}
//                           onChange={(e) => onClubChange?.(e.target.value)}
//                           placeholder="Team/Squad"
//                           className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
//                         />
//                       </div>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton>
//                       <div className="flex items-center w-full gap-2">
//                         <span className="whitespace-nowrap w-24">Position</span>
//                         <select
//                           value={position}
//                           onChange={(e) => onPositionChange?.(e.target.value)}
//                           className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
//                         >
//                           <option value="">All</option>
//                           <option value="FW">FW</option>
//                           <option value="FW,MF">FW,MF</option>
//                           <option value="MF,FW">MF,FW</option>
//                           <option value="MF">MF</option>
//                           <option value="DF,FW">DF,FW</option>
//                           <option value="MF,DF">MF,DF</option>
//                           <option value="DF">DF</option>
//                           <option value="GK">GK</option>
//                         </select>
//                       </div>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton>
//                       <div className="flex items-center w-full gap-2">
//                         <span className="whitespace-nowrap w-24">
//                           Competition
//                         </span>
//                         <select
//                           value={competition}
//                           onChange={(e) =>
//                             onCompetitionChange?.(e.target.value)
//                           }
//                           className="border rounded-xl px-2 py-1 text-sm flex-1 min-w-0 bg-background"
//                         >
//                           <option value="">All</option>
//                           <option value="de Bundesliga">Bundesliga</option>
//                           <option value="eng Premier League">
//                             Premier League
//                           </option>
//                           <option value="es La Liga">La Liga</option>
//                           <option value="fr Ligue 1">Ligue 1</option>
//                           <option value="it Serie A">Serie A</option>
//                         </select>
//                       </div>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 </SidebarMenu>
//               </SidebarGroupContent>
//             </CollapsibleContent>
//           </SidebarGroup>
//         </Collapsible>
//       </SidebarContent>
//       <SidebarRail />
//     </Sidebar>
//   );
// }

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";

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
    setSearchValue,
    setYearRange,
    setAgeRange,
    setNationality,
    setClub,
    setPosition,
    setCompetition,
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
                      <div className="flex items-center w-full gap-0">
                        <span className="whitespace-nowrap w-2/5">
                          Year of Birth
                        </span>
                        <div className="flex-1 flex items-center gap-0 justify-around">
                          <span className="text-xs text-muted-foreground">
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
                          <span className="text-xs text-muted-foreground">
                            {maxYear}
                          </span>
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <div className="flex items-center w-full gap-0">
                        <span className="whitespace-nowrap w-2/5">Age</span>
                        <div className="flex-1 flex items-center gap-2 justify-center">
                          <span className="text-xs text-muted-foreground">
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
                          <span className="text-xs text-muted-foreground">
                            {maxAge}
                          </span>
                        </div>
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
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
