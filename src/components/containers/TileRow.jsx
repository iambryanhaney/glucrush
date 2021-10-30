export const TileRow = ({ tileRow }) => {
  return (
    <div className="Tile-Row">
      {tileRow.map((tileColumn) => (
        <div
          className={`Tile border h-20 w-20 border-gray-500 ${tileColumn.color}`}
        />
      ))}
    </div>
  );
};
