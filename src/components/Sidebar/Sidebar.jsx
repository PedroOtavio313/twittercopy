import React from "react";
import './Sidebar.css'
import { House, MagnifyingGlass, Bell, EnvelopeOpen, List, Archive, Briefcase, UsersThree, UserCircleGear } from "@phosphor-icons/react"

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo"> {/* Logo da página */}
            </div>
            <div className="sidebar">
                <ul>
                <div className="icone-teste">
                    <li> <House size={32} /><span>Página inicial </span></li>
                    </div>
                    <div className="icone-teste">
                    <li><MagnifyingGlass size={32} /><span>Explorar </span></li>
                    </div>
                    <div className="icone-teste">
                    <li><Bell size={32} /><span>Notificações</span> </li>
                    </div>
                    <div className="icone-teste">
                    <li><EnvelopeOpen size={32} /><span>Mensagens</span> </li>
                    </div>
                    <div className="icone-teste">
                    <li><List size={32} /><span>Listas </span></li>
                    </div>
                    <div className="icone-teste">
                    <li><Archive size={32} /><span>Itens salvos </span></li>
                    </div>
                    <div className="icone-teste">
                    <li><Briefcase size={32} /><span>Empregos </span></li>
                    </div>
                    <div className="icone-teste">
                    <li><UsersThree size={32} /><span>Comunidades</span></li>
                    </div>
                    <div className="icone-teste">
                    <li><UserCircleGear size={32} /><span>Perfil </span></li>
                    </div>
                    
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
