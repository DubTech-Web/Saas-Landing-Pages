export default function Buttons(){
  return (
    <div className="flex space-x-4">
      <button className="font-[Inter] font-[500] text-[16px] leading-4 px-4 py-2  text-[#A6A6A6] hover:text-green-400">
        Login
      </button>
      <button className="p-3 font-[Inter] font-[500] text-[16px]  leading-4 bg-[#54BD95] text-[#F8F8FA] rounded-lg hover:bg-green-600">
        Sign Up
      </button>
    </div>
  );
}
