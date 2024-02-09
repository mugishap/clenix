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
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "#services",
        label: "Services"
    },
    {
        href: "/blog",
        label: "Blog"
    },
    {
        href: "/contact",
        label: "Contact Us"
    }
]

export const qualities = [
    {
        icon: GrGroup,
        head: 'Expert People',
        description: 'Business whenknown printer aretook galley of type off and scrambled make type specimen book.Far away the behind the mountains.'
    },
    {
        icon: BiDiamond,
        head: 'Quality Work',
        description: 'Business whenknown printer aretook galley of type off and scrambled make type specimen book.Far away the behind the mountains.'
    },
    {
        icon: FaHandshake,
        head: 'All Satisfaction',
        description: 'Business whenknown printer aretook galley of type off and scrambled make type specimen book.Far away the behind the mountains.'
    },

]

export const offers = [
    {
        name: "Experienced Team"
    },
    {
        name: "Duis viverra urna mollis."
    },
    {
        name: "One-off, weekly or fortnightly"
    },
    {
        name: "Book, manage & pay online"
    },
    {
        name: "Etiam vel felis cursus purus."
    },
    {
        name: "All in all service"
    },
]

export const services = [
    {
        icon: GiSpray,
        title: "Office Cleaning"
    },
    {
        icon: GiHouse,
        title: "House Cleaning"
    },
    {
        icon: GiVacuumCleaner,
        title: "Floor Cleaning"
    },
    {
        icon: PiBathtub,
        title: "Gutter Cleaning"
    },
    {
        icon: FaPaintRoller,
        title: "Kitchen Cleaning"
    },
    {
        icon: FaToilet,
        title: "Toilet Cleaning"
    },
    {
        icon: IoBrushOutline,
        title: "Room Cleaning"
    },
    {
        icon: MdCleaningServices,
        title: "Window Cleaning"
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