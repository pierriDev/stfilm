import { useState } from "react"

export const useSpecificationScreen = () => {
    const [showModal, setShowModal] = useState(false);

    const mockSpecification = [
        {
            title: "Tintado",
            text: "Estabelece requisitos para os vidros de segurança e critério para aplicações de inscrições, pictogramas e películas nas áreas envidraçadas dos veículos automotores.",
            openModal: () => {}
        },
        {
            title: "Profissional 1-Ply",
            text: "Desenvolvida com a tecnologia de infusão de chips, e um processo de inibidor de UV em dois estágios na fabricação das matérias primas bem como no adesivo ester material proporciona uma fácil moldagem e resistência ao desbotamento, disponivel nas cores Preta, Verde, Verde Natural, Vermelho e Amarelo.",
            openModal: () => {}
        },
        {
            title: "Tintado",
            text: "A película da Nexfil 1-Ply é formulaado com processos tradicionais de fabricação, em que os corantes e o adesivo são misturados. A mistura é então pulverizada em um ply. Está disponivel nas cores Verde e Charcoal.",
            openModal: () => {}
        },
        {
            title: "Metalizado",
            text: "Estabelece requisitos para os vidros de segurança e critérios para aplicações de inscrições, pictogramas e películas nas áreas envidraçadas dos veiculos automotores.",
            openModal: () => {}
        },
        {
            title: "Refletivos",
            text: "Fabricados a partir de instalção de revestimentos por evaporação a vácuo de última geração possuí propriedades de rejeição de calor, e excelente visibilidade proporcionada pela tecnologia de revestimento de alta precisão e pela produção de film PET de alta transparência.",
            openModal: () => {}
        },
        {
            title: "Nano Cerâmica Linha Perfection",
            text: "Produzido com cerâmica química adicionada ao Scratch Resitance dos filmes, apresenta uma excelente redução de infravermelho, oferecendo um ótimo desempenho, sem o risco de interferência nos sinais presentes e outras tecnologias modernas nos automóveis de hoje.",
            openModal: () => {}
        },
        {
            title: "Nano Carbono Linha Centurion",
            text: "Com ótima rejeição de infravermelho, mas com preços mais justos, esses filmes oferecem o mesmo nível de desempenho encontrado em filmes baseados em metal, sem o risco de interferência nos sinais presentes e outras tecnologias modernas nos automóveis de hoje. Proporciona ótima reijeição de calor, sem risco de interferência no GPS, TPMS e navegação causados por filmes tradicionais baseados em metal.",
            openModal: () => {}
        },
        {
            title: "Segurança",
            text: "Melhora a força do vidro oferecendo um maior grau de segurança, com alta capacidade de resistência a estimulação externa, com excelente resistência a tração e alongamento, oferecendo uma excelente durabilidade, proporcionada pela tecnologia de adesivo polímero que é altamente resistente a choques. Disponível nas cores Charcoal e Clear Protege pessoas e propriedades em caso de invasão.",
            openModal: () => {}
        },
        {
            title: "Decorativa",
            text: "Ideias para projetos decorativos trazendi sofisticação e elegância para seu projeto, utilizados em divisórias, banheiros, box, cozinhas e áreas comerciais.",
            openModal: () => {}
        },
    ];
    const modalText = [
        {
            text: "A ST FILM DO BRASIL LTDA, neste termo oferece aos seus clientes garantia sobre os produtos comercializados em seus respectivos prazos, a contar da data de aquisição do produto."
        },
        {
            text: "Esta garantia se aplica a defeitos de fabricação do produto como, falha na adesão, de-laminação e des-metalização e desbotamento precoce. Essa garantia não se aplica a defeitos na instalação, e manutenção inadequada do produto."
        },
        {
            text: "O comprador deverá solicitar a garantia com a apresentação da nota fiscal de compra do produto, e amostras que possibilitem a empresa identificar o defeito relatado, a devolução do produto deverá ser feita com nota fiscal eletrônica de devolução com as características iguais a nota de venda. A garantia será feita somente no valor e quantidade dos produtos adquiridos, não sendo devolvido valores em espécie, somente em produtos e não contemplando a mão de obra de instalação"
        }
    ];
    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return {
        mockSpecification,
        openModal,
        closeModal,
        showModal,
        modalText
    }
}