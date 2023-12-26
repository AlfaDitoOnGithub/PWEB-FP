import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";
import Footer from 'src/app/footer/footer';

export default async function AllProducts() {
  const getAllProducts = await getAllAdminProducts();

  return(
    <div>
      <CommonListing data={getAllProducts && getAllProducts.data} />;
      <Footer />
    </div>
  );
}
