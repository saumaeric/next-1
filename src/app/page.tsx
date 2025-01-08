import { Icon12Hours, IconDog, IconEdit, IconHome, IconMoneybag, IconSandbox, IconTrash } from "@tabler/icons-react";

export default function Home() {
  return(
    <div className="bg-slate-800 h-screen w-screen text-white px-10 py-10">
      <h1 className="text-6xl text-center">SaumaSystem</h1>
      <Icon12Hours size={100} color="red"/>
      <IconHome size={100} className="text-red-600 bg-white rounded-full p-2" />
      <IconEdit size={100} />
      <IconTrash size={100} />
      <IconSandbox size={100} />
      <IconMoneybag size={100} />
      <IconDog size={100} />
    </div>
  );
}
