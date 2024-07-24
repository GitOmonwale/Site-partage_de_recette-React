import logo from "../../assets/tastebite-logo.png"
import profil from "../../assets/profile_icon.png"
import search from "../../assets/search_icon.png"
import DropdownMenu from "./drop"

const options1 = [
    { label: 'Option 1.1', href: '#' },
    { label: 'Option 1.2', href: '#' },
    { label: 'Option 1.3', href: '#' },
];

const options2 = [
    { label: 'Option 2.1', href: '#' },
    { label: 'Option 2.2', href: '#' },
    { label: 'Option 2.3', href: '#' },
];

const options3 = [
    { label: 'Option 3.1', href: '#' },
    { label: 'Option 3.2', href: '#' },
    { label: 'Option 3.3', href: '#' },
];

function NavBar() {
    return <>

        <header className="md:flex hidden justify-between mt-5">
            <div className="flex justify-between w-full items-start">
                <img src={logo} alt="logo" className="h-14 filter grayscale brightness-0" />
                <nav className="">
                    <ul className="flex flex-row items-start">
                        <DropdownMenu buttonText="Homepage" options={options1} />
                        <DropdownMenu buttonText="Recipe Page" options={options2} />
                        <DropdownMenu buttonText="Pages" options={options3} />
                        <a href="#" className="text-black font-medium text-sm px-5 py-2.5 text-center inline-flex items-center">Buy</a>
                    </ul>
                </nav>
                <div className="flex justify-between gap-4">
                    <img src={search} alt="icon_search" className="w-6 h-6 ilter grayscale brightness-0" />
                    <img src={profil} alt="icon_profil" className="w-6 h-6 filter grayscale brightness-0" />
                </div>
            </div>
        </header>

    </>
}

export default NavBar