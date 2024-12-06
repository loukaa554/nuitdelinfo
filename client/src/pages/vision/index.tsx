import React, { useState } from "react";
import { AppSidebar } from "@/components/vision/app-sidebar";
import { Component as Component } from "@/components/vision/Component";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  // État pour la section active
  const [activeSection, setActiveSection] = useState("Administering");
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <div className="dashboard flex flex-1 flex-col gap-4 p-4">
            {/* Première sous-div : Section pour les statistiques principales */}
            <div className="max-h-[10vh] aspect-video rounded-xl bg-muted/50 flex items-center justify-between p-4">
              <div className="flex flex-col items-start gap-1">
                <h2 className="text-xl font-bold">Bienvenue, Admin !</h2>
                <p className="text-sm text-muted-foreground">
                  Voici un aperçu rapide de vos données.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold">45</h3>
                  <p className="text-xs text-muted-foreground">Connexions</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold">25</h3>
                  <p className="text-xs text-muted-foreground">Utilisateurs</p>
                </div>
              </div>
            </div>

            {/* Deuxième sous-div : Section pour les graphiques */}
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Graphique des ventes */}
                <div className="rounded-lg p-4 shadow-md">
                  <h3 className="text-md font-bold">Performances</h3>
                  <div className="mt-4">
                    {/* Intégration du graphique */}
                    {/*<ChartComponent />*/}
                  </div>
                </div>

                {/* Activité récente */}
                <div className="rounded-lg p-4 shadow-md">
                  <h3 className="text-md font-bold">Dernière connexion</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Hier</span>
                      <span className="text-xs text-muted-foreground">
                        2 heures
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">26/07/25</span>
                      <span className="text-xs text-muted-foreground">
                        3 heures
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case "Data":
        return (
          <div className="analytics flex flex-1 flex-col gap-4 p-4">
            {/* Section graphique */}
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="flex flex-col h-full rounded-xl bg-muted/50 p-4">
                <h3 className="text-md font-bold mb-2">Performances</h3>
                {/* Composant graphique */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <Component />
                </div>
              </div>

              <div className="aspect-video rounded-xl bg-muted/50 md:col-span-2" />
            </div>

            {/* Autre contenu */}
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        );

      case "Users":
        return (
          <div className="users flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        );
      default:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Page Not Found</h2>
            <p>Please select a valid page from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar
        onSectionChange={(
          section: React.SetStateAction<string>,
          page: React.SetStateAction<string>
        ) => {
          setActiveSection(section);
          setActivePage(page);
        }}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">{activeSection}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{activePage}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {renderContent()} {/* Contenu dynamique basé sur activePage */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
