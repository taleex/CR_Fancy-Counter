import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return prev - 1;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <div className="button-container">
      <button disabled={locked} className="count-btn" onClick={handleClick}>
        {type === "minus" ? (
          <MinusIcon className="count-btn-icon" />
        ) : (
          <PlusIcon className="count-btn-icon" />
        )}
      </button>
    </div>
  );
}
