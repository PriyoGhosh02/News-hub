import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakingnews = () => {
    return (
        <div className="flex mb-8 bg-gray-700 p-6">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to={'/index.html'}>  I can be a React component, multiple React components.........</Link>
                <Link className="mr-12" to={'/index.html'}>  I can be a React component, multiple React components.........</Link>
                <Link className="mr-12" to={'/index.html'}>  I can be a React component, multiple React components.........</Link>
                <Link className="mr-12" to={'/index.html'}>  I can be a React component, multiple React components.........</Link>
            </Marquee>
        </div>
    );
};

export default Breakingnews;