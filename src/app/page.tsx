import Image from "next/image";
import * as Frigade from '@frigade/react';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       <Frigade.Tour
      flowId="flow_vPBiGel7"
      defaultOpen
     
    />
     <button id="test1" className="rounded-2xl border-2 p-4 bg-amber-200 text-white cursor-pointer hover:bg-amber-100">
      click me 
     </button>
     <button id="test2" className="rounded-2xl border-2 p-4 bg-amber-200 text-white cursor-pointer hover:bg-amber-100">
      second button 
     </button>

    </div>
  );
}
