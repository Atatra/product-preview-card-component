import Image from "next/image";
import cartIcon from "../../public/images/icon-cart.svg";

export default function Home() {
  return (
    <main className="mx-[5%] my-[3%] flex min-h-screen sm:my-0 sm:justify-center">
      <article className="flex flex-col self-center overflow-hidden rounded-b-xl rounded-t-xl bg-white sm:h-[500px] sm:w-[650px] sm:flex-row sm:rounded-l-xl">
        <picture className="sm:max-w-[50%]">
          <source
            media="(min-width: 640px)"
            srcSet="/images/image-product-desktop.jpg"
          ></source>
          <img
            src="/images/image-product-mobile.jpg"
            alt="Gabrielle Essence Eau de Parfum"
            className="h-auto w-full rounded-t-xl sm:h-full sm:rounded-l-xl sm:rounded-tr-none sm:object-cover"
          />
        </picture>

        <section className="my-4 flex flex-col p-4 sm:max-w-[50%] sm:px-[2rem] sm:pt-[2rem]">
          <legend className="mb-3 font-montserrat text-xs tracking-[0.25rem] sm:mb-5">
            PERFUME
          </legend>

          <h1 className="mb-4 mt-1 font-fraunces text-3xl font-bold sm:mb-6 sm:text-[2.4rem] sm:leading-9">
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="text-md mb-6 font-montserrat">
            A floral, solar, and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the house of CHANEL.
          </p>

          <span className="mb-3 flex items-center sm:mb-6">
            <strong className="font-fraunces text-3xl text-dark-cyan">
              <abbr>$</abbr>149.99
            </strong>
            <s className="pl-5 text-sm">$169.99</s>
          </span>

          <button className="my-2 mb-1 flex items-center justify-center rounded-lg border-2 bg-dark-cyan py-3 text-center">
            <Image priority src={cartIcon} alt="Icon Add to Cart" />
            <span className="text-bold ml-2 text-white">Add to Cart</span>
          </button>
        </section>
      </article>
    </main>
  );
}
