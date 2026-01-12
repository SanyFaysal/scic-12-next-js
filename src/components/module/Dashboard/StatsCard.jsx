export default function StatCard({ title, value }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-gray-700 font-medium mb-2">{title}</h3>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
    );
}
