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
      "pointer-events-none",
      "opacity-0"
    );
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

  const [draggedTile, setDraggedTile] = useState();
  const [hoveredTile, setHoveredTile] = useState();

  const onPointerDown = (e, tile) => {
    setDraggedTile(tile);
    dragElement.style.transform = `translate(${e.clientX - 40}px, ${
      e.clientY - 40
    }px)`;
    dragElement.style.opacity = 0.7;
    dragElement.classList.add(tile.color);
  };

  const swapTiles = (rowOffset, columnOffset) => {
    const originalDraggedTileColor = draggedTile.color;
    draggedTile.color = hoveredTile.color;
    hoveredTile.color = originalDraggedTileColor;
  };

  const onPointerUp = () => {
    dragElement.style.opacity = 0;
    dragElement.classList.remove(draggedTile.color);

    if (hoveredTile && draggedTile) {
      if (hoveredTile.row === draggedTile.row) {
        if (hoveredTile.col === draggedTile.col - 1) swapTiles(0, -1);
        else if (hoveredTile.col === draggedTile.col + 1) swapTiles(0, +1);
      } else if (hoveredTile.col === draggedTile.col) {
        if (hoveredTile.row === draggedTile.row - 1) swapTiles(-1, 0);
        else if (hoveredTile.row === draggedTile.row + 1) swapTiles(+1, 0);
      }
    }
    setDraggedTile();
    setHoveredTile();
  };

  return (
    <div
      className="w-screen h-screen bg-green-100 flex flex-col justify-center items-center"
      onPointerMove={(e) => {
        dragElement.style.transform = `translate(${e.clientX - 40}px, ${
          e.clientY - 40
        }px)`;
      }}
    >
      <div className="Playfield flex flex-col items-center justify-center shadow-2xl">
        {playfield.map((tileRow) => (
          <TileRow
            tileRow={tileRow}
            key={tileRow.uuid}
            dragData={{
              draggedTile,
              onPointerDown,
              onPointerUp,
              hoveredTile,
              setHoveredTile,
            }}
          />
        ))}
      </div>
    </div>
  );
};
