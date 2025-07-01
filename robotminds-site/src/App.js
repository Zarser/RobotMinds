import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"; // Din custom CSS med snap scroll och about-grid m.m.
import gbFlag from './media/gb.png';
import svFlag from './media/swe.png';

const translations = {
  sv: {
    hero: {
      title: "Robot Minds",
      subtitle: "AI-lösningar med verkliga robotar",
      description: "Robot Minds – där teknik möter människa I en tid där teknologi utvecklas snabbare än någonsin, står organisationer inför stora möjligheter – men också stora utmaningar. På Robot Minds tror vi på en framtid där robotar arbetar sida vid sida med människor, och där tekniken förstärker snarare än ersätter mänsklig kompetens. Vi hjälper er att inte bara införa robotar – vi hjälper er att tänka nytt kring processer, service och människors roll i en robotiserad verklighet.​",
    },
    about: {
      title: "Vad vi erbjuder",
      boxes: [
        {
          text: "Vi hjälper kommuner, regioner och myndigheter att införa robotteknik som stärker verksamheten – utan att tappa det mänskliga perspektivet. Genom behovsanpassade lösningar, pilotprojekt och utbildning skapar vi trygg, effektiv och framtidssäkrad robotisering inom välfärd, skola, kundservice och administration.",
        },
        {
          img: "https://static.wixstatic.com/media/a1a469_502ae728a97e412285728d8dfaf83c0f~mv2.png/v1/fill/w_1275,h_742,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/a1a469_502ae728a97e412285728d8dfaf83c0f~mv2.png",
          text: "Vår vision om robotik i offentlig sektor där människan alltid står i centrum.",
        },
        {
          text: "Är du nyfiken på vad robotik kan göra för dig? Låt oss visa dig. Med våra pilot projekt kan du testa och se förbättringarna i praktiken utan att behöva underteckna något, så att ni kan känna er trygg med de nya förändringarna."
        },
        {
          img: "https://static.wixstatic.com/media/a1a469_906549c1c6834a52a6a68b9a1e2862d3~mv2.jpg/v1/fill/w_1054,h_546,al_c,q_85,enc_avif,quality_auto/a1a469_906549c1c6834a52a6a68b9a1e2862d3~mv2.jpg",
          text: "Pilotprojekt där du kan prova och se resultat innan beslut tas.",
        },
        // Fyra extra boxar:
        {
          text: "Utbildning och kompetensutveckling för att rusta organisationer för framtiden.",
        },
        {
          img: "https://static.wixstatic.com/media/a1a469_1eb2f29066e24f43aee9693eead7b409~mv2.jpeg/v1/fill/w_1149,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a1a469_1eb2f29066e24f43aee9693eead7b409~mv2.jpeg",
          text: "Modern teknik som stärker era arbetsprocesser.",
        },
        {
          text: "Vår metodik bygger på samarbete och ständig förbättring.",
        },
        {
          img: "https://static.wixstatic.com/media/a1a469_02bd7f5f13cf4e85a36d769ad5abab91~mv2.jpeg/v1/fill/w_635,h_365,al_c,lg_1,q_80,enc_avif,quality_auto/a1a469_02bd7f5f13cf4e85a36d769ad5abab91~mv2.jpeg",
        },
      ]
    },
    contact: {
      title: "Kontakta Oss",
      subtitle: "Vi hörs!",
      description: "Vill du veta mer? Hör av dig till oss så berättar vi mer om vad vi kan erbjuda.",
      placeholders: {
        name: "Ditt namn",
        email: "din.email@exempel.se",
        message: "Skriv ditt meddelande här",
        send: "Skicka",
        sending: "Skickar...",
        success: "Tack! Ditt meddelande har skickats.",
        error: "Vänligen fyll i alla fält korrekt."
      },
      labels: {
        name: "Namn",
        email: "E-post",
        message: "Meddelande"
      },
      tagline: "Tillsammans med våra kunder formar vi framtiden"
    },
  },
  en: {
    hero: {
      title: "Robot Minds",
      subtitle: "AI solutions with real-world robots",
      description: "Robot Minds – Where Technology Meets Humanity. In a time when technology is advancing faster than ever, organizations face great opportunities — but also significant challenges. At Robot Minds, we believe in a future where robots work side by side with humans, and where technology enhances rather than replaces human expertise. We help you not only implement robots — we help you rethink processes, service, and the role of people in a robotized reality.",
    },
    about: {
      title: "What We Offer",
      boxes: [
        {
          text: "We help municipalities, regions, and government agencies implement robotic technology that enhances operations—without losing the human perspective. Through customized solutions, pilot projects, and training, we enable secure, efficient, and future-proof automation in welfare, education, customer service, and administration.",
        },
        {
          img: "https://static.wixstatic.com/media/a1a469_502ae728a97e412285728d8dfaf83c0f~mv2.png/v1/fill/w_1275,h_742,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/a1a469_502ae728a97e412285728d8dfaf83c0f~mv2.png",
          text: "Our vision of robotics in the public sector where people always remain central.",
        },
        {
          img: "https://static.wixstatic.com/media/a1a469_906549c1c6834a52a6a68b9a1e2862d3~mv2.jpg/v1/fill/w_1054,h_546,al_c,q_85,enc_avif,quality_auto/a1a469_906549c1c6834a52a6a68b9a1e2862d3~mv2.jpg",
          text: "Pilot projects where you can try and see results before decisions are made.",
        },
        {
          text: "Are you curious about what robotics can do for you? Let us show you. With our pilot projects, you can test and see the improvements in practice—without having to sign anything—so you can feel confident about the new changes",
        },
        {
          text: "Training and skills development to prepare organizations for the future.",
        },
        {
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
          text: "Modern technology that strengthens your workflows.",
        },
        {
          text: "Our methodology is based on collaboration and continuous improvement.",
        },
        {
          img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
        },
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let’s talk!",
      description: "Want to learn more? Get in touch and we’ll tell you what we can offer.",
      placeholders: {
        name: "Your name",
        email: "your.email@example.com",
        message: "Write your message here",
        send: "Send",
        sending: "Sending...",
        success: "Thank you! Your message has been sent.",
        error: "Please fill in all fields correctly."
      },
      labels: {
        name: "Name",
        email: "Email",
        message: "Message"
      },
      tagline: "Together with our clients, we shape the future"
    },
  }
};

// Rullande loggor - duplicerar för sömlös scroll
const logos = [
  "https://helsingborgsstadsteater.se/wp-content/uploads/2023/04/helsingborg_logo_a1_rgb_25.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/9e/Telenor_Logo.svg",
  "https://www.cellipbloggen.se/wp-content/uploads/2019/06/IHM.jpg",
  "https://manage.goldpillars.ae/Developer/Developer_Logo/205/Thumb/205.webp",
  "https://static.wixstatic.com/media/a1a469_e09570ddcb4240f088862f407aff122d~mv2.png/v1/fill/w_128,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GreaterCoPENHAGEN_Logo_Black_RGB%20(1)_edited.png",
  "https://static.wixstatic.com/media/a1a469_26b66167cc7b41d4beb2ea311c0a430f~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ikea-logo-png-transparent.png",
  "https://static.wixstatic.com/media/a1a469_f9441e491cad48a9bd7fa66a04b52892~mv2.png/v1/crop/x_10,y_21,w_270,h_128/fill/w_160,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lansf%C3%B6rsakring.png",
  "https://static.wixstatic.com/media/a1a469_fcd6b3a93eee42d1b6198a8db05a50ca~mv2.png/v1/fill/w_164,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/52a95681-7b33-4145-9f61-415a1bddefa3-w_300_h_100.png",
  "https://static.wixstatic.com/media/a1a469_1e3ee3b2854a496792da6eb1b2f9e5df~mv2.png/v1/fill/w_159,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NSR_logo_SV.png",
  "https://static.wixstatic.com/media/a1a469_275db8484eb1409a8f687499556c73f5~mv2.jpg/v1/crop/x_0,y_69,w_225,h_156/fill/w_116,h_74,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Epicenter%20small.jpg",
  "https://static.wixstatic.com/media/a1a469_28826f3e44d2486097fe8a29112a5745~mv2.png/v1/fill/w_132,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/oresundskraft.png",
  "https://static.wixstatic.com/media/a1a469_5591e5c0f08a41cda49b28ff2468e646~mv2.png/v1/fill/w_139,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tele2.png",
  // Lägg till fler loggor här vid behov
];

const LogoMarquee = () => (
  <div className="logo-marquee-wrapper">
    <div className="logo-marquee">
      {logos.concat(logos).map((logo, idx) => (
        <img key={idx} src={logo} alt={`logo-${idx}`} className="logo" />
      ))}
    </div>
  </div>
);

const Section = ({ id, title, subtitle, description, boxes }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  if (id === "contact") {
    return (
      <section id={id} className="section d-flex flex-column justify-content-center align-items-center text-white">
        <div style={{ textAlign: "center", marginBottom: "0.5rem", fontSize: "1.25rem", fontWeight: "600", color: "#fff", maxWidth: "700px" }}>
          Tillsammans med våra kunder formar vi framtiden
        </div>
        <LogoMarquee />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-4"
          style={{ maxWidth: "600px", width: "90%" }}
        >
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#993DE9" }}>{title}</h1>
          <h2 className="h4 mb-2">{subtitle}</h2>
          <p className="lead mb-4">{description}</p>
          <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Namn</label>
              <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required placeholder="Ditt namn" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-post</label>
              <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required placeholder="din.email@exempel.se" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Meddelande</label>
              <textarea id="message" name="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required placeholder="Skriv ditt meddelande här" />
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: "#993DE9", color: "white" }} disabled={status === "sending"}>
              {status === "sending" ? "Skickar..." : "Skicka"}
            </button>
            {status === "success" && <div className="text-success mt-3">Tack! Ditt meddelande har skickats.</div>}
            {status === "error" && <div className="text-danger mt-3">Vänligen fyll i alla fält korrekt.</div>}
          </form>
        </motion.div>
      </section>
    );
  }

  // Hero-sektionen (ingen ändring)
  if (id === "hero") {
    return (
      <section id={id} className="section d-flex flex-column justify-content-center align-items-center text-white">
        <div className="w-100 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <img
              src="https://static.wixstatic.com/media/10a7ba_df1f22afb2f04ace961331774e2f552d~mv2.png/v1/crop/x_273,y_432,w_1356,h_227/fill/w_686,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ROOBOO.png"
              alt="Robot Minds Hero Logo"
              style={{ maxWidth: "80%", height: "auto" }}
              className="mb-3"
            />
            <h2 className="h4 mb-2">{subtitle}</h2>
            <p className="lead w-75 mx-auto">{description}</p>
          </motion.div>

          <div className="w-100" style={{ overflow: "hidden" }}>
            <img
              src="https://static.wixstatic.com/media/10a7ba_f30e6c740be84c5bbf3c2973c4cf6c12f000.jpg/v1/fill/w_1610,h_565,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/10a7ba_f30e6c740be84c5bbf3c2973c4cf6c12f000.jpg"
              alt="Robot Minds Hero Image"
              style={{ width: "100%", height: "auto", objectFit: "cover", marginTop: "2rem" }}
            />
          </div>
        </div>
      </section>
    );
  }

  // About-sektionen (ingen ändring)
  if (id === "about") {
    return (
      <section id={id} className="section d-flex flex-column justify-content-center align-items-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#993DE9" }}>{title}</h1>
          <h2 className="h4 mb-3 text-white">{subtitle}</h2>
          <p className="lead mx-auto text-white" style={{ maxWidth: "700px" }}>{description}</p>
        </motion.div>

        <div className="about-grid">
          {boxes?.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="about-box"
              style={{ position: "relative" }}
            >
              {box.img && (
                <>
                  <img src={box.img} alt={`about-box-${index}`} />
                  {box.text && (
                    <div className="about-text-overlay">
                      <p>{box.text}</p>
                    </div>
                  )}
                </>
              )}
              {!box.img && box.text && (
                <p>{box.text}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // Default (för ev andra sektioner)
  return (
    <section id={id} className="section d-flex flex-column justify-content-center align-items-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="display-4 fw-bold mb-3">{title}</h1>
        <h2 className="h4 mb-2">{subtitle}</h2>
        <p className="lead w-75 mx-auto">{description}</p>
      </motion.div>
    </section>
  );
};

export default function App() {
  const [lang, setLang] = useState("sv");
  const content = translations[lang];

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav
        className="navbar fixed-top px-4 shadow-sm d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#191919" }}
      >
        <div>
          <button
            onClick={() => setLang("sv")}
            className={`btn btn-sm me-2 ${lang === "sv" ? "btn-dark" : "btn-outline-dark"}`}
          >
            <img 
              src={svFlag} 
              alt="SV Flag" 
              style={{ height: '24px', width: '24px', display: 'block' }} 
            />
          </button>
          <button
            onClick={() => setLang("en")}
            className={`btn btn-sm ${lang === "en" ? "btn-dark" : "btn-outline-dark"}`}
          >
            <img 
              src={gbFlag} 
              alt="GB Flag" 
              style={{ height: '24px', width: '24px', display: 'block' }} 
            />
          </button>
        </div>
      </nav>

      {/* Page sections */}
      <div className="snap-scroll">
        {Object.entries(content).map(([id, data]) => (
          <div key={id} className="snap-section">
            <Section id={id} {...data} />
          </div>
        ))}
      </div>
    </div>
  );
}
