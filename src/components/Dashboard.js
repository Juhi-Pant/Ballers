import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar'; // Assuming this is the correct path
import { investments } from '../Utils/mockInvestments';
import InvestmentCard from './InvestmentCard';
import InvestmentDetails from './InvestmentDetails';
import InvestmentLineChart from './InvestmentLineChart';
import Header from './Header';

function Dashboard() {
    const [selectedInvestment, setSelectedInvestment] = useState(null);
    const userName = "User Name"; // Dynamic based on application's user system

    const handleBuy = () => {
        alert('Buy clicked for ' + selectedInvestment.title);
    };
    
    const handleSell = () => {
        alert('Sell clicked for ' + selectedInvestment.title);
    };

    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header userName={userName} />
                <div className="flex flex-1 overflow-hidden">
                    <div className="flex-1 overflow-y-auto">
                        <InvestmentLineChart />
                        {/* Investment opportunities */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {investments.map((investment) => (
                                    <div
                                        key={investment.id}
                                        onClick={() => setSelectedInvestment(investment)}
                                        className="cursor-pointer border p-4 rounded-lg"
                                    >
                                        <InvestmentCard investment={investment} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Selected investment details */}
                        {selectedInvestment && (
                            <InvestmentDetails
                                investment={selectedInvestment}
                                onClose={() => setSelectedInvestment(null)}
                                onBuy={handleBuy}
                                onSell={handleSell}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
