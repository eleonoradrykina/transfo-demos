import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

// built on this example:
//https://blog.olivierlarose.com/tutorials/magnetic-button
  

export default function Magnetic({children, duration = 1}: {children: React.ReactElement, duration?: number}) {
  
  const magnetic = useRef<HTMLElement>(null);

    useEffect( () => {

        const xTo = gsap.quickTo(magnetic.current, "x", {duration: duration, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: duration, ease: "elastic.out(1, 0.3)"})

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const bounds = magnetic.current?.getBoundingClientRect() || {
                height: 0,
                width: 0,
                left: 0,
                top: 0
            };
            
            const {height, width, left, top} = bounds;
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)

            xTo(x);
            yTo(y)
        }

        const mouseLeave = () => {
            gsap.to(magnetic.current, {x: 0, duration: duration})
            gsap.to(magnetic.current, {y: 0, duration: duration})

            xTo(0);
            yTo(0)
        }

        magnetic.current?.addEventListener("mousemove", mouseMove)
        magnetic.current?.addEventListener("mouseleave", mouseLeave)
        return () => {
            magnetic.current?.removeEventListener("mousemove", mouseMove)
            magnetic.current?.removeEventListener("mouseleave", mouseLeave)
        }

    }, [duration])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}