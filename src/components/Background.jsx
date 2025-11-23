import { useEffect, useRef } from "react";

const Background = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            container.style.setProperty("--x", `${clientX}px`);
            container.style.setProperty("--y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[-1] bg-black pointer-events-none"
            style={{
                "--x": "50%",
                "--y": "50%",
            }}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div
                className="absolute inset-0 opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)`,
                }}
            ></div>
        </div>
    );
};

export default Background;
