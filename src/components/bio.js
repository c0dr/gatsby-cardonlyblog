/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/payment.jpg/" }) {
        childImageSharp {
            fluid(maxHeight: 700, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }        
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5)
      }}
    >
      <Image
        fluid={data.avatar.childImageSharp.fluid}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          maxWidth: '300px',
          maxHeight: '150px',
          minWidth: '100px',
        }}
      />
      <p>
        Bei <a href="https://cardonly.de">CardOnly.de</a> dreht sich alles um Kartenzahlung und Banking - in
        unserem <a href="https://cardonly.de">Vergleich </a> findet ihr eure beste Karte, im Blog alle aktuellen
        News.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>Kurzmeldungen auch bei Twitter</a>
      </p>
    </div>
  )
}

export default Bio
