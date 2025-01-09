import { useState, useEffect } from 'react';
import { Contestant } from '../../lib/models/contestant';
import { StreamingLinks } from './StreamingLinks';

interface DropdownMenuProps {
  track: Contestant;
  open: boolean;
}

function DropdownLinks({ track, open }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleSelect = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      {isOpen && <StreamingLinks track={track} onClick={handleSelect} />}
    </div>
  );
}

export default DropdownLinks;
