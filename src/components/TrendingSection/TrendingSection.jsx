import React from "react";
import './TrendingSection.css';
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";


const TrendingSection = () => {
    return(
        <div className="trending-section">
            {/*barra de pesquisa*/}
            <div className="search-bar">
                <input type="text" placeholder="Buscar"  className="search-input" />
            </div>

        {/*Assine o premium*/}
        <div className="premium-box">
            <h3>Assine o Twitter premium</h3>
            <p>Assine para desbloquear novos recursos e, se elegível, receba uma parte da receita.</p>
            <button className="subscribe-button">Assinar twitter premium</button>
        </div>

        {/*O que está acontecendo?*/}
        <div className="trending-box">
            <h3>O que está em alta?</h3>
            <ul className="trending-list">
                    <li><strong>#CataniaMegaWord</strong><br />2.734 posts</li>
                    <li><strong>BMTH</strong><br />1.536 posts</li>
                    <li><strong>Efeito Lula</strong><br />Assuntos do Momento: IBGE</li>
                    <li><strong>Sacha e Yuri</strong><br />6.826 posts</li>
                    <li><strong>Tom Brady</strong><br />14,8 mil posts</li>
            </ul>
            <a href="www.google.com" className="show-more">Mostrar mais</a>
        </div>

        {/*Quem seguir*/}
        <div className="who-to-follow-box">
            <h3>Quem seguir</h3>
            <ul className="follow-list">
                    <li>
                        <div className="user-info">
                            <img src="https://via.placeholder.com/32" alt="Veagá" className="user-avatar" />
                            <div>
                                <strong>Teste</strong>
                                <p>@teste</p>
                            </div>
                        </div>
                        <button className="follow-button">Seguir</button>
                    </li>
                    <li>
                        <div className="user-info">
                            <img src="https://via.placeholder.com/32" alt="Nitin Gadkari" className="user-avatar" />
                            <div>
                                <strong>Zeus</strong>
                                <p>@zeus</p>
                            </div>
                        </div>
                        <button className="follow-button">Seguir</button>
                    </li>
                    <li>
                        <div className="user-info">
                            <img src="https://via.placeholder.com/32" alt="Crazy Clips" className="user-avatar" />
                            <div>
                                <strong>Crazy Clips</strong>
                                <p>@crazyclipsonly</p>
                            </div>
                        </div>
                        <button className="follow-button">Seguir</button>
                    </li>
                </ul>
                <a href="www.google.com" className="show-more">Mostrar mais</a>
        </div>

        {/*Links do rodapé*/}
        <div className="footer-links">
        <a href="www.google.com">Termos de Serviço</a>
                <a href="www.google.com">Política de Privacidade</a>
                <a href="www.google.com">Política de cookies</a>
                <a href="www.google.com">Acessibilidade</a>
                <a href="www.google.com">Informações de anúncios</a>
                <a href="www.google.com">Mais...</a>
                <p>© 2024 Tweet Copy Limited.</p>
        </div>

        </div>
    )
}

export default TrendingSection