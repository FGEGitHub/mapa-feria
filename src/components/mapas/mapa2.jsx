import { useState, useRef } from "react";
import mapa from "../../assets/parque2.png";
import poligonos from "./poligonos.json";
const getInitialConfig = () => {
  const isMobile = window.innerWidth < 768;

  return {
    scale: isMobile ? 0.25 : 0.7,
    position: isMobile
      ? { x: 0, y: 0 }
      : { x: -200, y: -100 }
  };
};
export default function ParqueSvg() {
    const isMobile = window.innerWidth < 768;
    const INITIAL_SCALE = isMobile ? 1.45 : 0.7;
      const INITIAL_POSITION = isMobile
  ? { x: 0, y: 0 }
  : { x: -5000, y: -100 };
  const [tooltip, setTooltip] = useState(null);
  const [modal, setModal] = useState(null);
  // ZOOM / PAN
const { scale: initialScale, position: initialPosition } = getInitialConfig();

const [scale, setScale] = useState(initialScale);
const [position, setPosition] = useState(initialPosition);


  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // -------------------------
  // TOOLTIP
  // -------------------------
  const handleHover = (e, id) => {
    const data = poligonos[id];
    if (!data) return;

    setTooltip({
      x: e.clientX,
      y: e.clientY,
      nombre: data.nombre
    });
  };

  // -------------------------
  // MODAL
  // -------------------------
  const handleClick = (id) => {
    const data = poligonos[id];
    if (!data) return;
    setModal(data);
  };

  // -------------------------
  // ZOOM
  // -------------------------
const handleWheel = (e) => {
  const delta = e.deltaY > 0 ? -0.1 : 0.1;

  setScale((prev) =>
    Math.min(Math.max(prev + delta, 0.3), 3)
  );
};
  // -------------------------
  // PAN
  // -------------------------
  const handleMouseDown = (e) => {
    setDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        width: "100%",
        height: "80vh",
        overflow: "hidden",
        position: "relative",
        cursor: dragging ? "grabbing" : "grab",
        background: "#e6e6e6",
        borderRadius: "12px"
      }}
    >
      {/* WRAPPER CON TRANSFORM */}
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: "0 0",
          width: "fit-content"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3507 2480"
          width="3507"
          height="2480"
          style={{ display: "block" }}
        >
          {/* IMAGEN DE FONDO */}
          <image
            href={mapa}
            x="0"
            y="0"
            width="3507"
            height="2480"
            preserveAspectRatio="xMidYMid meet"
          />
 <g stroke="black" fill="none" strokeWidth="1" stroke-linecap="square" stroke-linejoin="bevel" 
 fill-rule="evenodd"
   transform="translate(272, 725)  scale(0.22) ">
  <g stroke="#000000" transform="matrix(1,0,0,1,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(1,0,0,1,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(0.999751,0,0,0.999751,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
   {/*  <g stroke="none" transform="matrix(0.999751,0,0,0.999751,0,0)" fill="#ffffff" fontSize="32.5" fontWeight="400" font-style="normal" fillOpacity="1" font-family="MS Shell Dlg 2">
 <path d="M-2,-2 L3510,-2 L3510,2483 L-2,2483 L-2,-2" vector-effect="none" fill-rule="evenodd"
 
 /> 
  </g>*/}
  <g stroke="#000000" transform="matrix(0.999751,0,0,0.999751,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>

  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
{/*   <g stroke="none" transform="matrix(0.999751,0,0,0.999751,0,0)" fill="#000000" fontSize="32.5" fontWeight="400" font-style="normal" fillOpacity="0" font-family="MS Shell Dlg 2">
   <rect x="0" y="0" width="3536" height="2480"/>
  </g> */}
  <g stroke="#000000" transform="matrix(0.999751,0,0,0.999751,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#232323" transform="matrix(0.999751,0,0,0.999751,0,0)" fill="#b7484b" strokeWidth="3.07087" fontSize="32.5" fontWeight="400" font-style="normal" fillOpacity="1" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2">

     <path d="M1341.34,1924.58 L1346.19,1866.45 L1481.82,1758.27 L1581.92,1884.21 L1578.69,1943.95 L1468.9,2000.46 L1341.34,1924.58" fill-rule="evenodd" vector-effect="none"
         onMouseEnter={(e) => handleHover(e, "1")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("1")}
            style={{ cursor: "pointer" }}
     
     />
   <path d="M1504.42,1767.96 L1623.9,1669.47 L1727.24,1787.33 L1730.47,1845.46 L1610.99,1910.05 L1504.42,1767.96" fill-rule="evenodd" vector-effect="none"
   
       onMouseEnter={(e) => handleHover(e, "2")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("2")}
            style={{ cursor: "pointer" }}
   />
   <path d="M1643.28,1677.54 L1770.83,1580.66 L1872.55,1698.53 L1870.94,1761.5 L1759.53,1816.4 L1643.28,1677.54" fill-rule="evenodd" vector-effect="none"
   
    onMouseEnter={(e) => handleHover(e, "3")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("3")}
            style={{ cursor: "pointer" }}
   />
   <path d="M1796.67,1577.44 L1920.99,1475.71 L2024.33,1593.58 L2029.17,1663.01 L1896.77,1708.22 L1796.67,1577.44" fill-rule="evenodd" vector-effect="none"
   
       onMouseEnter={(e) => handleHover(e, "4")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("4")}
            style={{ cursor: "pointer" }}
   />
   <path d="M1948.44,1467.64 L2048.55,1375.61 L2163.18,1498.32 L2156.72,1566.13 L2050.16,1627.49 L1948.44,1467.64" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "5")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("5")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M2097.11,1404.51 L2097.11,1404.51 L2227.69,1268.26 L2227.69,1268.26 L2327.04,1376.13 L2335.55,1455.61 L2222.01,1484 L2097.11,1404.51" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "6")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("6")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M2270.27,1276.78 L2372.46,1191.62 L2491.68,1302.32 L2488.84,1370.45 L2378.13,1418.71 L2270.27,1276.78" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "7")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("7")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M2420.71,1220 L2554.13,1072.4 L2554.13,1072.4 L2659.16,1191.62 L2653.48,1251.23 L2542.77,1316.52 L2420.71,1220" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "8")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("8")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M2443.28,905.474 L2556.55,1022.23 L2530.41,1072.77 L2431.08,1145.96 L2298.64,1067.54 L2309.09,1001.32 L2443.28,905.474" fill-rule="evenodd" vector-effect="none"
   
       onMouseEnter={(e) => handleHover(e, "9")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("9")}
            style={{ cursor: "pointer" }}
   />
   <path d="M2122.03,899.473 L2253,786.837 L2363.02,909.951 L2349.92,959.72 L2255.62,1033.06 L2114.17,951.862 L2122.03,899.473" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "10")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("10")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M1946.53,794.695 L2069.64,682.06 L2187.52,805.173 L2187.52,839.226 L2093.22,902.092 L2074.88,928.287 L1954.39,844.465 L1946.53,794.695" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "11")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("11")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M1797.22,708.254 L1920.33,600.857 L2027.73,705.634 L1907.24,826.129 L1791.98,760.643 L1797.22,708.254" fill-rule="evenodd" vector-effect="none"
   
       onMouseEnter={(e) => handleHover(e, "12")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("12")}
            style={{ cursor: "pointer" }}
   />
   <path d="M1629.58,616.574 L1747.45,493.46 L1854.85,627.051 L1736.97,750.165 L1608.62,655.865 L1629.58,616.574" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "13")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("13")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M1802.46,933.526 L1928.19,1040.92 L1912.48,1127.36 L1784.12,1166.66 L1784.12,1166.66 L1697.68,1017.35 L1802.46,933.526" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "14")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("14")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M1671.49,1014.73 L1671.49,1014.73 L1776.27,1182.37 L1666.25,1224.28 L1569.33,1090.69 L1671.49,1014.73" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "15")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("15")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M1440.98,1179.75 L1548.37,1088.07 L1640.05,1213.81 L1647.91,1263.57 L1540.52,1310.72 L1440.98,1179.75" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "16")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("16")}
            style={{ cursor: "pointer" }}
   
   />
   <path d="M1302.15,1253.1 L1401.69,1166.66 L1506.46,1287.15 L1514.32,1342.16 L1406.92,1394.55 L1302.15,1253.1" fill-rule="evenodd" vector-effect="none"
       onMouseEnter={(e) => handleHover(e, "17")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("17")}
            style={{ cursor: "pointer" }}
   
   />

  </g>
  <g stroke="#000000" transform="matrix(0.999751,0,0,0.999751,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(1,0,0,1,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(11.8081,0,0,11.8081,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
  <g stroke="#000000" transform="matrix(1,0,0,1,0,0)" fill="none" strokeWidth="1" fontSize="32.5" fontWeight="400" font-style="normal" stroke-linecap="square" stroke-linejoin="bevel" stroke-opacity="1" font-family="MS Shell Dlg 2"/>
 </g>

          {/* ===== TU SVG ORIGINAL (SIN CAMBIOS) ===== */}
          <g stroke="#232323" fill="#b7484b" strokeWidth="3">
            <path
              d="M902.762,1184.14 L928.196,1202.06 L907.765,1222.91 L886.083,1203.73 Z"
              onMouseEnter={(e) => handleHover(e, "Sector A")}
              onMouseLeave={() => setTooltip(null)}
              onClick={() =>
                setModal({
                  nombre: "Sector A",
                  descripcion: "Descripción del sector A"
                })
              }
              style={{ cursor: "pointer" }}
            />
          </g>
        </svg>
      </div>

      {/* TOOLTIP */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            top: tooltip.y + 12,
            left: tooltip.x + 12,
            background: "rgba(0,0,0,0.75)",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "6px",
            fontSize: "13px",
            pointerEvents: "none",
            zIndex: 1000
          }}
        >
          {tooltip.nombre}
        </div>
      )}

      {/* MODAL */}
      {modal && (
        <div
        style={{
    background: "#fff",
    padding: isMobile ? "16px" : "20px",
    borderRadius: isMobile ? "12px 12px 0 0" : "12px",

    width: isMobile ? "100%" : "420px",
    maxWidth: "95%",
    maxHeight: isMobile ? "85vh" : "80vh",

    overflowY: "auto",

    position: isMobile ? "fixed" : "relative",
    bottom: isMobile ? 0 : "auto"
  }}
          onClick={() => setModal(null)}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              width: "320px",
              maxWidth: "90%"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ marginTop: 0 }}>{modal.nombre}</h3>
            <p>{modal.descripcion}</p>
            <button onClick={() => setModal(null)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* CONTROLES */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          background: "#fff",
          padding: "6px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
        }}
      >
        <button onClick={() => setScale((s) => Math.min(s + 0.2, 4))}>+</button>
        <button onClick={() => setScale((s) => Math.max(s - 0.2, 0.5))}>-</button>
        <button
          onClick={() => {
            setScale(1);
            setPosition({ x: 0, y: 0 });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
