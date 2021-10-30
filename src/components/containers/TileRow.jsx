// Components - gobal
import { Tile } from "./Tile";

export const TileRow = ({
  draggedTile,
  dragCallbacks,
  hoveredTile,
  tileRow,
}) => {
  return (
    <div className="Tile-Row flex">
      {tileRow.map((tile) => (
        <Tile
          tile={tile}
          key={tile.uuid}
          dragCallbacks={dragCallbacks}
          draggedTile={draggedTile}
          hoveredTile={hoveredTile}
        />
      ))}
    </div>
  );
};
