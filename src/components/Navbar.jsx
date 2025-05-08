import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);



	return (
		<div className="w-full h-16 md:h-20 flex items-center justify-between">
			{/* logo */}
			<div className="flex items-center gap-4 text-2xl font-bold">
				<img src="/logo.png" alt="logo" className="w-8 h-8" />
				<span className="">Lofty Blog</span>
			</div>
			{/* mobile menu */}
			<div className="md:hidden text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
				{
					isOpen
						? "X"
						: "☰"
				}
			</div>
			{/* mobile link list */}
			<div className={`w-full h-screen flex flex-col items-center justify-center bg-white fixed top-16 md:top-20 left-0 z-10 transition-all duration-300 ease-in-out ${isOpen
					? "-translate-x-0"
					: "translate-x-full"
				}`}>
				TEST
			</div>

			{/* desktop menu */}
			<div className="hidden md:flex items-center gap-8 xl:gap-12 text-lg">
				<a href="/" className="">Home</a>
				<a href="/" className="">Trending</a>
				<a href="/" className="">Most Popular</a>
				<a href="/" className="">About</a>
				<a href="/" className="">
					<button>Login</button>
				</a>
			</div>


		</div>
	);
}

export default Navbar;