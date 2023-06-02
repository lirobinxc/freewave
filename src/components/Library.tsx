'use client';

import React from 'react';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';

interface LibraryProps {}

const Library: React.FC<LibraryProps> = (props) => {
  function handleClick() {
    // TODO
  }

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <h2 className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <span className="font-medium text-neutral-400">Your Library</span>
        </h2>
        <AiOutlinePlus
          className="cursor-pointer text-neutral-400 transition hover:text-white"
          onClick={handleClick}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2 px-3">List of songs</div>
    </section>
  );
};

export default Library;
