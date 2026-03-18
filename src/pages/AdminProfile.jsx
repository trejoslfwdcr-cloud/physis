import AppLayout from "../layouts/AppLayout";

function AdminProfile() {
    return (
        <AppLayout rol="admin">
            <div className="bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] shadow-xl border border-white/20 animate-soft-pulse">
                <h1 className="text-4xl font-black text-gray-800 tracking-tight">Admin Sanctuary</h1>
                <p className="text-gray-500 mt-4 text-lg italic">
                    "Growth is the only evidence of life."
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-32 bg-physisPink/30 rounded-3xl border border-physisAccent/20 flex items-center justify-center text-physisAccent font-bold">
                        User Analytics Loop
                    </div>
                    <div className="h-32 bg-physisPink/30 rounded-3xl border border-physisAccent/20 flex items-center justify-center text-physisAccent font-bold">
                        System Health
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default AdminProfile;