import React from "react";
import { CategoryItemStyles } from "../../styles/category/CategoryItemStyles";
import { Title } from "../typography/Title";
import Button from "../buttons/Button";
import { buttonType } from "../../constants/buttonTypes";
import MyPortableText from "../MyPortableText";

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="text">{title}</Title>
      <div className="text">
        <MyPortableText value={description}
        ></MyPortableText>
      </div>
      <Button to={`/categories/${slug.current}`} variant={buttonType.outline}>
        Explore Category
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
