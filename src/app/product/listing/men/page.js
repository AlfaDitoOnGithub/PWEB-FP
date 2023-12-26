import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";
import Footer from 'src/app/footer/footer';

export default async function MenAllProducts() {
  const getAllProducts = await productByCategory("men");

  return(
    <div>
      <CommonListing data={getAllProducts && getAllProducts.data} />
      <Footer />
    </div>
  );
}
