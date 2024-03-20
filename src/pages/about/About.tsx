import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { Helmet } from 'react-helmet'

const AboutUs: React.FC = () => {
    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <Navbar />
            <Helmet>
                <title>À propos de nous | T-ZZO</title>
            </Helmet>
            <Slide cascade direction="up" triggerOnce>
                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <div className="flex lg:flex-row flex-col justify-around lg:gap-8 sm:gap-10 gap-12">
                        <div className="w-full lg:w-6/12">
                            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
                                Revitalisez votre espace avec nos services de nettoyage experts. Profitez des résultats impeccables que vous méritez.
                            </h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">

                                Bienvenue dans notre monde d’espace immaculée et de vie sans effort! Notre équipe d’experts en nettoyage vous offre un service du premier qualité qui dépasse vos attentes.

                                Chez T-zzo nous savons bien que le temps passe vite, c’est pourquoi nous sommes toujours là pour vous faciliter la vie par nos services de bonne qualité.

                                Puis l’apparence  d’un espace de travail plus propre a un impacte énorme sur la perception d’autrui d’une entreprise, et qu’elle peut influencer significativement ses revenus, notre principal objectif est de garder cet espace plus propre ce qui rends au employés d’être plus heureux et d’avantage motivés lorsqu’ils travaillent dans un environnement propre et ordonné.

                            </p>
                        </div>
                        <div className="w-full flex justify-center">
                            <img
                                className="object-cover"
                                src={"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2940&auto=format&fit=crop"}
                                alt="people discussing on board"
                            />
                        </div>
                    </div>

                    <div className="relative mt-24">
                        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                            <svg
                                className="z-20"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="24" cy="24" r="24" fill="#1F2937" />
                                <path
                                    d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31"
                                    stroke="white"
                                    strokeWidth="2.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30"
                                    stroke="white"
                                    strokeWidth="2.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z"
                                    stroke="white"
                                    strokeWidth="2.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22"
                                    stroke="white"
                                    strokeWidth="2.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">

                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                                Meilleur service
                            </p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                                Chez T-ZZO, l'excellence est notre norme. Nous nous engageons à fournir le meilleur service, adapté
                                à vos besoins. Découvrez une qualité inégalée avec T-ZZO.
                            </p>
                        </div>
                       
                    </div>

                    <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                        <div className="w-full lg:w-6/12">
                            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
                                Notre mission
                            </h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
                                Notre mission est de redéfinir la commodité dans le domaine des services de nettoyage. Notre objectif est d'aller plus loin en offrant des services impecables a nos clients selon les horaires de leurs choix et aux prix tres aventageux. Nous prenons des décisions éclairées concernant leurs besoins de nettoyage et profiter de la facilité de
                                planifier des services de nettoyage professionnels en ligne. Découvrez la différence avec notre engagement à
                                l'excellence dans chaque nettoyage.
                            </p>
                            <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">
                                Nous nous engageons à établir une plate-forme pour ceux qui recherchent un service de premier plan.
                                services de nettoyage. Tout comme les acheteurs férus de technologie comptent sur nous pour trouver les meilleurs produits et profiter d'un
                                parcours de shopping fluide, nous visons à être la destination incontournable pour ceux qui recherchent des espaces immaculés. Notre
                                le but ultime est de dépasser les attentes, en favorisant la fidélité et la satisfaction de nos précieux
                                clients. Découvrez la différence grâce à notre engagement envers la fiabilité et l'excellence dans chaque
                                faire le ménage.
                            </p>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                               
                                <div className="flex p-4 shadow-md">
                                    <div className="mr-6">
                                        <svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                                                stroke="#1F2937"
                                                strokeWidth="2.75"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.5 10.5L18 19.5L31.5 10.5"
                                                stroke="#1F2937"
                                                strokeWidth="2.75"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                                            Presse
                                        </p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                                            Conseil T-ZZO : faire la une des journaux dans le domaine du nettoyage des presses.
                                            Reconnu par les leaders de l'industrie pour notre approche méticuleuse et nos
                                            résultats supérieurs. Découvrez dès aujourd'hui la différence T-ZZO en matière de
                                            nettoyage de presses

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            <Footer />
        </div>
    )
}

export default AboutUs
