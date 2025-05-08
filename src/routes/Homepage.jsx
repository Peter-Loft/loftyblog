import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<div className="flex flex-col mt-4 gap-4">
			{/* BREADCRUMBS */}
			<div className="flex gap-4">
				<Link to="/">Home</Link>
				<span> | </span>
				<span className="text-blue-800">
					Blogs and Articles
				</span>
			</div>
			{/* INTRO */}
			<div className="flex items-center justify-between">
				{/* titles */}
				<div className="">
					<h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					</h1>
					<p>
						Welcome to the Blogs and Articles section! Here, you can find a collection of insightful articles and blogs on various topics. Whether you're looking for the latest trends in technology, tips for personal development, or in-depth analyses of current events, we've got you covered.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Homepage;