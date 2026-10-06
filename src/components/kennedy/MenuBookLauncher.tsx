import { BookOpen, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { MenuBook } from "./MenuBook";
import bookCover from "@/assets/menu-book-cover.jpg";

export function MenuBookLauncher({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Button className="menu-book-launcher" onClick={() => onOpenChange(true)} aria-label="View Menu Book">
        <span className="menu-book-launcher__thumbnail"><img src={bookCover} alt="" width={768} height={1024} loading="lazy" /></span>
        <span>View Menu Book</span><BookOpen aria-hidden="true" />
      </Button>
      <DialogPortal>
        <DialogOverlay className="menu-book-overlay" />
        <DialogPrimitive.Content className="menu-book-viewer">
          <div className="menu-book-viewer__header">
            <div><DialogTitle className="menu-book-viewer__title">Kennedy Menu Book</DialogTitle><DialogDescription className="menu-book-viewer__subtitle">Moon Grill · Narowal</DialogDescription></div>
            <DialogClose asChild><Button variant="ghost" size="icon" aria-label="Close menu book" className="menu-book-viewer__close"><X /></Button></DialogClose>
          </div>
          <MenuBook />
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}