"use client";
import React, { ReactNode } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";

interface NormalModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const NormalModal: React.FC<NormalModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="">
        <DialogContent className="bg-white border-gray-50 shadow-xl focus:outline-none absolute z-50 w-screen left-0 top-24 py-2 px-20">
          {children}
        </DialogContent>
      </div>
    </Dialog>
  );
};
