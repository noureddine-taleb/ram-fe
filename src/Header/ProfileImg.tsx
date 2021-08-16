export function ProfileImg()
{
	return (
		<div className="flex gap-2 items-center">
			<div className="flex flex-col">
				<span>User Name</span>
				<span>Role</span>
			</div>
			<img className="w-10 h-10 rounded-full bg-white" src="/ram.png" alt=""/>
		</div>
	);
}