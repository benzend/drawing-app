import React from 'react';

export const Root = () => {
  return (
    <main>
      <nav className="toolnav flex flex-row gap-1 p-2 fixed top-2 mx-auto inset-x-0 w-min shadow rounded-lg">
        <button className="select rounded h-10 w-10">Se</button>
        <button className="square rounded h-10 w-10">Sq</button>
        <button className="diamond rounded h-10 w-10">Di</button>
        <button className="arrow rounded h-10 w-10">Ar</button>
        <button className="freedraw rounded h-10 w-10">Fd</button>
        <button className="text rounded h-10 w-10">Tx</button>
        <button className="img rounded h-10 w-10">Im</button>
      </nav>
    </main>
  );
}
