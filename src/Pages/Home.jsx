import { useLoaderData } from "react-router-dom";
import Breakingnews from "./Breakingnews";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {/* news Container */}
                    {
                        news.map(aNews => <NewsCard key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;