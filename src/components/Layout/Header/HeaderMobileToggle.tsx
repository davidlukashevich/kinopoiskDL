import { IoClose, IoMenu } from "react-icons/io5";

type Props = {
  open: boolean;
  onToggle: () => void;
};

export function HeaderMobileToggle({ open, onToggle }: Props) {
  return (
    <button
      className="md:hidden text-3xl"
      onClick={onToggle}
      type="button"
      aria-label="Toggle menu"
    >
      {open ? <IoClose /> : <IoMenu />}
    </button>
  );
}