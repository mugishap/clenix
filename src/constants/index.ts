import { Team1, Team2, Team3 } from "@/assets";
import { INavbarLink } from "@/types";
import { BiCalendarPlus, BiDiamond } from "react-icons/bi";
import { FaHandshake, FaPaintRoller } from "react-icons/fa";
import { FaToilet } from "react-icons/fa6";
import { GiHouse, GiSpray, GiVacuumCleaner } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { IoBrushOutline } from "react-icons/io5";
import { MdCleaningServices, MdEmail } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";

export const navbarLinks: INavbarLink[] = [
    {
        href: "/",
        label: "Accueil"
    },
    {
        href: "/about-us",
        label: "À propos de nous"
    },
    {
        href: "#services",
        label: "Services"
    },
    {
        href: "/work-hours",
        label: "Heures de travail"
    },
    {
        href: "/contact-us",
        label: "Contactez-nous"
    }
]

export const qualities = [
    {
        icon: GrGroup,
        head: 'Des experts',
        description: 'Nos services couvrent entre autres les travaux personnalisés et une variété d’activité d’entretien pour garantir à nos clients un environnement de travail très propre et plus sécuritaire.'
    },
    {
        icon: BiDiamond,
        head: 'Travail de qualité',
        description: 'Chez T-ZZO Inc. nous savons bien que le temps passe vite, c’est pourquoi nous sommes toujours là pour faciliter la vie de nos clients afin qu’ils puissent en profiter pleinement!'
    },
    {
        icon: FaHandshake,
        head: 'Toute satisfaction',
        description: 'Notre mission est d’aller plus loin en offrant des services impeccables à nos clients selon les horaires de leurs choix et au prix très avantageux afin de surpasser leurs attentes. '
    },

]

export const offers = [
    {
        name: "Nettoyages des tapis"
    },
    {
        name: "Vider les corbeilles à déchets"
    },
    {
        name: "Nettoyer les cloisons, les entrées et les sorties"
    },
    {
        name: "Le nettoyage des salles de bains ou toilettes"
    },
    {
        name: "Laver les miroirs, le plancher"
    },
    {
        name: "Désinfecter les toilettes et autres"
    },
]

export const services = [
    {
        icon: GiSpray,
        title: "Nettoyage de bureaux"
    },
    {
        icon: GiHouse,
        title: "Nettoyage de la maison"
    },
    {
        icon: GiVacuumCleaner,
        title: "Nettoyage des sols"
    },
    {
        icon: PiBathtub,
        title: "Nettoyage des gouttières"
    },
    {
        icon: FaPaintRoller,
        title: "Nettoyage de cuisine"
    },
    {
        icon: FaToilet,
        title: "Nettoyage des toilettes"
    },
    {
        icon: IoBrushOutline,
        title: "Nettoyage de la chambre"
    },
    {
        icon: MdCleaningServices,
        title: "Le nettoyage des vitres"
    },
]

export const process = [
    {
        icon: BiCalendarPlus,
        head: "Book Online Form",
        description: "Ahen an unknown printer took a galley type and nknown printer."
    },
    {
        icon: MdEmail,
        head: "Get Confirmation",
        description: "Ahen an unknown printer took a galley type and nknown printer."
    },
    {
        icon: BiCalendarPlus,
        head: "Get Clean and Fresh",
        description: "Ahen an unknown printer took a galley type and nknown printer."
    },
    {
        icon: BiCalendarPlus,
        head: "Enjoy Happy!",
        description: "Ahen an unknown printer took a galley type and nknown printer."
    },
]

export const team = [
    {
        image: Team1,
        name: "Richard Powell"
    },
    {
        image: Team2,
        name: "Ashley Riordan"
    },
    {
        image: Team3,
        name: "Clemens Steiner"
    },
]

export const plans = [
    {
        name: "BASIC",
        price: "19",
        offers: [
            {
                name: "2 Nettoyage des chambres",
            },
            {
                name: "Passe l'aspirateur",
            },
            {
                name: "2 Nettoyage de salle de bains",
            },
            {
                name: "Le nettoyage des vitres",
            },
            {
                name: "1 Nettoyage du salon",
            },
        ]
    },
    {
        name: "STANDARD",
        price: "39",
        offers: [
            {
                name: "3 Nettoyage des chambres",
            },
            {
                name: "Passe l'aspirateur",
            },
            {
                name: "2 Nettoyage de salle de bains",
            },
            {
                name: "Le nettoyage des vitres",
            },
            {
                name: "1 Nettoyage du salon",
            },
        ]
    },
    {
        name: "PREMIUM",
        price: "49",
        offers: [
            {
                name: "4 Nettoyage des chambres",
            },
            {
                name: "Passe l'aspirateur",
            },
            {
                name: "2 Nettoyage de salle de bains",
            },
            {
                name: "Le nettoyage des vitres",
            },
            {
                name: "1 Nettoyage du salon",
            },
        ]
    }
]

export const hours = [
    {
        open: "8:00 AM",
        closes: "9:00 PM",
        day: "Monday"
    },
    {
        open: "8:00 AM",
        closes: "9:00 PM",
        day: "Tuesday"
    },
    {
        open: "8:00 AM",
        closes: "9:00 PM",
        day: "Wednesday"
    },
    {
        open: "8:00 AM",
        closes: "9:00 PM",
        day: "Thursday"
    },
    {
        open: "8:00 AM",
        closes: "9:00 PM",
        day: "Friday"
    },
    {
        open: "10:00 AM",
        closes: "2:00 PM",
        day: "Saturday"
    },
    {
        open: "8:00 AM",
        closes: "2:00 PM",
        day: "Sunday"
    }
]