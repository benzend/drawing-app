import React, { useEffect, useRef } from "react"

interface CanvasProps {
  draw: (canvasCtx: CanvasRenderingContext2D, frameCount: number) => void,
}
export const Canvas = ({ draw, }: CanvasProps) => {
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
  }, [draw])
  return <canvas ref={canvasRef} />
}
