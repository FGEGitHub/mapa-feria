import { useState, useRef } from "react";
import mapa from "../../assets/parque.png";
import poligonos from "./poligonos.json";

export default function ParqueSvg() {
  const [tooltip, setTooltip] = useState(null);
  const [modal, setModal] = useState(null);

  // ZOOM / PAN
const [scale, setScale] = useState(0.7);
  const [position, setPosition] = useState({ x: 2000, y: -100 });
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
    e.preventDefault();
    const delta = -e.deltaY * 0.001;
    setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 4));
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
   transform="translate(-50, -220)">
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
   <path d="M902.762,1184.14 L928.196,1202.06 L907.765,1222.91 L886.083,1203.73 L902.762,1184.14" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "1")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("1")}
            style={{ cursor: "pointer" }}
   />
   <path d="M906.097,1223.33 L887.751,1241.26 L870.239,1219.58 L883.999,1206.65 L906.097,1223.33" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "2")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("2")}
            style={{ cursor: "pointer" }}
   />
   <path d="M863.151,1228.75 L885.25,1243.76 L863.151,1261.27 L844.805,1245.43 L863.151,1228.75" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "3")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("3")}
            style={{ cursor: "pointer" }}
   />
   <path d="M839.384,1250.01 L860.232,1267.11 L837.3,1283.37 L820.622,1267.94 L839.384,1250.01" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "4")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("4")}
            style={{ cursor: "pointer" }}
   />
   <path d="M814.367,1270.45 L833.547,1287.54 L805.611,1305.89 L790.184,1292.54 L814.367,1270.45" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "5")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("5")}
            style={{ cursor: "pointer" }}
   />
   <path d="M870.656,1162.04 L898.175,1180.38 L875.243,1198.73 L853.144,1180.38 L870.656,1162.04" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "6")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("6")}
            style={{ cursor: "pointer" }}
   />
   <path d="M838.551,1144.52 L864.819,1162.04 L848.141,1179.55 L825.625,1161.62 L838.551,1144.52" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "7")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("7")}
            style={{ cursor: "pointer" }}
   />
   <path d="M803.109,1124.09 L830.211,1142.02 L808.53,1159.12 L785.18,1143.27 L803.109,1124.09" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "8")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("8")}
            style={{ cursor: "pointer" }}
   />
   <path d="M734.729,1155.37 L763.916,1180.38 L739.732,1206.23 L712.213,1175.38 L734.729,1155.37" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "9")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("9")}
            style={{ cursor: "pointer" }}
   />
   <path d="M699.705,1191.22 L738.064,1222.08 L704.708,1244.59 L673.02,1214.57 L699.705,1191.22" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "10")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("10 ")}
            style={{ cursor: "pointer" }}
   />
   <path d="M654.674,1231.25 L684.694,1257.94 L653.84,1283.79 L631.324,1257.1 L654.674,1231.25" vector-effect="none" fill-rule="evenodd"
    onMouseEnter={(e) => handleHover(e, "1")}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleClick("1")}
            style={{ cursor: "pointer" }}
   />
   <path d="M490.393,1239.59 L577.954,1319.65 L543.764,1352.17 L461.206,1269.61 L490.393,1239.59" vector-effect="none" fill-rule="evenodd"
   
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
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000
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
