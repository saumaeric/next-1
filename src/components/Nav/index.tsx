import Link from "next/link";

export function Nav(){
    return(
        <nav className="bg-zinc-900 text-white items-center w-[1200] h-28 flex gap-3 justify-center">
            <Link className="bg-zinc-700 hover:bg-green-600 duration-300 px-5 py-3 rounded-lg" href="/">Home</Link>
            <Link href="/inicio">Inicio</Link>
            <Link href="/cliente">Cliente</Link>
            <Link href="/login">Login</Link>
        </nav>
    )
}