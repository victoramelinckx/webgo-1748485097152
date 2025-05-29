
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Digitales Exitosas, ¡Sin Anuncios!" subheadline="Curso de 3 semanas que digitaliza tu negocio en tiempo récord, generando ventas en redes sociales sin la necesidad de anuncios pagados." cta1="¡Empieza Hoy!" />
<How step1Title="Adquiere el curso" step1Desc="Compra el Curso de Ventas Express online." step2Title="Aprende y aplica" step2Desc="Aprende a vender en redes sociales en 3 semanas." step3Title="Digitaliza tu negocio" step3Desc="Deja de depender solo de las recomendaciones." />
<Aboutus headline="WebGo: Digitaliza tus ventas hoy" subheadline="WebGo ofrece soluciones de venta online personalizadas, transformando negocios físicos en gigantes digitales." beneficiotitulo1="Ventas Express" beneficio1="Curso intensivo para dominar ventas en redes sociales." beneficiotitulo2="Ahorra Tiempo" beneficio2="Deja la gestión de tu web en nuestras manos." />
<Services heading="Digitaliza tus Ventas y Multiplica Tus Ganancias" description="Con nuestro Curso de Ventas Express, aprenderás a vender en redes sociales sin necesidad de anuncios pagados. Ideal para aquellos que no tienen tiempo para gestionar un sitio web." services={[{"name":"Curso de Ventas Express","icon":"book","description":"Aprende a vender en redes sociales"},{"name":"Soporte 24/7","icon":"clock","description":"Siempre disponibles para ayudarte"},{"name":"Entrega rápida","icon":"rocket","description":"Web de ventas lista en menos de 24h"},{"name":"Optimización SEO","icon":"search","description":"Atrae clientes de forma orgánica"},{"name":"Gestión de Redes Sociales","icon":"users","description":"Conecta con tus clientes en línea"},{"name":"Asesoría de Negocios","icon":"briefcase","description":"Asesoramos el crecimiento de tu negocio"}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidad web, con resultados que impresionan." />
<Faq faqs={[{"pregunta":"¿Cómo puede el Curso de Ventas Express de WebGo ayudarme a digitalizar mi negocio?","respuesta":"Nuestro Curso de Ventas Express está diseñado específicamente para dueños de pequeños negocios como tú, que buscan llevar sus ventas al espacio digital. Con el curso, aprenderás a vender en redes sociales sin la necesidad de anuncios pagados, una forma eficiente y rentable de expandir tu negocio."},{"pregunta":"¿Qué tan complicado es el contenido del curso? No tengo experiencia en ventas online.","respuesta":"El Curso de Ventas Express de WebGo se ha desarrollado pensando en los propietarios de pequeñas empresas sin experiencia en ventas online. El contenido está estructurado de manera clara y sencilla para que su comprensión sea rápida y efectiva. No necesitas ser un experto en tecnología para sacarle provecho."},{"pregunta":"¿Necesito invertir mucho tiempo en el manejo de un sitio web después de tomar el curso?","respuesta":"No, una de las ventajas de nuestro Curso de Ventas Express es que te enseñará a optimizar tu tiempo. Aprenderás a generar ventas a través de las redes sociales, lo cual es menos complejo y demandante que gestionar un sitio web completo por tu cuenta."},{"pregunta":"¿El coste del curso vale la pena? ¿Qué retorno de la inversión puedo esperar?","respuesta":"Definitivamente, la inversión en el Curso de Ventas Express se reflejará en tus ventas. Al aprender a vender de manera efectiva en redes sociales, estarás abriendo un nuevo canal de ingresos para tu negocio. Aunque el ROI varía dependiendo del tipo de negocio, nuestros clientes han reportado un incremento notable en sus ventas."},{"pregunta":"¿El Curso de Ventas Express me enseñará a atraer nuevos clientes o solo se centra en ventas?","respuesta":"El Curso de Ventas Express de WebGo no solo te enseña a vender online, sino que también te proporciona las herramientas para atraer y retener a nuevos clientes. Aprenderás técnicas de marketing digital para aumentar tu visibilidad y atraer a tu público objetivo."}]} />
<BookAppointment 
                      heading="Transforma tu negocio, domina las ventas online" 
                      description="Invierte en nuestro Curso de Ventas Express y aprende a generar ventas en línea sin la necesidad de anuncios pagados. Lleva tu negocio a otro nivel."
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="vuxkRTDOFSfWhLEkp7EZZT19z4I3"
                    />
<Footer />
    </main>
  );
}
