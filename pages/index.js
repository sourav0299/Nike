import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <Banner />
      <Wrapper>
        <div 
        className="text-center max-w-[800px] mx-auto my-[50px] 
        md:my-[80px]"
        >
          <div 
          className="text-[28px] md:text-[34px] mb-5 font-semibold 
          leading-tight">
            A SPRINGY RIDE FOR EVERY RUN
          </div>
          <div className="text-md md:text-xl">
            Back in its fourth decade, the Pegasus 40 is springier than ever with a more cushioned, personalized fit.
          </div>
          <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-5 my-14 px-5 md:px-0"
          >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}
