import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-bottom-bar',
  standalone: true,
  template: `
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 flex md:hidden shadow-[0_-4px_24px_-4px_rgba(30,41,59,0.10)]"
  aria-label="Mobile bottom navigation">
  <a href="tel:+918617047355" id="mob-call-btn"
    class="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-slate-600 hover:text-green-800 active:bg-slate-50 transition-colors"
    aria-label="Call North Bengal Realty">
    <svg class="icon text-xl" aria-hidden="true"><use href="#i-phone"></use></svg>
    <span class="text-[10px] font-semibold">Call</span>
  </a>
  <a href="https://wa.me/919832506170?text=Hi%20North%20Bengal%20Realty%2C%20I%27m%20interested%20in%20a%20property%20enquiry."
    target="_blank" rel="noopener noreferrer" id="mob-wa-btn"
    class="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-green-800 text-white hover:bg-green-900 active:scale-95 transition-all"
    aria-label="WhatsApp North Bengal Realty">
    <svg class="icon text-xl" aria-hidden="true"><use href="#i-whatsapp"></use></svg>
    <span class="text-[10px] font-semibold">WhatsApp</span>
  </a>
  <a href="#contact" id="mob-enquire-btn"
    class="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-slate-600 hover:text-green-800 active:bg-slate-50 transition-colors"
    aria-label="Send an enquiry">
    <svg class="icon text-xl" aria-hidden="true"><use href="#i-envelope"></use></svg>
    <span class="text-[10px] font-semibold">Enquire</span>
  </a>
</nav>
  `,
})
export class MobileBottomBarComponent {}
