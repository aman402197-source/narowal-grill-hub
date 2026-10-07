import { motion } from "framer-motion";
import { Quote, Star, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import guestOne from "@/assets/kennedy-guest-1.webp";
import guestTwo from "@/assets/kennedy-guest-2.webp";
import guestThree from "@/assets/kennedy-guest-3.webp";
import guestFour from "@/assets/kennedy-guest-4.webp";

const STORIES = [
  { name: "The pizza lover", dish: "Pizza night", image: guestOne, quote: "That first cheesy slice, a little heat, and a table full of friends. My kind of pizza night." },
  { name: "The burger fan", dish: "Burger cravings", image: guestTwo, quote: "A big burger, a proper appetite, and no sharing. Some cravings deserve their own order." },
  { name: "The desi foodie", dish: "Pakistani favourites", image: guestThree, quote: "Give me smoky grills and a good karahi. Desi comfort food always brings everyone together." },
  { name: "The family host", dish: "Something for everyone", image: guestFour, quote: "Pizza for one, burgers for another, Pakistani favourites for the rest. That’s a happy family table." },
];
const FAQS = [
  { question: "What’s on the Kennedy menu?", answer: "Burgers, pizza, and Pakistani favourites. Browse the current menu for available dishes, sizes, and prices." },
  { question: "How do I place an order?", answer: "Choose a dish from the menu, add it to your cart, and continue to checkout. You can review your items before confirming." },
  { question: "Can I check ingredients before ordering?", answer: "Open a dish to see its description and any listed ingredients or allergens. If you have a food allergy, confirm suitability with the restaurant before ordering." },
  { question: "Which payment options can I use?", answer: "Choose from the payment options shown at checkout, including Cash on Delivery, JazzCash, and EasyPaisa." },
  { question: "Where can I follow my order?", answer: "Open your profile’s live-order view to check the status of an active order. When available, the Order live tab takes you there directly." },
];

export function GuestStories() {
  const reduced = useReducedMotion();
  return (
    <div className="kennedy-community">
      <section className="guest-stories" aria-labelledby="guest-stories-title">
        <div className="community-heading">
          <span className="community-eyebrow">Around the Kennedy table</span>
          <h2 id="guest-stories-title">Good food.<br /><em>Better company.</em></h2>
          <p>Burgers, pizza &amp; Pakistani favourites. A craving for every seat.</p>
          <span className="guest-stories__sample">Sample guest stories</span>
        </div>
        <div className="guest-stories__grid">
          {STORIES.map((story, index) => (
            <motion.article key={story.name} className={`guest-story guest-story--${index + 1}`}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduced ? undefined : { y: -6 }}>
              <div className="guest-story__portrait"><span aria-hidden="true" /><img src={story.image} alt="" width={240} height={320} loading="lazy" decoding="async" /></div>
              <div className="guest-story__body">
                <Quote className="guest-story__quote" aria-hidden="true" />
                <div className="guest-story__stars" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <Star key={i} />)}</div>
                <blockquote>{story.quote}</blockquote>
                <div className="guest-story__person"><h3>{story.name}</h3><span>{story.dish}</span></div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="kennedy-faq" aria-labelledby="kennedy-faq-title">
        <div className="community-heading community-heading--faq">
          <span className="community-eyebrow"><MessageCircle aria-hidden="true" /> A little food for thought</span>
          <h2 id="kennedy-faq-title">Got questions?<br /><em>We’ve got you.</em></h2>
          <p>Before the first bite.</p>
        </div>
        <Accordion type="single" collapsible className="kennedy-faq__list">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="kennedy-faq__item">
              <AccordionTrigger className="kennedy-faq__trigger"><span className="kennedy-faq__number">0{index + 1}</span><span>{faq.question}</span></AccordionTrigger>
              <AccordionContent className="kennedy-faq__answer">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}