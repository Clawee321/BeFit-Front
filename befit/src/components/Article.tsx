import { ImageParamsResult } from 'next/dist/server/image-optimizer';
import React from 'react';

// Definicja interfejsu dla propsów
interface ArticleProps {
  title: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, content }) => {
    return (
        <article>
            <h1>{title}</h1>
            <div>{content}</div>
        </article>
    );
};

export default Article;
