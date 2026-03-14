import Image from "next/image";
import Link from "next/link";
import styles from "./main.comite.css"

export default function Home(){
    return (
        <div className="container">
          <div className="hero">
            <div className="hero-container">
                <h2>Bem vindo, <span>Usuário</span></h2>
                <div><Image src="" alt="icone perfil"/></div>
            </div>
          </div>

                <div className="main">
                    <div className="main-container">
                        <div className="main-box">
                            <div><Image/></div>
                            <h1>LANCHES</h1>
                        </div>
                        <div className="main-box">
                            <div><Image/></div>
                            <h1>CAFÉ DA MANHÃ</h1>
                        </div>
                        <div className="main-box">
                            <div><Image/></div>
                            <h1>ALMOÇO</h1>
                        </div>
                        <div className="main-box">
                            <div><Image/></div>
                            <h1>JANTA</h1>
                        </div>
                    </div>
                </div>

                <div className="navbar">
                    <div>
                        <Image/>
                        <p>MENU</p>              
                    </div>
                    <div>
                        <Image/>
                        <p>DICAS</p>
                    </div>
                </div>            
       
        </div>
    );
}