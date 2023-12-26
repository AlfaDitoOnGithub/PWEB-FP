import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";
import Footer from 'src/app/footer/footer';

export default async function WomenAllProducts() {
  const getAllProducts = await productByCategory("women");

  return(
    <div>
      <CommonListing data={getAllProducts && getAllProducts.data} />
      <Footer />
    </div>
  );
}
