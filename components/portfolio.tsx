'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, FolderOpen, Globe, Mail, Moon, Sparkles, Sun } from 'lucide-react'
import { siGithub, siInstagram } from 'simple-icons'
import { aboutContent, education, experience, exploring, personalInfo, projects, skills } from '@/data/portfolio'

function BrandIcon({ path }: { path: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={path} /></svg>
}

const linkedinPath = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.558V8.999H3.555v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>
}

export function Navbar({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return <header className="site-nav">
    <button className="theme-toggle" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} onClick={onToggle}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
  </header>
}

export function Hero() {
  return <section className="hero combined-intro" id="top">
    <div className="hero-inner">
      <div className="intro-topline">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .25, ease: [0.22, 1, 0.36, 1] }}>Mohammed Danish</motion.h1>
          <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55, duration: .7 }}>{personalInfo.role}</motion.p>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7, duration: .7 }}>{personalInfo.intro}</motion.p>
          <motion.div className="intro-details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85, duration: .7 }}><span><Globe size={17} aria-hidden="true" />{personalInfo.location}</span><a href={`mailto:${personalInfo.email}`}><Mail size={17} aria-hidden="true" />{personalInfo.email}</a></motion.div>
          <motion.div className="intro-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: .7 }}><a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><BrandIcon path={siGithub.path} /></a><a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandIcon path={linkedinPath} /></a><a href={personalInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><BrandIcon path={siInstagram.path} /></a><a href="#projects" aria-label="Projects"><FolderOpen size={20} aria-hidden="true" /></a></motion.div>
        </div>
      </div>
      <div className="intro-about"><SectionLabel index="01">About</SectionLabel><Reveal><div className="about-copy"><p>{aboutContent.main}</p><p>{aboutContent.product}</p></div></Reveal></div>
    </div>
  </section>
}

export function About() { return null }

export function Experience() { return <section className="section experience-section" id="experience"><div className="container"><SectionLabel index="02">Experience</SectionLabel><div className="timeline">{experience.map((item, i) => <Reveal key={item.number} delay={i * .05}><article className="experience-item"><div className="timeline-marker"><span>{item.number}</span></div><div className="experience-heading"><h3>{item.title}</h3><p>{item.company}</p></div><div className="experience-detail"><time>{item.period}</time><ul>{item.description.map((line) => <li key={line}>{line}</li>)}</ul></div></article></Reveal>)}</div></div></section> }

export function Skills() { const skillItems = [...new Set(Object.values(skills).flat())]; return <section className="section skills-section" id="skills"><div className="container"><Reveal><h2 className="skills-heading">Skills <Sparkles size={30} strokeWidth={1.8} aria-hidden="true" /></h2></Reveal><div className="skills-pills">{skillItems.map((skill, i) => <Reveal key={skill} delay={i * .018}><span className="skill-pill">{skill}</span></Reveal>)}</div></div></section> }

export function Projects() { return <section className="section projects-section" id="projects"><div className="container"><SectionLabel index="04">Selected projects</SectionLabel><Reveal><h2 className="projects-title">Work that moves<br /><span>things forward.</span></h2></Reveal><div className="project-list">{projects.map((project, i) => <Reveal key={project.name} delay={i * .08}><article className="project-row"><div className="project-number">{project.number}</div><div className="project-main"><div className="project-top"><div><p className="project-status">{project.status}</p><h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p></div>{project.live ? <a className="project-arrow" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={24} /></a> : <span className="project-arrow muted"><ArrowUpRight size={24} /></span>}</div><p className="project-description">{project.description}</p><div className="project-footer"><span>{project.role}</span><div>{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></div></article></Reveal>)}</div></div></section> }

export function Education() { return <section className="section education-section" id="education"><div className="container"><SectionLabel index="05">Education</SectionLabel><div className="education-grid">{education.map((item, i) => <Reveal key={item.degree} delay={i * .1}><article className="education-item"><span className="education-index">0{i + 1}</span><h3>{item.degree}</h3><p>{item.institution}</p>{item.university && <p>{item.university}</p>}<span>{item.location}</span></article></Reveal>)}</div><div className="exploring"><p className="eyebrow">Currently exploring</p><div>{exploring.map((item, i) => <Reveal key={item} delay={i * .06}><span className="exploring-pill">{item}</span></Reveal>)}</div></div></div></section> }

export function Footer() { return <footer className="footer"><span>© Mohammed Danish</span><div><a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${personalInfo.email}`}>Email</a></div><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></footer> }

export function Portfolio() { const [dark, setDark] = useState(false); useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark]); return <><Navbar dark={dark} onToggle={() => setDark(!dark)} /><main><Hero /><Experience /><Skills /><Projects /><Education /></main><Footer /></> }

export default Portfolio
