import React, { useEffect, useRef } from "react";

const Parallax = () => {
    const layer1Ref = useRef<HTMLDivElement>(null);
    const layer2Ref = useRef<HTMLDivElement>(null);
    const layer3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (layer1Ref.current)
                layer1Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`;
            if (layer2Ref.current)
                layer2Ref.current.style.transform = `translateY(${scrollY * 0.6}px)`;
            if (layer3Ref.current)
                layer3Ref.current.style.transform = `translateY(${scrollY * 2}px)`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={styles.container}>
            <div ref={layer1Ref} style={{ ...styles.layer, ...styles.layer1 }} />
            <div ref={layer2Ref} style={{ ...styles.layer, ...styles.layer2 }} />
            <div ref={layer3Ref} style={{ ...styles.layer, ...styles.layer3 }} />
            <div style={styles.spacer} />
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    container: {
        position: "fixed",
        width: "100wv",
        height: "100vh",
        overflowX: "hidden",
    },
    layer: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        willChange: "transform",
    },
    layer1: {
        zIndex: 1,
        transform: 'scale(2)',
        backgroundImage: "url('/Ebene3.png')",
    },
    layer2: {
        zIndex: 2,
        transform: 'scale(2)',
        backgroundImage: "url('/Ebene2.png')",
    },
    layer3: {
        zIndex: 1,
        transform: 'scale(2)',
        backgroundImage: "url('/Ebene1.png')",
    },
    spacer: {
        height: "300vh",
    },
};

export default Parallax;
