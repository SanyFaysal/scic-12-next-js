import DashbaordNavbar from "@/components/module/Dashboard/DashbaordNavbar";
import DashbaordSidebar from "@/components/module/Dashboard/DashbaordSidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100 text-black">
            <DashbaordSidebar />
            <div className="flex-1 flex flex-col">
                <DashbaordNavbar />
                <main className="p-6 flex-1">{children}</main>
            </div>
        </div>
    );
}