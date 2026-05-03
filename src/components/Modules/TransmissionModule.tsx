import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Globe, Linkedin, Github, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { SlideButton } from '../ui/slide-button';
import { SpecialText } from '../ui/special-text';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// To activate: sign up at https://www.emailjs.com, create a service + template,
// then set these values in your .env file:
//   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxx
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? '';
const USE_EMAILJS         = !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

export const TransmissionModule = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const formRef = useRef<HTMLDivElement>(null);
  const contactEmail = "rohilkohli.business@gmail.com";

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = 'NAME_REQUIRED';
    if (!formData.email.trim()) {
      next.email = 'EMAIL_REQUIRED';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'INVALID_FORMAT';
    }
    if (!formData.message.trim()) next.message = 'MESSAGE_REQUIRED';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSlideComplete = async () => {
    if (!validate()) return;

    if (USE_EMAILJS) {
      setSubmitStatus('sending');
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: contactEmail,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch {
        setSubmitStatus('error');
      }
    } else {
      // Fallback: open mailto if EmailJS not configured
      const subject = encodeURIComponent(`Transmission from ${formData.name}`);
      const body = encodeURIComponent(`Origin Entity: ${formData.name}\nSecure Freq Link: ${formData.email}\n\nMission Details:\n${formData.message}`);
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="Transmission" subtitle="Protocol_Established // Open_Channel" icon={Globe} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-xl text-slate-400 font-mono italic leading-relaxed">
            "SYSTEM ACTIVE AND READY FOR NEXT DEPLOYMENT. ENCRYPTION PROTOCOLS STANDING BY."
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-4 group"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
              aria-label={`Send email to ${contactEmail}`}
            >
              <div className="w-12 h-12 rounded-sm bg-cyber-gray-900 border border-white/5 flex items-center justify-center group-hover:border-neon-cyan transition-colors">
                <Mail className="text-slate-500 group-hover:text-neon-cyan transition-colors" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase">Comm_Link_01</div>
                <div className="text-white font-bold group-hover:text-neon-cyan transition-colors truncate max-w-[200px] sm:max-w-none min-h-[1.25rem] flex items-center">
                  {isEmailHovered ? (
                    <SpecialText speed={15}>{contactEmail}</SpecialText>
                  ) : (
                    <span className="opacity-40">REVEAL_SECURE_CHANNEL</span>
                  )}
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rohil-kohli-041022236/"
              target="_blank"
              rel="noopener noreferrer me"
              className="flex items-center gap-4 group"
              aria-label="LinkedIn profile — Rohil Kohli"
            >
              <div className="w-12 h-12 rounded-sm bg-cyber-gray-900 border border-white/5 flex items-center justify-center group-hover:border-neon-purple transition-colors">
                <Linkedin className="text-slate-500 group-hover:text-neon-purple transition-colors" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase">Comm_Link_02</div>
                <div className="text-white font-bold group-hover:text-neon-purple transition-colors truncate max-w-[200px]">rohil-kohli-041022236</div>
              </div>
            </a>

            <a
              href="https://github.com/rohilkohli"
              target="_blank"
              rel="noopener noreferrer me"
              className="flex items-center gap-4 group"
              aria-label="GitHub profile — rohilkohli"
            >
              <div className="w-12 h-12 rounded-sm bg-cyber-gray-900 border border-white/5 flex items-center justify-center group-hover:border-white transition-colors">
                <Github className="text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase">Comm_Link_03</div>
                <div className="text-white font-bold group-hover:text-white transition-colors truncate max-w-[200px]">rohilkohli</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-cyber-gray-900 border border-neon-cyan/20 flex items-center justify-center">
                <MapPin className="text-neon-cyan animate-pulse" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase">Base_Location</div>
                <div className="text-white font-bold uppercase">New Delhi, India</div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <SystemPanel title="SYSTEM_STATUS">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest">
                <span className="text-neon-cyan">OP_READY_FOR_DEPLOYMENT</span>
                <span className="text-slate-500">RELOCATION_AVAILABLE: YES</span>
              </div>
            </SystemPanel>
          </div>
        </div>

        <div ref={formRef}>
          <SystemPanel title="TRANSMISSION_FORM" className="relative h-full bg-cyber-gray-900/60">

            {/* Success State */}
            {submitStatus === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-cyber-gray-900/95 z-10 rounded-sm">
                <CheckCircle size={48} className="text-neon-cyan" />
                <div className="text-center">
                  <div className="font-mono text-neon-cyan text-sm font-bold tracking-widest mb-1">TRANSMISSION_COMPLETE</div>
                  <div className="font-mono text-slate-500 text-xs">Signal received. Response incoming.</div>
                </div>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 px-4 py-2 border border-neon-cyan/30 text-neon-cyan font-mono text-[10px] uppercase tracking-widest hover:bg-neon-cyan/10 transition-colors"
                >
                  NEW_TRANSMISSION
                </button>
              </div>
            )}

            {/* Error State */}
            {submitStatus === 'error' && (
              <div className="mb-4 flex items-center gap-3 p-3 border border-red-500/30 bg-red-500/5">
                <AlertCircle size={16} className="text-red-500 shrink-0" />
                <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest">
                  TRANSMISSION_FAILED — Check connection or use email directly
                </span>
              </div>
            )}

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="tx-name" className="font-mono text-[9px] text-slate-500 uppercase tracking-widest pl-1">Origin_Entity_ID</label>
                <input
                  id="tx-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="NAME / CORPORATE_IDENTITY"
                  aria-describedby={errors.name ? 'tx-name-error' : undefined}
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-cyber-black/50 border border-white/5 px-4 py-3 text-white text-sm font-mono focus:border-neon-cyan outline-none transition-all placeholder:opacity-30 disabled:opacity-50"
                />
                {errors.name && (
                  <p id="tx-name-error" role="alert" className="font-mono text-[9px] text-red-500 pl-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="tx-email" className="font-mono text-[9px] text-slate-500 uppercase tracking-widest pl-1">Secure_Freq_Link</label>
                <input
                  id="tx-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="EMAIL_ADDRESS"
                  aria-describedby={errors.email ? 'tx-email-error' : undefined}
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-cyber-black/50 border border-white/5 px-4 py-3 text-white text-sm font-mono focus:border-neon-cyan outline-none transition-all placeholder:opacity-30 disabled:opacity-50"
                />
                {errors.email && (
                  <p id="tx-email-error" role="alert" className="font-mono text-[9px] text-red-500 pl-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="tx-message" className="font-mono text-[9px] text-slate-500 uppercase tracking-widest pl-1">Mission_Details</label>
                <textarea
                  id="tx-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="MESSAGE_CONTENT_HERE..."
                  aria-describedby={errors.message ? 'tx-message-error' : undefined}
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-cyber-black/50 border border-white/5 px-4 py-3 text-white text-sm font-mono focus:border-neon-cyan outline-none transition-all placeholder:opacity-30 resize-none disabled:opacity-50"
                />
                {errors.message && (
                  <p id="tx-message-error" role="alert" className="font-mono text-[9px] text-red-500 pl-1">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-center pt-2">
                {submitStatus === 'sending' ? (
                  <div className="flex items-center gap-3 text-neon-cyan font-mono text-xs uppercase tracking-widest">
                    <Loader2 size={16} className="animate-spin" />
                    <span>TRANSMITTING...</span>
                  </div>
                ) : (
                  <SlideButton onSlide={handleSlideComplete} className="w-full" />
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center opacity-30 pointer-events-none">
              <div className="w-16 h-px bg-white/20" />
              <div className="font-mono text-[8px]">
                {USE_EMAILJS ? 'EMAILJS_ENCRYPTED' : 'MAILTO_FALLBACK'}
              </div>
              <div className="w-16 h-px bg-white/20" />
            </div>
          </SystemPanel>
        </div>
      </div>
    </section>
  );
};
