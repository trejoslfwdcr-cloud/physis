import AppLayout from "../layouts/AppLayout";
import UserDash from "../components/UserDash";

function UserProfile() {
    return (
       <>
       <AppLayout rol="usuario">
            <div className="bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] shadow-xl border border-white/20">
                <h1 className="text-4xl font-black text-gray-800 tracking-tight">Your Journey</h1>
                <p className="text-gray-500 mt-4 text-lg">
                    Focus on your renewal today.
                </p>
            </div>
        </AppLayout>
        <UserDash />
        </>
    );
}

export default UserProfile;