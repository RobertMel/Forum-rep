import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">

    <Link to ="/" className='Lgn'>login</Link>
    <Link to ="Register" className='Reg'> register</Link>
    <Link to ="Allsubject" className='AS'>all subject</Link>
    <Link to ="Sujet" className='Sjt'> sujet</Link>

        </header>
      
    );
  }