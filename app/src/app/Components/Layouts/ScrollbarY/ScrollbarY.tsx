"use client";

import { useEffect, useRef, useState, useCallback  } from 'react';

import { usePageWrapperRef } from '@/contexts/PageWrapperContext';
import { useDeviceType } from '@/contexts/DeviceTypeContext';

import { 
	StyledScrollbarTrackAndThumb, 
	StyledScrollbar,
	Thumb, 
	Track, 
} from './ScrollbarY.styles';

 
export default function ScrollbarY() {
	const breakpoint = useDeviceType();

	const contentRef = usePageWrapperRef();
	const scrollTrackRef = useRef<HTMLDivElement>(null);
	const scrollThumbRef = useRef<HTMLDivElement>(null);
	const observer = useRef<ResizeObserver | null>(null);

	const [initialContentScrollTop, setInitialContentScrollTop] = useState<number>(0);
	const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
	const [thumbHeight, setThumbHeight] = useState(20);
	const [isDragging, setIsDragging] = useState(false);

	const handleResize = useCallback(() => {
		if (scrollTrackRef.current && contentRef.current) {
			const { clientHeight: trackSize } = scrollTrackRef.current;
			const { clientHeight: contentVisible, scrollHeight: contentTotalHeight } = contentRef.current;
			setThumbHeight(Math.max((contentVisible / contentTotalHeight) * trackSize, 20));
		}
	}, [contentRef]);
	
	const handleThumbPosition = useCallback(() => {
		if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) return;
	
		const { scrollTop: contentTop, scrollHeight: contentHeight } = contentRef.current;
		const { clientHeight: trackHeight } = scrollTrackRef.current;
	
		let newTop = (contentTop / contentHeight) * trackHeight;
		newTop = Math.min(newTop, trackHeight - thumbHeight);
	
		const thumb = scrollThumbRef.current;
		requestAnimationFrame(() => {
			thumb.style.top = `${newTop}px`;
		});
	}, [thumbHeight, contentRef]);
	
	const handleThumbMouseup = useCallback((e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (isDragging) setIsDragging(false);
	}, [isDragging]);
	
	const handleThumbMousemove = useCallback((e: MouseEvent) => {
		if (!contentRef.current) return;
	
		e.preventDefault();
		e.stopPropagation();
		if (isDragging) {
			const { scrollHeight: contentScrollHeight, clientHeight: contentClientHeight } = contentRef.current;
			const deltaY = (e.clientY - scrollStartPosition) * (contentClientHeight / thumbHeight);
			const newScrollTop = Math.min(
				initialContentScrollTop + deltaY,
				contentScrollHeight - contentClientHeight
			);
			contentRef.current.scrollTop = newScrollTop;
		}
	}, [isDragging, contentRef, initialContentScrollTop, scrollStartPosition, thumbHeight]);


	useEffect(() => {
		const timeout = setTimeout(() => {
			if (contentRef.current) {
				const content = contentRef.current;
				observer.current = new ResizeObserver(() => {
					handleResize();
				});
				observer.current.observe(content);
				content.addEventListener("scroll", handleThumbPosition);
			}
		}, 1000); // NOTE: change this if any animation in "pageWrapper" takes longer
		
		return () => {
			if (contentRef.current) {
				observer.current?.unobserve(contentRef.current);
				contentRef.current.removeEventListener("scroll", handleThumbPosition);
			}
			clearTimeout(timeout);
		};
	}, [contentRef, handleResize, handleThumbPosition]);

	function handleThumbMousedown(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault();
		e.stopPropagation();
		setScrollStartPosition(e.clientY);
		if (contentRef.current)
			setInitialContentScrollTop(contentRef.current.scrollTop);
		setIsDragging(true);
	}

	useEffect(() => {
		document.addEventListener("mousemove", handleThumbMousemove);
		document.addEventListener("mouseup", handleThumbMouseup);
		return () => {
			document.removeEventListener("mousemove", handleThumbMousemove);
			document.removeEventListener("mouseup", handleThumbMouseup);
		};
	}, [handleThumbMousemove, handleThumbMouseup]);
	
	function handleTrackClick(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault();
		e.stopPropagation();
		const { current: track } = scrollTrackRef;
		const { current: content } = contentRef;
		if (track && content) {
			const { clientY } = e;
			const target = e.target as HTMLDivElement;
			const rect = target.getBoundingClientRect();
			const trackTop = rect.top;
			const thumbOffset = -(thumbHeight / 2);
			const clickRatio =
				(clientY - trackTop + thumbOffset) / track.clientHeight;
			const scrollAmount = Math.floor(clickRatio * content.scrollHeight);
			content.scrollTo({
				top: scrollAmount,
				behavior: 'smooth',
			});
		}
	}

  return (
    <StyledScrollbar id="styled-scrollbar">
      <StyledScrollbarTrackAndThumb
				role="scrollbar" 
				aria-controls="styled-scrollbar" 
				$breakpoint={breakpoint}
			>

				{/* Scrollbar Track */}
				<Track 
					ref={scrollTrackRef}
					id="styled-scrollbar-track"  
					onClick={handleTrackClick}
					style={{ 
						cursor: isDragging ? 'grabbing' : undefined 
					}} 
				/>	

				{/* Scrollbar Thumb */}
				<Thumb 
					ref={scrollThumbRef}
					id="styled-scrollbar-thumb"
					onMouseDown={handleThumbMousedown}
					style={{
						height: `${thumbHeight}px`,
						cursor: isDragging ? 'grabbing' : 'grab',
					}}
					
				/>

      </StyledScrollbarTrackAndThumb>
    </StyledScrollbar>
  );
}
