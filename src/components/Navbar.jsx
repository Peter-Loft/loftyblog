import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);



	return (
		<div className="w-full h-16 md:h-20 flex items-center justify-between">
			{/* logo */}
			<Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
				<img src="/logo.png" alt="logo" className="w-8 h-8" />
				<span className="">Lofty Blog</span>
			</Link>
			{/* mobile menu */}
			<div className="md:hidden text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
				{
					isOpen
						? "X"
						: "☰"
				}
			</div>
			{/* mobile link list */}
			<div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg bg-white fixed top-16 md:top-20 left-0 z-10 transition-all duration-300 ease-in-out ${isOpen
				? "-translate-x-0"
				: "translate-x-full"
				}`}>
				<Link to="/" className="">Home</Link>
				<Link to="/" className="">Trending</Link>
				<Link to="/" className="">Most Popular</Link>
				<Link to="/" className="">About</Link>
				<Link to="/" className="">
					<button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
				</Link>
			</div>

			{/* desktop menu */}
			<div className="hidden md:flex items-center gap-8 xl:gap-12 text-lg">
				<Link to="/" className="">Home</Link>
				<Link to="/" className="">Trending</Link>
				<Link to="/" className="">Most Popular</Link>
				<Link to="/" className="">About</Link>



				<SignedOut>
					<Link to="/login" className="">
						<button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
					</Link>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>


			</div>


		</div>
	);
}

export default Navbar;