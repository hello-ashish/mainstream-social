import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="md:ml-[72px] lg:ml-[240px] pb-16 md:pb-0 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
