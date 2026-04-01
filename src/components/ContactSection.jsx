import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "./ui/BrandIcons";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/kasthooriGithub" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kasthoori-kaneshalingam-71b195351/" },
  
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      
      setSent(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please check your Firebase rules.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mt-3 mb-8 md:mb-12">
            Let's connect.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-5 sm:space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I'm always open to discussing new projects, internship opportunities, or just a friendly chat about design and development. Feel free to reach out!
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="text-xs sm:text-sm break-all">kasthoorikaneshalingam@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="text-xs sm:text-sm">Sri Lanka, Jaffna.</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <h4 className="font-display font-semibold text-xs sm:text-sm mb-3 text-muted-foreground uppercase tracking-wider">Follow Me</h4>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary border border-border/60 transition-colors btn-press"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {sent ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center p-8 bg-primary/5 rounded-2xl border border-primary/20 h-full min-h-[300px] text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-sm max-w-[250px]">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setSent(false)} 
                className="mt-6 text-primary text-sm font-semibold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow disabled:opacity-50"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                required
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow resize-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-press inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm w-full sm:w-auto justify-center disabled:opacity-70"
              >
                {loading ? "Sending..." : <>Send Message <Send size={14} /></>}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
