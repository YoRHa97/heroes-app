import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Routes>
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:id" element={<HeroScreen />} />
                    <Route path="/" element={<h1>Default</h1>} />
                </Routes>
            </div>     
        </>
    );
};
