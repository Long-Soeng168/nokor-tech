import MyProductList from "@/components/my-product-list";
import MyProductListHeader from "@/components/my-product-list-header";
import Products from "@/components/my-products";
import MyService from "@/components/my-service";
import MySlide from "@/components/my-slide";
import MyProductListCategories from "@/components/my-product-list-categories";
import MyProductListBrands from "@/components/my-product-list-brands";
import MyBrandList from "@/components/my-brand-list";
import MyBlogList from "@/components/my-blogs-list";
import MyMiddleSlide from "@/components/my-middle-slide";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mb-10">
        {/* start slide */}
        <MySlide
          images={[
            "/images/slides/slide1.png",
            "/images/slides/slide2.png",
            "/images/slides/slide3.png",
          ]}
        />
        {/* end slide */}

        <MyProductListHeader title="New Arrivals" />
        <MyProductList />

        <MyMiddleSlide
          images={[
            "/images/slides/slide7.png",
            "/images/slides/slide5.png",
            "/images/slides/slide8.png",
            "/images/slides/slide6.png",
          ]}
        />

        <MyProductListCategories />
        <MyProductListBrands />

        <MyBrandList />
        <MyBlogList />
      </div>
      <MyService />
    </>
  );
}
