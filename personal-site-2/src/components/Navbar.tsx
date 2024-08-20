import React from 'react';

type NavbarProps = {
    currentPage: string;
    setCurrentPage: (page: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <nav className="bg-primary text-secondary p-4">
            <div className="container mx-auto flex justify-between items-center">
                <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold">
                    Hendeaux
                </button>
                <div className="space-x-4">
                    <button onClick={() => setCurrentPage('about')} className="hover:underline">
                        About
                    </button>
                    <button onClick={() => setCurrentPage('contact')} className="hover:underline">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;