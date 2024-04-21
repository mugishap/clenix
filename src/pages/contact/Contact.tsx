import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { Helmet } from 'react-helmet'
import { BiLoaderAlt } from 'react-icons/bi'
import { IContactData } from '../../types'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import api from '@/api'
import toast from 'react-hot-toast'

const Contact = () => {
  const [contactData, setContactData] = React.useState<IContactData>({
    names: "",
    email: "",
    telephone: "",
    message: ""
  })
  const [contactLoading, setContactLoading] = React.useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setContactLoading(true)
      e.preventDefault()
      await api.post("/send-mail", { ...contactData })
      toast.success("Votre message a été envoyé avec succès")
      setContactData({
        names: "",
        email: "",
        telephone: "",
        message: ""
      })
    } catch (error) {
      toast.error("Une erreur s'est produite lors de l'envoi de votre message")
    }
    finally {
      setContactLoading(false)
    }
  }
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Navbar />
      <Helmet>
        <title>
          Contactez Nous | T-ZZO
        </title>
      </Helmet>
      <Slide direction="up" cascade triggerOnce>
        <section
          className="w-full my-12"
          id="contacts"
        >
          <div className="container mx-auto h-full">
            <div className="lg:flex h-[90%]">
              <div className="xl:w-2/5 lg:w-2/5 bg-secondary-blue py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                  <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                    Contactez-nous
                  </h1>
                  <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                    Vous avez une question sur nous ? Êtes-vous intéressé à collaborer avec
                    nous? Vous avez des suggestions ou souhaitez simplement dire bonjour ? Il suffit de contacter
                    nous. Nous sommes là pour vous aider.
                  </p>
                  <div className="flex pb-4 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-phone-call"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                    </div>
                    <p className="pl-4 text-white text-base">
                      +1 (514)4300215
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FFFFFF"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={3} y={5} width={18} height={14} rx={2} />
                        <polyline points="3 7 12 13 21 7" />
                      </svg>
                    </div>
                    <p className="pl-4 text-white text-base">
                      tzzo@gmail.com
                    </p>
                  </div>
                  <p className="text-lg text-white pt-10 tracking-wide">
                    Adresse: 565 81e Avenue  <br></br>
                    H7V 3M3 Laval , Québec
                  </p>
                </div>
              </div>
              <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                <form
                  id="contact"
                  className="bg-white py-4 px-8 rounded-tr rounded-br"
                  onSubmit={handleSubmit}
                >
                  <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                    Entrez les détails
                  </h1>
                  <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                    <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                      <div className="flex flex-col">
                        <label
                          htmlFor="full_name"
                          className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                        >
                          Nom et prénom
                        </label>
                        <input
                          required
                          id="full_name"
                          name="full_name"
                          type="text"
                          className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                          value={contactData.names}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setContactData({ ...contactData, names: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                      <div className="flex flex-col">
                        <label
                          htmlFor="email"
                          className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                        >
                          E-mail
                        </label>
                        <input
                          required
                          id="email"
                          name="email"
                          type="email"
                          className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setContactData({ ...contactData, email: e.target.value })
                          }
                          value={contactData.email}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap">
                    <div className="w-2/4 max-w-xs">
                      <div className="flex flex-col">
                        <label
                          htmlFor="phone"
                          className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          required
                          id="phone"
                          name="phone"
                          type="text"
                          className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setContactData({ ...contactData, telephone: e.target.value })
                          }
                          value={contactData.telephone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-6">
                    <div className="flex flex-col">
                      <label
                        className="text-sm font-semibold text-gray-800 mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        required

                        name="message"
                        className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                        rows={8}
                        id="message"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          setContactData({ ...contactData, message: e.target.value })
                        }
                        value={contactData.message}
                      />
                    </div>
                    <button
                      disabled={contactLoading}
                      type="submit"
                      className={`focus:outline-none ${contactLoading ? "bg-slate-500 cursor-not-allowed" : "bg-secondary-blue/80 hover:bg-primary-blue"} transition duration-150 ease-in-out  rounded text-white px-8 py-3 text-sm leading-6`}
                    >
                      {contactLoading ?
                        <BiLoaderAlt className="animate-spin w-10 text-white" size={25} />
                        :
                        "Soumettre"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      <Footer />
    </div>
  )
}

export default Contact
