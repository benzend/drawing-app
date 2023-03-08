import React, { useEffect, useRef } from 'react';
import { RiCursorFill } from 'react-icons/ri';
import { BiSquare } from 'react-icons/bi';
import { BsArrowRight, BsDiamond, BsFillPencilFill, BsImage } from 'react-icons/bs';
import { ImTextColor } from 'react-icons/im';
import { FaRegHandPaper } from 'react-icons/fa';

const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = '#000000'
  ctx.beginPath()
  ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
  ctx.fill() 
}

export const Root = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  useEffect(() => {
    
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')

    if (!context) return
    let frameCount = 0
    let animationFrameId: number | null = null;
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      if (animationFrameId !== null)
        window.cancelAnimationFrame(animationFrameId)
    }
  }, [])


  return (
    <main>
      <nav className="toolnav flex flex-row gap-1 p-2 fixed top-2 mx-auto inset-x-0 w-min shadow rounded-lg">
        <button className="hand rounded h-10 w-10 flex items-center justify-center"><FaRegHandPaper /></button>
        <button className="select rounded h-10 w-10 flex items-center justify-center"><RiCursorFill /></button>
        <button className="square rounded h-10 w-10 flex items-center justify-center"><BiSquare /></button>
        <button className="diamond rounded h-10 w-10 flex items-center justify-center"><BsDiamond /></button>
        <button className="arrow rounded h-10 w-10 flex items-center justify-center"><BsArrowRight /></button>
        <button className="freedraw rounded h-10 w-10 flex items-center justify-center"><BsFillPencilFill /></button>
        <button className="text rounded h-10 w-10 flex items-center justify-center"><ImTextColor /></button>
        <button className="img rounded h-10 w-10 flex items-center justify-center"><BsImage /></button>
      </nav>
      <canvas ref={canvasRef} />
    </main>
  );
}
