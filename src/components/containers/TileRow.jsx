// Components - gobal
import { Tile } from "./Tile";

export const TileRow = ({ tileRow }) => {
  return (
    <div className="Tile-Row">
      {tileRow.map((tileColumn) => (
        <Tile tile={tileColumn} key={tileColumn.uuid} />
      ))}
    </div>
  );
};
