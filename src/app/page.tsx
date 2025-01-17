import { Icon12Hours, IconDog, IconEdit, IconHome, IconMoneybag, IconSandbox, IconTrash } from "@tabler/icons-react";

export default function Home() {
  return(
    <div className="bg-slate-800 h-screen w-screen text-white px-10 py-10">
      <h1 className="text-6xl text-center">SaumaSystem</h1>
      <div className="flex gap-2 mt-5 justify-center">
          <Icon12Hours size={70} color="red"/>
          <IconHome size={70} className="text-red-600 bg-white rounded-full p-2" />
          <IconEdit size={70} />
          <IconTrash size={70} />
          <IconSandbox size={70} />
          <IconMoneybag size={70} />
          <IconDog size={70} />
          <div>
            <h1>
              <IconMoneybag size={80} />
            </h1>
          </div>
      </div>
    </div>
  );
}
