import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const handleReset = () => {
    setCount(0);
  };

  return (
    <button onClick={handleReset} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
