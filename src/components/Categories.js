import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`

//distinct fields acts like New set() => returns unique values
const Categories = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query)
  return (
    <ul className="categories">
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className="category">
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories