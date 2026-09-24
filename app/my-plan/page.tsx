import MyPlanButton from '@/components/MyPlanButton';

const MyPlanPage = () => {
    return (
        <div className="min-h-screen bg-[#0b0f17] text-white p-6 md:p-12 font-sans">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header Section */}
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-wider text-white">
                        My Plan
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Cap of five lifts for today. Finish them, then load
                        more.
                    </p>
                </div>
                <MyPlanButton />
            </div>
        </div>
    );
};

export default MyPlanPage;
