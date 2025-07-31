import React, { useState, useEffect, useRef } from 'react';
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar} ref={menuRef}>
      <div className={styles.logo}>E-Ducando</div>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        <li><button onClick={() => scrollToSection('inicio')}>Início</button></li>
        <li><button onClick={() => scrollToSection('sobre')}>Sobre</button></li>
        <li><button onClick={() => scrollToSection('funcionalidades')}>Funcionalidades</button></li>
        <li><button onClick={() => scrollToSection('contato')}>Contato</button></li>
      </ul>
    </nav>
  );
}
