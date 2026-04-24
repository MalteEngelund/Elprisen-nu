
    /* const [open, setOpen] = useState(false); */

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#00000080]">
      <div className="rounded-lg shadow-lg p-6 w-[50%] min-w-100 relative bg-black border-2 border-green-500">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl text-red-500 cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}