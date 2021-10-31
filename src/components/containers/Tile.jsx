// Third Party
import { useState } from "react";
import cx from "classnames";

const borderDefault = "border border-gray-500";
const borderTopSquare = "border-4 rounded border-b-0 border-gray-200";
const borderBottomSquare = "border-4 rounded border-t-0 border-gray-200";
const borderLeftSquare = "border-4 rounded border-r-0 border-gray-200";
const borderRightSquare = "border-4 rounded border-l-0 border-gray-200";

const getBorder = (draggedTile, tile) => {
  if (draggedTile) {
    if (tile.row === draggedTile.row) {
      if (tile.col === draggedTile.col - 1) return borderLeftSquare;
      else if (tile.col === draggedTile.col + 1) return borderRightSquare;
    } else if (tile.col === draggedTile.col) {
      if (tile.row === draggedTile.row - 1) return borderTopSquare;
      else if (tile.row === draggedTile.row + 1) return borderBottomSquare;
    }
  }
  return undefined;
};

export const Tile = ({
  dragData: {
    draggedTile,
    onPointerDown,
    onPointerUp,
    hoveredTile,
    setHoveredTile,
  },
  tile,
}) => {
  const isDragging = draggedTile === tile;
  const borderStatus = getBorder(draggedTile, tile);

  return (
    <div
      className={cx(
        "Tile h-20 w-20",
        isDragging ? "bg-gray-300" : tile.color,
        borderStatus ?? borderDefault,
        hoveredTile === tile &&
          "ring-blue-500 ring-8 z-10 saturate-200 brightness-200"
      )}
      onPointerEnter={() => {
        console.log("entering: ", borderStatus);
        if (!!borderStatus) {
          setHoveredTile(tile);
        }
      }}
      onPointerLeave={() => {
        setHoveredTile();
      }}
      onPointerDown={(e) => onPointerDown(e, tile)}
      onPointerUp={onPointerUp}
    />
  );
};
