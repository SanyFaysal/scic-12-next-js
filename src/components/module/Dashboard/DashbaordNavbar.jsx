export default function DashbaordNavbar() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex items-center gap-3">
                <span className="hidden md:inline text-gray-700">John Doe</span>

            </div>
        </header>
    );
}
