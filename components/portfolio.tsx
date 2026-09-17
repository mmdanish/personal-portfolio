'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { aboutContent, education, experience, exploring, personalInfo, projects, skills } from '@/data/portfolio'

const sectionIds = ['about', 'experience', 'skills', 'projects', 'education', 'contact']

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>
}

export function Navbar({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const current = sectionIds.find((id) => {
        const element = document.getElementById(id)
        return element && element.getBoundingClientRect().top < 180 && element.getBoundingClientRect().bottom > 180
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <button className="wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Danish<span>.</span></button>
    <nav className="desktop-nav" aria-label="Main navigation">
      {sectionIds.map((id) => <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}
    </nav>
    <div className="nav-actions">
      <button className="theme-toggle" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} onClick={onToggle}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Mobile navigation">{sectionIds.map((id, i) => <motion.button key={id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}<ArrowUpRight size={18} /></motion.button>)}</motion.nav>}</AnimatePresence>
  </header>
}

export function Hero() {
  return <section className="hero" id="top">
    <div className="hero-inner">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }} className="eyebrow"><span className="status-dot" /> Available for meaningful work</motion.div>
      <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .25, ease: [0.22, 1, 0.36, 1] }}>Mohammed<br /><em>Danish</em></motion.h1>
      <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7, duration: .7 }}>
        <div><p className="hero-role">{personalInfo.role}</p><p className="hero-description">{personalInfo.intro}</p></div>
        <div className="hero-ctas"><a className="button button-dark" href="#projects">View projects <ArrowUpRight size={16} /></a><a className="button button-outline" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div>
      </motion.div>
    </div>
    <div className="hero-meta"><span>01 / 06</span><span>{personalInfo.location}</span><span className="scroll-note">Scroll to explore <ChevronDown size={15} /></span></div>
  </section>
}

export function About() { return <section className="section about-section" id="about"><div className="container"><SectionLabel index="01">About me</SectionLabel><div className="about-grid"><Reveal><h2>Frontend craft,<br /><span>product thinking.</span></h2></Reveal><Reveal delay={.1}><div className="about-copy"><p>{aboutContent.main}</p><p>{aboutContent.product}</p></div></Reveal></div></div></section> }

export function Experience() { return <section className="section experience-section" id="experience"><div className="container"><SectionLabel index="02">Experience</SectionLabel><div className="timeline">{experience.map((item, i) => <Reveal key={item.number} delay={i * .05}><article className="experience-item"><div className="timeline-marker"><span>{item.number}</span></div><div className="experience-heading"><h3>{item.title}</h3><p>{item.company}</p></div><div className="experience-detail"><time>{item.period}</time><ul>{item.description.map((line) => <li key={line}>{line}</li>)}</ul></div></article></Reveal>)}</div></div></section> }

export function Skills() { return <section className="section skills-section" id="skills"><div className="container"><SectionLabel index="03">Toolkit</SectionLabel><div className="skills-intro"><Reveal><h2>Tools for thoughtful<br /><span>digital products.</span></h2></Reveal><Reveal delay={.1}><p>A focused set of technologies and practices I use to turn ideas into dependable, responsive interfaces.</p></Reveal></div><div className="skills-grid">{Object.entries(skills).map(([group, items], i) => <Reveal key={group} delay={i * .04}><div className="skill-group"><h3>{group}</h3><div className="skill-list">{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div></Reveal>)}</div></div></section> }

export function Projects() { return <section className="section projects-section" id="projects"><div className="container"><SectionLabel index="04">Selected projects</SectionLabel><Reveal><h2 className="projects-title">Work that moves<br /><span>things forward.</span></h2></Reveal><div className="project-list">{projects.map((project, i) => <Reveal key={project.name} delay={i * .08}><article className="project-row"><div className="project-number">{project.number}</div><div className="project-main"><div className="project-top"><div><p className="project-status">{project.status}</p><h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p></div>{project.live ? <a className="project-arrow" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={24} /></a> : <span className="project-arrow muted"><ArrowUpRight size={24} /></span>}</div><p className="project-description">{project.description}</p><div className="project-footer"><span>{project.role}</span><div>{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></div></article></Reveal>)}</div></div></section> }

export function Education() { return <section className="section education-section" id="education"><div className="container"><SectionLabel index="05">Education</SectionLabel><div className="education-grid">{education.map((item, i) => <Reveal key={item.degree} delay={i * .1}><article className="education-item"><span className="education-index">0{i + 1}</span><h3>{item.degree}</h3><p>{item.institution}</p>{item.university && <p>{item.university}</p>}<span>{item.location}</span></article></Reveal>)}</div><div className="exploring"><p className="eyebrow">Currently exploring</p><div>{exploring.map((item, i) => <Reveal key={item} delay={i * .06}><span>{item}</span></Reveal>)}</div></div></div></section> }

export function Contact() { return <section className="contact-section" id="contact"><div className="container"><SectionLabel index="06">Contact</SectionLabel><Reveal><h2>Let&apos;s build<br /><em>something useful.</em></h2><p>Have a project, idea, or opportunity? Let&apos;s connect.</p><div className="contact-links"><a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18} /></a><a href={`mailto:${personalInfo.email}`}>Email me <ArrowUpRight size={18} /></a><a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={18} /></a></div></Reveal></div></section> }

export function Footer() { return <footer className="footer"><span>© Mohammed Danish</span><div><a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${personalInfo.email}`}>Email</a></div><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></footer> }

export function Portfolio() { const [dark, setDark] = useState(false); useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark]); return <><Navbar dark={dark} onToggle={() => setDark(!dark)} /><main><Hero /><About /><Experience /><Skills /><Projects /><Education /><Contact /></main><Footer /></> }

export default Portfolio
