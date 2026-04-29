/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  MapPin,
  Coins,
  LayoutDashboard,
  Wrench,
  Utensils,
  Car,
  ShoppingBag,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowRight,
  Zap,
  Hammer,
  Droplets,
  Package,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
    <div className="flex items-center justify-between px-4 md:px-6 py-2">
      <img src="/logo.png" alt="PeungPa Logo" className="h-16 md:h-20 w-auto object-contain rounded-full" />
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
        <a href="#about" className="hover:text-brand-teal transition-colors">About</a>
        <a href="#services" className="hover:text-brand-teal transition-colors">Services</a>
        <a href="#income" className="hover:text-brand-teal transition-colors">Income</a>
        <a href="#investors" className="hover:text-brand-teal transition-colors">Investors</a>
      </div>
      <a
        href="https://bit.ly/4vUvkU5"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-teal text-white px-3 py-2 md:px-5 md:py-2.5 rounded-full font-semibold text-xs md:text-sm hover:bg-brand-teal-dark transition-all shadow-lg shadow-brand-teal/20 whitespace-nowrap"
      >
        <span className="md:hidden">สมัครเลย</span>
        <span className="hidden md:inline">สมัครเป็น PeungPa Rider</span>
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    {/* Video Background Container */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      >
        <source src="/rider.mp4" type="video/mp4" />
        {/* Local rider.mp4 from public folder */}
      </video>
      {/* Refined Overlays */}
      <div className="absolute inset-0 bg-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-teal-dark/80 via-brand-teal-dark/40 to-transparent" />
    </div>

    <div className="relative z-10 container mx-auto px-6 pt-20 text-center md:text-left flex flex-col items-center md:items-start max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-brand-teal-light bg-brand-teal/20 backdrop-blur-sm rounded-full border border-brand-teal/30">
          เปิดรับ Founding Rider รุ่นแรก
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4">
          Earn More. Help More.<br />Grow Together.
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/90 mb-2">
          มากกว่าแค่งานส่งของ แต่คือระบบรายได้จริง
        </p>
        <p className="text-lg text-white/80 mb-10 max-w-2xl">
          แพลตฟอร์มที่ช่วยให้คุณสร้างรายได้ พร้อมช่วยเหลือผู้คนในชีวิตจริง
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://bit.ly/4vUvkU5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-teal-light transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-teal/40"
          >
            สมัครเป็น PeungPa Rider
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://bit.ly/4vUvkU5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
          >
            เข้าร่วม Early Rider
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle2 className="w-5 h-5 text-brand-teal-light" />
            <span className="font-medium">GP เพียง 15%</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle2 className="w-5 h-5 text-brand-teal-light" />
            <span className="font-medium">งานหลากหลาย</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle2 className="w-5 h-5 text-brand-teal-light" />
            <span className="font-medium">สะสม Coin ได้</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="py-12 md:py-24 bg-white" id="about">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-800">
            Built for Real Life
          </h2>
          <div className="space-y-6 text-lg text-slate-600">
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 flex-shrink-0 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800">แนวคิดจากปัญหาที่เกิดขึ้นจริง</p>
                <p>เช่น ยางแตกตอนดึก ไม่มีคนช่วย เราเห็นช่องว่าง และสร้างโอกาสจากตรงนั้น</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 flex-shrink-0 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800">ออกแบบเพื่อคนทำงานจริง</p>
                <p>ระบบที่เข้าใจว่าความมั่นคง และความคุ้มค่าคือสิ่งที่สำคัญที่สุด</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 flex-shrink-0 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800">เข้าใจการหารายได้ในชีวิตจริง</p>
                <p>ไม่ใช่แค่แอป แต่คือพาร์ทเนอร์ที่จะโตไปด้วยกัน</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-6">
          <div className="bg-brand-bg p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-5xl font-display font-bold text-brand-teal mb-2">100+</span>
            <span className="text-slate-500 font-medium">คนสนใจเข้าร่วม</span>
          </div>
          <div className="bg-brand-bg p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-5xl font-display font-bold text-brand-teal mb-2">5+</span>
            <span className="text-slate-500 font-medium">เริ่มเปิดในหลายพื้นที่</span>
          </div>
          <div className="col-span-2 bg-brand-teal text-white p-8 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Scalable Vision</h3>
              <p className="text-white/80">ระบบถูกออกแบบเพื่อการเติบโตอย่างไร้ขีดจำกัด รองรับพาร์ทเนอร์ทั่วประเทศ</p>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-12 md:py-24 bg-brand-bg">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 md:mb-16 text-slate-800">
        Everyday Problems People Face
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Zap className="w-8 h-8" />, title: "ยางแตกกลางดึก", desc: "ไม่มีคนช่วย รถเสียกลางทาง หาช่างไม่ได้" },
          { icon: <Users className="w-8 h-8" />, title: "อยากหารายได้เพิ่ม", desc: "แต่ไม่มีโอกาส หรือระบบที่ไม่เป็นธรรม" },
          { icon: <ShieldCheck className="w-8 h-8" />, title: "งานไม่พอ", desc: "รายได้ไม่แน่นอน ไม่ครอบคลุมค่าใช้จ่าย" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-teal">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
            <p className="text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-12 md:py-24 bg-white overflow-hidden" id="services">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-10 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">
          One Platform. <span className="text-brand-teal">Endless Opportunities.</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          PeungPa คือแพลตฟอร์มที่รวมงานทุกประเภทไว้ในที่เดียว เพื่อสร้างความหลากหลายของรายได้ให้กับคุณ
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {[
          { icon: <Utensils />, label: "ส่งอาหาร" },
          { icon: <Car />, label: "รับส่งคน" },
          { icon: <Wrench />, label: "ปะยาง" },
          { icon: <Droplets />, label: "ล้างแอร์" },
          { icon: <ShoppingBag />, label: "ซื้อของ" },
          { icon: <Package />, label: "งานช่วยเหลือทั่วไป" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-4 p-8 bg-brand-bg rounded-3xl border border-slate-50"
          >
            <div className="text-brand-teal opacity-80">
              {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
            </div>
            <span className="font-bold text-slate-800">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const IncomeSection = () => (
  <section className="py-12 md:py-24 bg-slate-900 text-white relative overflow-hidden" id="income">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/10 blur-3xl rounded-full translate-x-1/2" />

    <div className="container mx-auto px-6 max-w-7xl relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Fair Income That Works for You
          </h2>
          <ul className="space-y-6 text-lg text-white/80">
            <li className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-teal-light flex-shrink-0" />
              <span>หัก GP เพียง 15% (ต่ำกว่ามาตรฐานตลาด)</span>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-teal-light flex-shrink-0" />
              <span>มีงานหลายประเภท ไม่ต้องแย่งงานส่งอาหารอย่างเดียว</span>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-teal-light flex-shrink-0" />
              <span>ยิ่งทำมาก ยิ่งได้ค่าคอมมิชชั่น และ Coin เพิ่มขึ้น</span>
            </li>
          </ul>

          <div className="mt-12 p-8 bg-brand-teal/20 backdrop-blur-sm border border-brand-teal/30 rounded-3xl">
            <p className="text-2xl font-bold text-brand-teal-light tracking-tight">รายได้ที่ยุติธรรม สำหรับคนทำงานจริง</p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square bg-slate-800 rounded-full flex items-center justify-center p-8 border border-white/10">
            <div className="absolute inset-0 bg-brand-teal/20 animate-pulse rounded-full" />
            <div className="relative text-center">
              <span className="block text-7xl font-display font-bold text-brand-teal-light mb-2">15%</span>
              <span className="text-white/60 tracking-widest uppercase font-bold text-sm">Revenue Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CoinSystem = () => (
  <section className="py-12 md:py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="bg-brand-bg rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 rounded-full text-yellow-600 font-bold text-sm mb-6">
            <Coins className="w-4 h-4" />
            Reward System
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-8">
            Work More. <br />
            <span className="text-brand-teal">Earn More Than Money.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            ทุกงานที่ทำ = ได้ Coin สะสมเพื่อใช้แลกสิทธิประโยชน์ที่ช่วยลดภาระค่าใช้จ่ายในชีวิตจริง
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['อาหาร', 'ที่พัก', 'ซ่อมรถ', 'ค่าใช้จ่ายจริง'].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full" />
                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 font-display text-2xl font-semibold text-slate-800 italic">"ช่วยลดภาระค่าใช้จ่ายในชีวิต"</p>
        </div>
        <div className="md:w-1/2 relative">
          <div className="w-full aspect-[4/3] bg-brand-teal rounded-3xl overflow-hidden shadow-2xl relative group">
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop"
              alt="Rider benefits"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 text-white">
                <div className="p-4 bg-yellow-400 rounded-full text-brand-teal-dark shadow-lg">
                  <Coins className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/70">Total Reached</p>
                  <p className="text-3xl font-bold">PeungPa Coin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EcosystemSection = () => (
  <section className="py-12 md:py-24 bg-brand-bg" id="investors">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-10 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6 font-display">
          A Growing Ecosystem
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          ออกแบบระบบเพื่อความยั่งยืน และการเติบโตในระยะยาว
        </p>
      </div>

      <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        {/* Simplified Diagram Visual */}
        <div className="grid md:grid-cols-4 gap-4 md:gap-0 items-center relative py-12">
          {['User', 'Platform', 'Rider', 'Partner'].map((node, idx) => (
            <div key={idx} className="flex flex-col items-center relative group">
              <div className="w-32 h-32 rounded-full border-4 border-brand-bg bg-brand-teal/5 flex items-center justify-center group-hover:bg-brand-teal/10 transition-all font-display font-bold text-brand-teal text-xl">
                {node}
              </div>
              <span className="mt-4 text-slate-500 text-sm font-medium">
                {idx === 0 ? "จ่ายเงิน" : idx === 1 ? "หัก GP / หมุนเวียน" : idx === 2 ? "รับเงิน & Coin" : "ร้านค้า/ที่พัก"}
              </span>
              {idx < 3 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-16 w-8 h-8 text-brand-teal/20" />
              )}
            </div>
          ))}

          {/* Circular Flow decoration */}
          <div className="absolute inset-0 border-2 border-dashed border-brand-teal/10 rounded-full -m-10 pointer-events-none opacity-50" />
        </div>

        <div className="mt-16 text-center border-t border-slate-50 pt-12">
          <p className="text-xl text-slate-700 font-medium mb-4 italic">ระบบที่ทำให้เงินหมุนใน ecosystem และเติบโตได้ต่อเนื่อง</p>
          <span className="text-brand-teal font-display font-bold tracking-widest text-sm uppercase">Designed for scalability and long-term growth</span>
        </div>
      </div>
    </div>
  </section>
);

const GrowthSection = () => (
  <section className="py-12 md:py-24 bg-white">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 md:mb-16 text-slate-800">How We Grow</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-brand-teal text-white rounded-3xl flex items-center justify-center font-display text-3xl font-bold">1</div>
          <p className="text-lg font-bold text-slate-800">Rider มากขึ้น → <br />งานมากขึ้น</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-brand-teal text-white rounded-3xl flex items-center justify-center font-display text-3xl font-bold">2</div>
          <p className="text-lg font-bold text-slate-800">Rider แนะนำร้านค้า → <br />ร้านเพิ่ม</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-brand-teal text-white rounded-3xl flex items-center justify-center font-display text-3xl font-bold">3</div>
          <p className="text-lg font-bold text-slate-800">ร้านเพิ่ม → งานเพิ่ม → <br />Rider เพิ่ม</p>
        </div>
      </div>
    </div>
  </section>
);

const EarlyRiderSection = () => (
  <section className="py-12 md:py-24 bg-brand-teal text-white">
    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="md:w-3/5 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-6">
            Join the First 300 Riders
          </h2>
          <p className="text-xl text-white/80 mb-10">
            เปิดรับเพียง 300 คนแรก (Founding Rider) เพื่อร่วมสร้างตำนานไปกับเรา
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: "ได้รับงานก่อนใคร", desc: "Prioritized access" },
              { title: "โบนัสพิเศษ", desc: "Founding bonus" },
              { title: "สิทธิ์ Coin ดีกว่า", desc: "Better multipliers" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <p className="font-bold text-xl mb-1">{item.title}</p>
                <p className="text-white/60 text-sm uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/3 w-full bg-white text-slate-800 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
              จำนวนจำกัด
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-6">จองสิทธิ์ตอนนี้</h3>
          <p className="text-slate-500 mb-8">เราจะติดต่อท่านโดยเร็วที่สุดเมื่อเปิดรับในพื้นที่ของท่าน</p>
          <a
            href="https://bit.ly/4vUvkU5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-teal text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-teal-dark transition-all block text-center"
          >
            ลงทะเบียนจองสิทธิ์
          </a>
          <p className="text-center mt-6 text-xs text-slate-400 font-medium tracking-tight">
            *จำนวนจำกัดในแต่ละพื้นที่
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-16 md:py-32 bg-white text-center">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-slate-800 mb-6 md:mb-8 leading-tight">
        Your Opportunity <br />
        <span className="text-brand-teal">Starts Here</span>
      </h2>
      <p className="text-lg md:text-2xl text-slate-600 mb-8 md:mb-12">
        เริ่มสร้างรายได้ และเป็นส่วนหนึ่งของสังคมที่ช่วยเหลือกัน
      </p>
      <a
        href="https://bit.ly/4vUvkU5"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand-teal text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-lg md:text-2xl hover:bg-brand-teal-light transition-all shadow-2xl shadow-brand-teal/40 scale-100 hover:scale-105 active:scale-95 duration-200"
      >
        สมัครเป็น PeungPa Rider
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 md:py-20 bg-slate-50 border-t border-slate-100">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
        <div className="md:col-span-2">
          <img src="/logo.png" alt="PeungPa Logo" className="h-16 w-auto object-contain mb-6 rounded-xl" />
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            The next generation rider platform. Built for fairness, scalability, and social impact.
            ระบบพาร์ทเนอร์ที่เข้าใจคุณที่สุด
          </p>
          {/* Social links placeholder */}
        </div>
        <div>
          <h4 className="font-bold mb-6 text-slate-800 uppercase tracking-widest text-xs">Platform</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="https://bit.ly/4vUvkU5" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal">Become a Rider</a></li>
            <li><a href="#" className="hover:text-brand-teal">Partner Shops</a></li>
            <li><a href="#" className="hover:text-brand-teal">Our Vision</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-slate-800 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-brand-teal">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-teal">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-teal">Investments</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-slate-400 text-sm gap-4">
        <p>&copy; 2024 PeungPa Technologies Co., Ltd. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Bangkok, Thailand</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-teal selection:text-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <IncomeSection />
      <CoinSystem />
      <EcosystemSection />
      <GrowthSection />
      <EarlyRiderSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
