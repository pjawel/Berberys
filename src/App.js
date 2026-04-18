import { motion } from 'motion/react';
import { 
  Music, 
  Wind, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  ChevronRight,
  Sparkles,
  Settings,
  Star,
  Quote
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-secondary/80 backdrop-blur-md border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold tracking-tight">
          Berberys
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
          <a href="#o-nas" className="hover:text-brand-accent transition-colors">O nas</a>
          <a href="#oferta" className="hover:text-brand-accent transition-colors">Oferta</a>
          <a href="#galeria" className="hover:text-brand-accent transition-colors">Galeria</a>
          <a href="#opinie" className="hover:text-brand-accent transition-colors">Opinie</a>
          <a href="#kontakt" className="hover:text-brand-accent transition-colors">Kontakt</a>
        </div>
        <a 
          href="tel:695165506" 
          className="bg-brand-primary text-brand-secondary px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-accent transition-all"
        >
          Zadzwoń
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Kutno | Gołębiew Stary
          </span>
          <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8">
            Twoje wymarzone <br /> 
            <span className="italic">przyjęcie</span> <br />
            u nas.
          </h1>
          <p className="text-lg text-brand-primary/70 max-w-md mb-10 leading-relaxed">
            Sala bankietowa Berberys to idealne miejsce na Twoją uroczystość. 
            Nowoczesne wnętrza, pełne wyposażenie i profesjonalna organizacja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#oferta" 
              className="bg-brand-primary text-brand-secondary px-8 py-4 rounded-full text-center font-medium flex items-center justify-center gap-2 hover:bg-brand-accent transition-all group"
            >
              Zobacz ofertę <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#kontakt" 
              className="border border-brand-primary/20 px-8 py-4 rounded-full text-center font-medium hover:bg-brand-primary/5 transition-all"
            >
              Skontaktuj się
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/197162344_305230727751299_1437186443314547508_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=p6kYes91kSwQ7kNvwErVZbO&_nc_oc=AdpwBFV4XA5lAz-q0USpxPT_AelFbXG7dxvpaDA7t6S7Aa2pmSTOh0QoaMkNRgU1PkA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=X0c5e4pkDZ-4FmXuTurCGw&_nc_ss=7a3a8&oh=00_Af2VvSbKUZbaZvmT_4hE8vcM_mFeHQHUw5jN6NbC0DowtA&oe=6A0AAF51" 
              alt="Banquet Hall Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-brand-secondary p-8 rounded-3xl shadow-xl hidden lg:block border border-brand-primary/5">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-secondary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif text-xl font-bold">Wszystkie okazje</div>
                <div className="text-sm opacity-60">Wesela, chrzciny, jubileusze</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/50 p-8 rounded-[2rem] border border-brand-primary/5 backdrop-blur-sm"
  >
    <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center mb-6 text-brand-accent border border-brand-accent/20">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl mb-4">{title}</h3>
    <p className="text-brand-primary/60 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Offer = () => {
  return (
    <section id="oferta" className="py-32 bg-brand-primary/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            Co oferujemy
          </motion.h2>
          <p className="text-brand-primary/60 max-w-2xl mx-auto">
            Dbamy o każdy szczegół, aby Twoje wydarzenie było niezapomniane. 
            Nasza sala łączy elegancję z funkcjonalnością.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Wind}
            title="Klimatyzacja"
            description="Sala jest w pełni klimatyzowana, co zapewnia komfort gościom nawet w najgorętsze dni."
          />
          <FeatureCard 
            icon={Music}
            title="Miejsce dla DJ"
            description="Przygotowane stanowisko dla DJ-a lub orkiestry z profesjonalnym nagłośnieniem."
          />
          <FeatureCard 
            icon={Settings}
            title="Wyposażenie"
            description="Możliwość wynajęcia samej sali lub kompleksowej organizacji z pełnym wyposażeniem."
          />
          <FeatureCard 
            icon={Calendar}
            title="Wszystkie Imprezy"
            description="Wesela, chrzciny, komunie, urodziny, spotkania firmowe i wiele innych."
          />
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/120277998_173928100881563_8575442127303835305_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5GgDTrgbu-IQ7kNvwEkfWRp&_nc_oc=Adre3Lp9zBFWH3GJ7ygyVyRhzMz-Nso5PGVPY87wUvZ9qmsE3iLjAorItftJ9tmU2VA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=47hMLCmgt3yvs3SEim8R4g&_nc_ss=7a3a8&oh=00_Af1FcQn3NyM3IaWwQVg87DxVYvMmwoikPOY-K7lVHd09Ew&oe=6A0AA752",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/473044525_1097982218476142_1218127557461096802_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=OL7ExAr1K6YQ7kNvwElKkN7&_nc_oc=AdoIiFCmx4XC2hWbylRSVcZMUKZ-nOOjMyjYTFFZXQmlZu86MnP81WdNCpKN606N48g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=m5IEc3KeHcoEkn6kNQntIg&_nc_ss=7a3a8&oh=00_Af2uV5Ku1rlavdawcWK2tacFgI6-JmImJFaAUzEXRzR0Wg&oe=69E9142F",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/492860054_1205553961575033_5673426591475668643_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=p2qQsTrYjvYQ7kNvwHYkoin&_nc_oc=Adq3_0r8WbZmLBbvCUuJVkkbSpKIG-WoGGo0VnyLOIP08ZDcm1sXoWrqfVu0LVM5Qhk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=CU5BUyhIkUa_1Xh4ozEM3Q&_nc_ss=7a3a8&oh=00_Af01lI5_PyClvdNWuEB5NDSud-4ArZEoGjDKBSezB2v5Mg&oe=69E8FD73",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/484228710_1166540075476422_1593074421368781988_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=c8OyMFjCWmEQ7kNvwGOj1tV&_nc_oc=Adp1RXR0x_RaZ4UIMC7Qb6zmB6rTDjSwMwDfKgLuUEov3UP0QdACEAHTQztcB8wRVdQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=jFXEz_Z7h7yIZdZOW4IZ-Q&_nc_ss=7a3a8&oh=00_Af17D14yNyDLcTrLzekT3hu1GpHzWVbEZChkifiHoU3WNg&oe=69E92DB2",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/472777352_1094683718805992_5823072443716725031_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=o-e-2ygfMQ8Q7kNvwGSE8o8&_nc_oc=AdruagvqskJnnsProC1fv0kSFV468Ik5rCDuGWM_gOaIEt0STR4-RiHVLhnLVxzRAM0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=9uof95Y8lMxyktRsPOqvdQ&_nc_ss=7a3a8&oh=00_Af1vRc_iibVcTnQP2av1oc-rWRygRL9Urnf7SX0mmmTI9Q&oe=69E916A7",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/194261104_305231044417934_7775440655015166011_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TCohNnbBMIUQ7kNvwHYUQG7&_nc_oc=AdqUKbfU8V2OtCYwoQdt5kXK6PVV80F6plzWyAPyZxqK-rykyBt3mo5iCncoZq_uooU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=8gjM_MzpGtkiPF4eyD76JQ&_nc_ss=7a3a8&oh=00_Af2xHpFs-B4fCzP5aGg_dFavpCZFN5irrCGnqgQ4SZZ5gg&oe=6A0AC269",
  ];

  return (
    <section id="galeria" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Nasza Sala</h2>
            <p className="text-brand-primary/60 max-w-md">
              Zajrzyj do środka i zainspiruj się przestrzenią Sala Berberys.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=100063613206977" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-brand-accent cursor-pointer hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Gallery image ${i}`} 
                className="w-full rounded-3xl hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Anna Kowalska",
      date: "2 miesiące temu",
      text: "Wspaniałe miejsce na wesele! Sala jest piękna, klimatyzowana i bardzo przestronna. Obsługa na najwyższym poziomie.",
      rating: 5
    },
    {
      name: "Marek Nowak",
      date: "pół roku temu",
      text: "Polecam Salę Berberys każdemu, kto szuka klimatycznego miejsca na uroczystość. Wszystko dopięte na ostatni guzik.",
      rating: 5
    },
    {
      name: "Katarzyna Wiśniewska",
      date: "rok temu",
      text: "Bardzo miła atmosfera i profesjonalne podejście do klienta. Sala w pełni wyposażona, niczego nam nie brakowało.",
      rating: 5
    }
  ];

  return (
    <section id="opinie" className="py-32 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Referencje</span>
          <h2 className="text-4xl md:text-5xl mb-6">Co mówią nasi klienci</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-brand-accent text-brand-accent" />
            ))}
            <span className="ml-2 font-bold text-lg">5.0 / 5.0</span>
          </div>
          <p className="text-brand-primary/60">Opinie zebrane z naszego profilu na Facebooku</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-secondary p-8 rounded-[2.5rem] border border-brand-primary/5 shadow-sm relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-accent opacity-10" />
              <div className="flex gap-1 mb-4 text-brand-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="italic text-brand-primary/80 mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <div className="font-bold">{review.name}</div>
                <div className="text-sm opacity-50 uppercase tracking-tighter">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.facebook.com/profile.php?id=100063613206977&sk=reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors font-medium border-b border-brand-primary hover:border-brand-accent"
          >
            Zobacz wszystkie opinie na Facebooku <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-32 bg-brand-primary text-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="text-brand-accent font-medium tracking-widest uppercase text-sm mb-4 block">Kontakt</span>
          <h2 className="text-5xl md:text-6xl mb-16">Zapraszamy do kontaktu</h2>
          
          <div className="grid md:grid-cols-3 gap-12 w-full text-left">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-8 h-8 text-brand-accent" />
              </div>
              <div>
                <div className="text-xl font-serif mb-2">Nasza Lokalizacja</div>
                <div className="opacity-60">Gołębiew Stary 20a<br />99-300 Kutno, Polska</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-8 h-8 text-brand-accent" />
              </div>
              <div>
                <div className="text-xl font-serif mb-2">Telefon</div>
                <a href="tel:695165506" className="opacity-60 hover:text-brand-accent transition-colors">+48 695 165 506</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-8 h-8 text-brand-accent" />
              </div>
              <div>
                <div className="text-xl font-serif mb-2">Email</div>
                <a href="mailto:basia.wujkowska@onet.pl" className="opacity-60 hover:text-brand-accent transition-colors">basia.wujkowska@onet.pl</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <section id="o-nas" className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-brand-accent/10 p-12 rounded-[3rem] border border-brand-accent/20 flex flex-col md:flex-row items-center gap-12">
          <div className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center shrink-0">
            <Sparkles className="w-12 h-12 text-brand-secondary" />
          </div>
          <div>
            <h3 className="text-3xl mb-4 italic font-serif">Twoja sala na każdą okazję</h3>
            <p className="text-brand-primary/70 text-lg leading-relaxed">
              Zorganizujemy Twoje przyjęcie z dbałością o każdy szczegół. Istnieje również możliwość wynajęcia samej sali. 
              Sala Berberys jest w pełni wyposażona, klimatyzowana i posiada specjalnie przygotowane miejsce dla DJ-a. 
              Zapraszamy do wspólnego tworzenia niezapomnianych wspomnień!
            </p>
          </div>
        </div>
      </section>
      <Offer />
      <Gallery />
      <Reviews />
      <Contact />
      <footer className="py-20 border-t border-brand-primary/5 text-center px-6">
        <div className="mb-12">
          <a 
            href="https://www.facebook.com/profile.php?id=100063613206977" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <Facebook className="w-6 h-6" />
            Odwiedź nas na Facebooku
          </a>
        </div>
        <div className="text-sm opacity-60 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Sala Bankietowa Berberys. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
