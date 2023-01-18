import style from '../../styles/components/Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <main className={style.main}>
      <h1 className={style.mainheading}></h1>
      <nav className={style.mainNav}>
        <Link href='/' className={style.anchortag}>Home</Link>
        <Link href='weather' className={style.anchortag}>Weather</Link>
        <Link href='todo' className={style.anchortag}>ToDO</Link>
      </nav>
    </main>
  )
}

export default Header