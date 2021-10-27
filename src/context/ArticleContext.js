import React, { useState } from 'react';

const ArticleContext = React.createContext();

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    {
      id: Math.floor(Math.random() * 99999),
      title:
        '"Bomba atomowa" premiera: blokada Green Dealu. Tak wygląda wojna o pokój z Unią',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati',
      imageUrl:
        'http://v.wpimg.pl/Mzk0NTY3YhsKUjhndkhvDkkKbD0wEWFYHhJ0dnZ8YktZAH4sYQN9VQ1ZIjErVj0VRVc8ISlSOgpFQCJ7OEMkVR0BYTAwQD0WCklhMTRRKB5EUnYwawN7GAkdKmxhAmBOCgcseWEEeEtGCC9laAcoTgoBLWZgETA',
      comments: [
        {
          id: Math.floor(Math.random() * 99999),
          author: 'Bob',
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
          rating: {
            positive: 150,
            negative: 10,
          },
        },
        {
          id: Math.floor(Math.random() * 99999),
          author: 'Bob',
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
          rating: {
            positive: 15,
            negative: 3,
          },
        },
        {
          id: Math.floor(Math.random() * 99999),
          author: 'Bob',
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
          rating: {
            positive: 20,
            negative: 45,
          },
        },
      ],
    },
    {
      id: Math.floor(Math.random() * 99999),
      title: 'Nowe informacje z prokuratury po potężnym nokaucie na PunchDown',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati',
      imageUrl:
        'http://v.wpimg.pl/ODI1MDQuYCUoUzt3fg5tMGsLby04V2NmPBN3Zn5EfXR5SXtzZFo8ImRQKSk4GyY3PUMsJzsUYTM5UikqfwUjazpFIjYwEip2ZlcoJSUAPSEtbiI2OBImKihdYnJgQnpyKlR7d2hGeSB4bn91YU19cXkFYy4hEm05',
      comments: [
        {
          id: Math.floor(Math.random() * 99999),
          author: 'Bob',
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
          rating: {
            positive: 150,
            negative: 10,
          },
        },
        {
          id: Math.floor(Math.random() * 99999),
          author: 'Bob',
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
          rating: {
            positive: 15,
            negative: 3,
          },
        },
        {
          id: Math.floor(Math.random() * 99999),
          author: 'Bob',
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
          rating: {
            positive: 20,
            negative: 45,
          },
        },
      ],
    },
  ]);

  return (
    <ArticleContext.Provider value={{ data: articles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
