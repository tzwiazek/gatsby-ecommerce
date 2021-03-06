import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/layout/layout';
import CategoryTitle from 'src/components/categories/category-title/category-title';
import Seo from 'src/components/seo';
import { CartInterface } from 'src/shared/interfaces/components/cart.interface';
import {
  CategoryContainer,
  ProductsWrapper,
  CollectionTitle,
  ProductsContainer
} from './category-page.styles';
import Product from 'src/components/products/product/product';

export default function CategoryPage({
  data: { category }
}: {
  data: { category: any };
}): JSX.Element {
  const { products } = category;

  return (
    <Layout>
      <Seo title={`All ${category.name} SEO title`} />

      <CategoryContainer>
        <CategoryTitle
          title={category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          description={category.description}></CategoryTitle>

        <ProductsWrapper>
          <CollectionTitle>Lorem ipsum</CollectionTitle>
          <ProductsContainer>
            {products.map((product: CartInterface) => {
              return <Product product={product} key={product.name}></Product>;
            })}
          </ProductsContainer>
        </ProductsWrapper>
      </CategoryContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query CategoryPageQuery($id: String!) {
    category: checCategory(id: { eq: $id }) {
      id
      name
      slug
      description
      products {
        images {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, quality: 90, formats: WEBP)
          }
          name
        }
        name
        permalink
        price {
          formatted
        }
        variant_groups {
          name
          options {
            name
          }
        }
        id
      }
    }
  }
`;
