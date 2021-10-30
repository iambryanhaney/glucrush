// Components - Global
import { TileRow } from "./TileRow";

// Third Party
import { useState } from "react";
import gen from "random-seed";
import { nanoid } from "nanoid";

// const randomWithoutSeed = gen.create();

const tileColors = [
  "bg-gray-300",
  "bg-red-300",
  "bg-yellow-300",
  "bg-green-300",
  "bg-blue-300",
  "bg-indigo-300",
  "bg-purple-300",
  "bg-pink-300",
];

export const Playfield = () => {
  const boardRows = 8;
  const boardCols = 8;

  const [playfield] = useState(() => {
    // const randomSeed = randomWithoutSeed(10000);
    const random = gen.create(0);
    const draftPlayfield = [];
    for (let row = 0; row < boardRows; row++) {
      const draftRow = [];
      for (let col = 0; col < boardCols; col++) {
        draftRow.push({
          row,
          col,
          color: tileColors[random(8)],
          uuid: nanoid(),
        });
      }
      draftPlayfield.push(draftRow);
    }
    return draftPlayfield;
  });

  return (
    <div className="flex items-center justify-center shadow-2xl bg-black">
      {playfield.map((tileRow) => (
        <TileRow tileRow={tileRow} />
      ))}
    </div>
  );
};
