// Components - gobal
import { Tile } from "./Tile";

export const TileRow = ({ dragData, tileRow }) => {
  return (
    <div className="Tile-Row flex">
      {tileRow.map((tile) => (
        <Tile tile={tile} key={tile.uuid} dragData={dragData} />
      ))}
    </div>
  );
};
