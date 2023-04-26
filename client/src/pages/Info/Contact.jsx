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
        <h1 className="font-amenable text-6xl font-bold text-blue-font">
          Contáctenos
        </h1>
      </div>
      <div
        className="flex h-56 w-full items-center justify-evenly"
        data-aos="flip-up"
      >
        <a href="mailto:santykpo11@gmail.com" className="hover:scale-110">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={mail} alt="mail" className="h-14 w-14" />
            <p className="font-quicksand-light text-xl font-bold">
              gerencia@empli.com
            </p>
          </div>
        </a>
        <a href="tel:+51970649294" className="hover:scale-110">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={phone} alt="phone" className="h-14 w-14" />
            <p className="font-quicksand-light text-xl font-bold">
              970649294 / 985509343
            </p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/empli_org/"
          target="_blank"
          className="hover:scale-110"
          rel="noreferrer"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={ig} alt="ig" className="h-14 w-14" />
            <p className="font-quicksand-light text-xl font-bold">Instagram</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/empli/"
          target="_blank"
          className="hover:scale-110"
          rel="noreferrer"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={lk} alt="lk" className="h-14 w-14" />
            <p className="font-quicksand-light text-xl font-bold">Linkedin</p>
          </div>
        </a>
        <a
          href="https://www.facebook.com/Empli.org"
          target="_blank"
          className="hover:scale-110"
          rel="noreferrer"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={fb} alt="fb" className="h-14 w-14" />
            <p className="font-quicksand-light text-xl font-bold">Facebook</p>
          </div>
        </a>
      </div>
      <h1
        className="mb-negative text-center font-amenable text-5xl font-bold text-blue-font"
        data-aos="zoom-in"
      >
        Formulario de contacto
      </h1>
      <div
        className="flex h-contact w-screen items-center justify-center"
        data-aos="zoom-in"
      >
        <form
          ref={form}
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-7 flex h-full w-4/6 flex-col items-center justify-evenly gap-4 rounded-3xl bg-white-font p-14 shadow-lg shadow-gray-900"
          noValidate="noValidate"
        >
          <div className="ml-32 flex w-full">
            <div className="h-full w-full">
              <label
                htmlFor="name"
                className="block font-quicksand-light text-lg font-semibold"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="block w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                {...register('user_name')}
              />
              {errors.user_name?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="w-100 text-red-600">{errors.user_name.message}</p>
              )}
            </div>
            <div className="h-full w-full">
              <label
                htmlFor="asunto"
                className="block font-quicksand-light text-lg font-semibold"
              >
                Asunto
              </label>
              <input
                type="text"
                name="user_asunto"
                id="asunto"
                className="block w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                {...register('user_asunto')}
              />
              {errors.user_asunto?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="w-100 text-red-600">
                  {errors.user_asunto.message}
                </p>
              )}
            </div>
          </div>
          <div className="ml-32 flex w-full">
            <div className="h-full w-full">
              <label
                htmlFor="email"
                className="block font-quicksand-light text-lg font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                className="w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                {...register('user_email')}
                required
              />
              {errors.user_email?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="w-100 text-red-600">
                  {errors.user_email.message}
                </p>
              )}
            </div>
            <div className="h-full w-full">
              <label
                htmlFor="category"
                className="block font-quicksand-light text-lg font-semibold"
              >
                Categoría
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="w-3/5 rounded-lg border-2 border-black p-1 focus:border-gray-900 focus:outline-none focus:ring"
                {...register('category')}
              />
              {errors.category?.message && (
                // eslint-disable-next-line prettier/prettier
                <p className="w-100 text-red-600">{errors.category.message}</p>
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
            cols="100"
            // @ts-ignore
            rows="5"
            name="message"
            id="message"
            className="resize-none rounded-lg border-2 border-black p-1"
            {...register('message')}
          />
          {errors.message?.message && (
            // eslint-disable-next-line prettier/prettier
            <p className="w-100 text-red-600">{errors.message.message}</p>
          )}
          <button
            type="submit"
            className="mt-8 h-12 w-2/6 rounded-xl bg-blue-font text-white-font shadow-lg shadow-gray-900"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
