// Components - Global
import { TileRow } from "./TileRow";

// Third Party
import { useEffect, useState } from "react";
import gen from "random-seed";
import { nanoid } from "nanoid";

// const randomWithoutSeed = gen.create();

const tileColors = [
  "bg-yellow-600",
  "bg-red-500",
  "bg-yellow-300",
  "bg-green-300",
  "bg-blue-300",
  "bg-indigo-500",
  "bg-purple-400",
  "bg-pink-200",
];

export const Playfield = () => {
  const boardRows = 8;
  const boardCols = 8;

  const [dragElement, setDragElement] = useState(() => {
    const dragElement = document.createElement("div");
    dragElement.classList.add(
      "absolute",
      "w-20",
      "h-20",
      "top-0",
      "bg-blue-800"
    );
    dragElement.style.zIndex = -1;
    return dragElement;
  });

  useEffect(() => {
    document.getElementById("root").appendChild(dragElement);
  }, [dragElement]);

  const [playfield] = useState(() => {
    // const randomSeed = randomWithoutSeed(10000);
    const random = gen.create(0);
    const draftPlayfield = [];
    for (let row = 0; row < boardRows; row++) {
      const draftRow = [];
      draftRow.uuid = nanoid();
      for (let col = 0; col < boardCols; col++) {
        draftRow.push({
          row,
          col,
          color: tileColors[random(8)],
          dragging: false,
          uuid: nanoid(),
        });
      }
      draftPlayfield.push(draftRow);
    }
    return draftPlayfield;
  });

  console.log("playfield: ", playfield);
  const [draggedTile, setDraggedTile] = useState();
  const [hoveredTile, setHoveredTile] = useState();

  // const dragCallbacks = {
  //   onTileDragStart: (e, tile) => {
  //     e.dataTransfer.setDragImage(dragElement, 30, 30);
  //     setDraggedTile(tile);
  //   },
  //   onTileDragEnd: () => {
  //     setDraggedTile();
  //     setHoveredTile();
  //   },
  //   onTileDragEnter: (e) => {
  //     console.log("entering: ", e.currentTarget);
  //     setHoveredTile(e.currentTarget);
  //   },
  // };

  return (
    <div className="Playfield flex flex-col items-center justify-center shadow-2xl bg-black">
      {playfield.map((tileRow) => (
        <TileRow
          tileRow={tileRow}
          key={tileRow.uuid}
          dragCallbacks={dragCallbacks}
          draggedTile={draggedTile}
          hoveredTile={hoveredTile}
        />
      ))}
    </div>
  );
};
