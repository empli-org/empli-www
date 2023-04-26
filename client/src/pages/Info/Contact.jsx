// @ts-nocheck
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import mail from '@/assets/Contact/mail.svg'
import phone from '@/assets/Contact/phone.svg'
import ig from '@/assets/Contact/ig.svg'
import fb from '@/assets/Contact/fb.svg'
import lk from '@/assets/Contact/lk.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  //sweetalert
  const MySwal = withReactContent(Swal)

  //Validado de los diferentes campos y sus requerimientos
  const schema = yup.object({
    user_name: yup.string().required('Ingrese nombre'),
    user_email: yup
      .string()
      .required('Ingrese email')
      .matches(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        'Ingrese un mail valido',
      ),
    user_asunto: yup.string().required('Ingrese asunto'),
    category: yup.string().required('Ingrese categoria'),
    message: yup.string().required('Ingrese descripcion'),
  })

  //Controlador del formulario
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const form = useRef()

  //formData para enviar los datos del formulario y formRef para obtener la referencia del formulario
  const sendFormData = (formData, formRef) => {
    // eslint-disable-next-line import/no-named-as-default-member
    emailjs
      .sendForm(
        'service_kbbovze',
        'template_xacnqka',
        formRef.current,
        'NSBq0dEL_bYCIyvJs',
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
  }

  const onSubmit = data => {
    sendFormData(data, form)
    MySwal.fire('Listo!', 'Ya te contactaremos via email', 'success')
    document.getElementById('form').reset()
  }

  return (
    <div className="w-screen">
      <div className="h-50 flex items-center justify-center bg-contact-img bg-cover p-2">
        <h1 className="font-amenable sm:text-6xl text-5xl font-bold text-blue-font">
          Contáctenos
        </h1>
      </div>
      <div
        className="flex flex-wrap h-56 w-full items-center justify-around"
        data-aos="flip-up"
      >
        <a href="mailto:santykpo11@gmail.com" className="hover:scale-110">
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <img src={mail} alt="mail" className="md:h-14 sm:h-10 h-7" />
            <p className="font-quicksand-light font-bold lg:text-xl">
              gerencia@empli.com
            </p>
          </div>
        </a>
        <a href="tel:+51970649294" className="hover:scale-110">
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <img src={phone} alt="phone" className="md:h-14 sm:h-10 h-7" />
            <p className="font-quicksand-light font-bold lg:text-xl">
              970649294
            </p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/empli_org/"
          target="_blank"
          className="hover:scale-110"
          rel="noreferrer"
        >
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <img src={ig} alt="ig" className="md:h-14 sm:h-12 h-7" />
            <p className="font-quicksand-light font-bold lg:text-xl">
              Instagram
            </p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/empli/"
          target="_blank"
          className="hover:scale-110"
          rel="noreferrer"
        >
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <img src={lk} alt="lk" className="md:h-14 sm:h-10 h-7" />
            <p className="font-quicksand-light font-bold lg:text-xl">
              Linkedin
            </p>
          </div>
        </a>
        <a
          href="https://www.facebook.com/Empli.org"
          target="_blank"
          className="hover:scale-110"
          rel="noreferrer"
        >
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <img src={fb} alt="fb" className="md:h-14 sm:h-10 h-7" />
            <p className="font-quicksand-light font-bold lg:text-xl">
              Facebook
            </p>
          </div>
        </a>
      </div>
      <h1
        className="text-center font-amenable lg:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold text-blue-font"
        data-aos="zoom-in"
      >
        Formulario de contacto
      </h1>
      <form
        ref={form}
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        className="lg:px-32 sm:px-20 p-5"
        noValidate="noValidate"
      >
        <div
          className="flex flex-col w-full items-center justify-center bg-white-font shadow-lg shadow-gray-900 p-10 rounded-3xl"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex flex-col items-center h-full w-full">
              <div className="w-full md:w-3/5">
                <label
                  htmlFor="name"
                  className="block font-quicksand-light text-lg font-semibold"
                >
                  Nombre Completo
                </label>
              </div>
              <input
                type="text"
                name="user_name"
                id="name"
                className="block w-full md:w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                {...register('user_name')}
              />
              {errors.user_name?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="w-auto text-red-600">
                  {errors.user_name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-center h-full w-full">
              <div className="w-full md:w-3/5">
                <label
                  htmlFor="asunto"
                  className="block font-quicksand-light text-lg font-semibold"
                >
                  Asunto
                </label>
              </div>
              <input
                type="text"
                name="user_asunto"
                id="asunto"
                className="block w-full md:w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                {...register('user_asunto')}
              />
              {errors.user_asunto?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="w-auto text-red-600">
                  {errors.user_asunto.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex flex-col items-center h-full w-full">
              <div className="w-full md:w-3/5">
                <label
                  htmlFor="email"
                  className="block font-quicksand-light text-lg font-semibold"
                >
                  Email
                </label>
              </div>
              <input
                type="email"
                name="user_email"
                id="email"
                className="w-full md:w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                {...register('user_email')}
                required
              />
              {errors.user_email?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="w-auto text-red-600">
                  {errors.user_email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-center h-full w-full">
              <div className="w-full md:w-3/5">
                <label
                  htmlFor="category"
                  className="block font-quicksand-light text-lg font-semibold"
                >
                  Categoría
                </label>
              </div>
              <input
                type="text"
                name="category"
                id="category"
                className="w-full md:w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                {...register('category')}
              />
              {errors.category?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="w-auto text-red-600">{errors.category.message}</p>
              )}
            </div>
          </div>
          <label
            htmlFor="description"
            className="flex items-start justify-start font-quicksand-light text-lg font-semibold"
          >
            Descripción
          </label>
          <textarea
            // @ts-ignore
            // cols="100"
            // @ts-ignore
            // rows="5"
            name="message"
            id="message"
            className="resize-none rounded-lg border-2 border-black p-1 lg:w-4/5 md:w-3/5 w-full h-60"
            {...register('message')}
          />
          {errors.message?.message && (
            // eslint-disable-next-line prettier/prettier
            <p className="w-auto text-red-600">{errors.message.message}</p>
          )}
          <button
            type="submit"
            className="mt-8 h-12 w-2/6 rounded-xl bg-blue-font text-white-font shadow-lg shadow-gray-900"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
