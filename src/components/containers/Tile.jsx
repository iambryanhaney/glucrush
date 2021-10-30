const img = new Image();
img.src = "./hackergotchi-simpler.png";

export const Tile = ({ tile }) => {
  return (
    <div
      className={`Tile border h-20 w-20 border-gray-500 ${tile.color}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setDragImage(img, 0, 0);
      }}
    />
  );
};
