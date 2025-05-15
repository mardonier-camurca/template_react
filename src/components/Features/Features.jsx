import "./Features.css"

export default function Features() {
  const featuresList = [
    {
      id: 1,
      title: "Baseado em Componentes",
      description: "Crie componentes encapsulados que gerenciem seu próprio estado.",
    },
    {
      id: 2,
      title: "Declarativa",
      description: "O React torna a criação de interfaces de usuário interativas muito mais fácil.",
    },
    {
      id: 3,
      title: "Aprenda uma única vez",
      description: "Desenvolver novos recursos sem reescrever o código existente.",
    },
  ]

  return (
    <section className="features" id="features">
      <h2>Características Principais</h2>
      <div className="features-grid">
        {featuresList.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}