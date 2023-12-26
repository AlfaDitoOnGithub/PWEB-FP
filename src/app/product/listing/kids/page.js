import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";
import Footer from 'src/app/footer/footer';
import styles from './kids.css';

export default async function KidsAllProducts() {
  const getAllProducts = await productByCategory("kids");

  return(
    <div className={styles.pageContainer}>
      <CommonListing data={getAllProducts && getAllProducts.data} />
      <Footer />
    </div>
  );
}
