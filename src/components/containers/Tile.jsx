// Third Party
import { useRef } from "react";
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

  return borderDefault;
};

export const Tile = ({
  draggedTile,
  dragCallbacks: { onTileDragEnd, onTileDragEnter, onTileDragStart },
  hoveredTile,
  tile,
}) => {
  const isDragging = draggedTile === tile;

  const tileRef = useRef(null);

  return (
    <div
      className={cx(
        "Tile h-20 w-20",
        isDragging
          ? "bg-gray-300"
          : hoveredTile === tileRef?.current
          ? "bg-red-900"
          : tile.color,
        getBorder(draggedTile, tile)
      )}
      ref={tileRef}
      draggable
      // onDragStart={(e) => {
      //   onTileDragStart(e, tile);
      // }}
      // onDragEnd={onTileDragEnd}
      // onDragEnter={onTileDragEnter}
      // onDragLeave={(e) => console.log("leaving: ", e)}
      onPointerEnter={() => console.log("Entered! ", tile.row, tile.col)}
      onMouseDown={() => console.log("Starting Drag")}
      onMouseUp={() => console.log("Ending Drag")}
    />
  );
};
