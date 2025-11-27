import { readExcelFile, getCategoriesFromExcel } from "../../utils/excel";
import CategoryClient from "../../_components/CategoryClient";

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  
  let excelData = [];
  let categories = [];

  try {
    excelData = await readExcelFile();
    categories = await getCategoriesFromExcel();
  } catch (error) {
    console.error("Excel Read Error:", error);
  }


  // Find the category by slug
  const category = categories.find(
    (cat) => cat.slug === slug
  );
  

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Category not found</h1>
      </div>
    );
  }

  // Filter products by category
  const categoryProducts = excelData.filter(
    (product) => product.category?.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <CategoryClient
      category={category}
      products={categoryProducts}
      allProducts={excelData}
    />
  );
}

export async function generateStaticParams() {
  const categories = await getCategoriesFromExcel();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}
