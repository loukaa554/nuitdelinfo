import { LogOut } from "lucide-react"; // Import de l'icône LogOut
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function VersionSwitcher() {
  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    // Exemple : rediriger vers la page de login
    window.location.href = "/login"; // Modifiez l'URL selon votre application
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center w-full mt-5">
          {/* Informations de l'entreprise à gauche */}
          <a href="#" className="flex items-center flex-grow gap-2">
            <div className="aspect-square w-8 h-8 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground flex items-center justify-center hover:bg-sidebar-hover hover:scale-110 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-command size-4"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
            </div>
            <div className="grid text-left text-sm leading-tight">
              <span className="truncate font-semibold">Acme Inc</span>
              <span className="truncate text-xs">Enterprise</span>
            </div>
          </a>
          <button
            onClick={handleLogout} // Action au clic
            className="flex items-center justify-center p-2 text-gray-700 hover:bg-gray-300 active:bg-gray-400 rounded transition-all duration-200" title="Quitter l'espace admin" // Infobulle
          >
            <LogOut className="w-5 h-5" /> {/* Icône LogOut */}
          </button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
