import Link from "next/link";

export function nav(){
    return(
        <nav className="bg-zinc-900 text-white p-3 items-center w-[1200] h-28 flex justify-between">
            <Link className="bg-zinc-700 hover:bg-green-600 duration-300" href="/">home</Link>
            <Link href="/Inicio">Inicio</Link>
            <Link href="/Cliente">Cliente</Link>
            <Link href="/Login">Login</Link>
        </nav>
    )
    }