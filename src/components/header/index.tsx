import { Mobile } from "./mobile";
import { Desktop } from "./desktop";
import { get } from "@/services";

export async function Header() {
  const myDataQ = await get("https://prod-be.guarented.com/get-nav-panel");
  return (
    <header className="w-full px-8 lg:px-20 h-16 py-4 bg-white border-b border-gray-50 shadow-xl">
      <Mobile />
      <Desktop menus={[...myDataQ.data, {
        'redirection_type':'same',
        'style':'text-primary',
        'href':'',
        'name':'Refer and Earn'
      }]}/>
    </header>
  );
}
