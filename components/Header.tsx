import Link from "next/link";
import { Button } from "./ui/button";
import { Nav } from "./Nav";
import MobileNav from "./ui/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold border-l-8 px-3 border-accent">Helge <br /> Langenkaemper</h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="shadow-sm transition-all duration-200 ease-in-out shadow-blue-300 ml-4 hover:shadow-blue-300 hover:shadow-lg">
              Contact
            </Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
