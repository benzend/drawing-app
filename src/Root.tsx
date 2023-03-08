import React from 'react';
import { RiCursorFill } from 'react-icons/ri';
import { BiSquare } from 'react-icons/bi';
import { BsArrowRight, BsDiamond, BsFillPencilFill, BsImage } from 'react-icons/bs';
import { ImTextColor } from 'react-icons/im';

export const Root = () => {
  return (
    <main>
      <nav className="toolnav flex flex-row gap-1 p-2 fixed top-2 mx-auto inset-x-0 w-min shadow rounded-lg">
        <button className="select rounded h-10 w-10 flex items-center justify-center"><RiCursorFill /></button>
        <button className="square rounded h-10 w-10 flex items-center justify-center"><BiSquare /></button>
        <button className="diamond rounded h-10 w-10 flex items-center justify-center"><BsDiamond /></button>
        <button className="arrow rounded h-10 w-10 flex items-center justify-center"><BsArrowRight /></button>
        <button className="freedraw rounded h-10 w-10 flex items-center justify-center"><BsFillPencilFill /></button>
        <button className="text rounded h-10 w-10 flex items-center justify-center"><ImTextColor /></button>
        <button className="img rounded h-10 w-10 flex items-center justify-center"><BsImage /></button>
      </nav>
    </main>
  );
}
