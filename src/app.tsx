import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [hoveredButton, setHoveredButton] = useState(false);

  const handlePlayClick = () => {
    window.location.href = "https://katw24.github.io/cubos/exemplo.html";
  };

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid de fundo sutil */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Formas geométricas flutuantes ao fundo */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <CubeIcon />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 opacity-15"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <CubeIcon />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 opacity-10"
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <CubeIcon />
      </motion.div>

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            CUBE<span className="font-bold">STACK</span>
          </h1>
          <p className="text-white/50 text-lg sm:text-xl font-light">
            Junte os cubos e forme a imagem
          </p>
        </motion.div>

        {/* Botão 3D Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-20"
        >
          <motion.button
            onClick={handlePlayClick}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Camada de trás - efeito 3D */}
            <div 
              className={`
                absolute inset-0 bg-white/20 rounded-2xl blur-xl
                transition-all duration-300
                ${hoveredButton ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
              `}
            />
            
            {/* Camada principal do botão */}
            <div className="relative">
              {/* Borda 3D */}
              <div 
                className={`
                  absolute -bottom-3 left-2 right-2 h-full bg-white/30 rounded-2xl
                  transition-all duration-300 origin-bottom
                  ${hoveredButton ? 'translate-y-1' : ''}
                `}
              />
              
              {/* Corpo do botão */}
              <div 
                className={`
                  relative px-16 py-6 bg-white rounded-2xl
                  transition-all duration-300
                  ${hoveredButton ? 'bg-white' : 'bg-white/95'}
                `}
                style={{
                  boxShadow: hoveredButton 
                    ? '0 25px 50px -12px rgba(255,255,255,0.25), 0 0 0 1px rgba(255,255,255,0.1)'
                    : '0 15px 35px -5px rgba(255,255,255,0.15), 0 0 0 1px rgba(255,255,255,0.05)'
                }}
              >
                <span className={`
                  text-2xl font-semibold tracking-wide
                  transition-colors duration-300
                  ${hoveredButton ? 'text-black' : 'text-black/80'}
                `}>
                  JOGAR
                </span>
              </div>
            </div>
          </motion.button>
        </motion.div>

        {/* Ilustrações das regras ao redor */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* Regra 1 - Rotacionar com botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4 relative">
              <RotatePad />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Rotacionar</h3>
            <p className="text-white/40 text-sm max-w-[150px]">
              Use os botões ao redor do cubo — inclui diagonais ↖↗↙↘
            </p>
          </motion.div>

          {/* Regra 2 - Ativar Cubos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4 relative">
              <ClickCube />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Ativar</h3>
            <p className="text-white/40 text-sm max-w-[150px]">
              Clique nos cubos para ligá-los e criar conexões
            </p>
          </motion.div>

          {/* Regra 3 - Formar Imagem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4 relative">
              <TargetCube />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Formar</h3>
            <p className="text-white/40 text-sm max-w-[150px]">
              Recrie o padrão pixel art mostrado na tela
            </p>
          </motion.div>
        </div>

        {/* Teclas disponíveis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-white/30 text-sm"
        >
          <p>Teclas: W/↑ A/← S/↓ D/→  |  Diagonais: Q E Z C</p>
        </motion.div>

        {/* Indicador de rolagem */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

// Componente: Ícone de cubo isométrico simples
function CubeIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path 
        d="M50 5 L90 30 L90 80 L50 105 L10 80 L10 30 Z" 
        fill="none" 
        stroke="white" 
        strokeWidth="2"
      />
      <path 
        d="M50 5 L50 55 L10 30" 
        fill="none" 
        stroke="white" 
        strokeWidth="2"
      />
      <path 
        d="M50 55 L90 30 L90 80 L50 105" 
        fill="none" 
        stroke="white" 
        strokeWidth="2"
      />
    </svg>
  );
}

// Painel de rotação com 8 direções
function RotatePad() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Círculo central (representa o jogo) */}
      <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
      
      {/* Setas nas 8 direções */}
      {/* Cima */}
      <path d="M50 18 L50 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 22 L50 18 L54 22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      
      {/* Baixo */}
      <path d="M50 82 L50 72" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 78 L50 82 L54 78" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      
      {/* Esquerda */}
      <path d="M18 50 L28 50" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 46 L18 50 L22 54" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      
      {/* Direita */}
      <path d="M82 50 L72 50" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M78 46 L82 50 L78 54" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      
      {/* Diagonal Superior Esquerda */}
      <path d="M25 25 L32 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 25 L25 28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      
      {/* Diagonal Superior Direita */}
      <path d="M75 25 L68 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M72 25 L75 28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      
      {/* Diagonal Inferior Esquerda */}
      <path d="M25 75 L32 68" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 75 L25 72" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      
      {/* Diagonal Inferior Direita */}
      <path d="M75 75 L68 68" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M72 75 L75 72" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Cubo com indicador de clique
function ClickCube() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <path 
        d="M40 15 L65 27 L65 57 L40 70 L15 57 L15 27 Z" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5"
      />
      <path 
        d="M40 15 L40 42 L15 27" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5"
      />
      <path 
        d="M40 42 L65 27 L65 57 L40 70" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5"
      />
      {/* Indicador de clique */}
      <circle cx="40" cy="42" r="8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" />
      <path 
        d="M40 42 L40 38" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  );
}

// Cubo com padrão alvo
function TargetCube() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <path 
        d="M40 15 L65 27 L65 57 L40 70 L15 57 L15 27 Z" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5"
      />
      <path 
        d="M40 15 L40 42 L15 27" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5"
      />
      <path 
        d="M40 42 L65 27 L65 57 L40 70" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5"
      />
      {/* Padrão pixel no centro */}
      <rect x="32" y="38" width="4" height="4" fill="white" opacity="0.8" />
      <rect x="38" y="38" width="4" height="4" fill="white" opacity="0.8" />
      <rect x="44" y="38" width="4" height="4" fill="white" opacity="0.8" />
      <rect x="38" y="44" width="4" height="4" fill="white" opacity="0.8" />
    </svg>
  );
}
