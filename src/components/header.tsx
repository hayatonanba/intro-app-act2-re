const Header = () => {
	return (
		<header className="bg-black py-5">
			<div className="container mx-auto flex justify-between">
				<h1 className="text-white">
					Nextjs超初心者入門
				</h1>
				<ul className="flex gap-3">
					<li>						
						About	
					</li>
					<li>
						Blog
					</li>
					<li>		
						Contact			
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;