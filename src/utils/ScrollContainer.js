import React, { useRef, useState, useCallback, useLayoutEffect } from "react"
import styled from 'styled-components'
import ResizeObserver from "resize-observer-polyfill"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion"

// Empty div with dynamic height
const Container = styled(motion.main)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    will-change: transform;
`;

export default function ScrollContainer({ children }) {
  // ScrollContainer
  const scrollRef = useRef(null)

  // Page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0)

  // Update scrollable height when browser is resizing
  const resizePageHeight = useCallback(entries => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  // Browser size observer
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useViewportScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  // Scroll Easing
  const physics = { damping: 13, mass: .3, stiffness: 56 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <Container
        ref={scrollRef}
         // TranslateY of ScrollContainer using negative scroll value
        style={{ y: spring }}
      >
        {children}
      </Container>
      {/* Empty div that has a dynamic height based on the content's inherent height.
      Mandatory to allow the ScrollContainer to scroll using the browser's native scroll bar. */}
      <div style={{ height: pageHeight }} />
    </>
  )
}