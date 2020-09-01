import React from "react";
import { Card, Col, Row, CardImg } from "reactstrap";

const BlogBody = ({ image, image1, image3, image5, image6, isMobile }) => {
  let drawerClasses = "blog-body-container mt-1";
  if (!isMobile) {
    drawerClasses = "blog-body-container-mobile mt-1";
  }

  return (
    <div className={drawerClasses}>
      <Col className="mb-4 mt-4" align="center">
        <h1>
          <b>Ethiopian Traditional Dress (የሃበሻ ቀሚስ)</b>
        </h1>
      </Col>
      <img src={image6} alt="" />
      <div className="body mt-5">
        <p>
          Africa is a complex continent. Granted there are shared similarities
          amongst its citizens, each country has its own blend of cultural and
          lingual framework. On FashionGHANA, we have mainly looked into style
          from Ghana and Nigeria, and at times Ethiopia and South Africa, but
          don’t underestimate the trends and fashion being executed in other
          regions.
        </p>{" "}
        <p>
          Take for example, Ethiopia. It has over 80 ethnic groups with their
          own cultures, customs, dialects, lifestyles, and traditions. Enough to
          give birth to a whole new generation of style influencers. The country
          may have a variety of textile products to choose from, but there are
          few notable pieces that are ubiquitous. One such piece being our very
          loved Habesha Kemis, mainly because it feels like African print on
          white fabrics. It’s considered the traditional dress of Ethiopia, as
          well as, a cultural dress in Eritrea.
        </p>
        <p>
          {" "}
          The Habesha Kemis is a white hand-woven cotton clothing that is made
          from shemma by traditional weavers known as Shemane. This is a cloth
          made by sewing together long strips of woven fabric. And although the
          colour segments are seem as print, they are actually hand-made
          patterns known as Tibeb, made using woven shiny threads and are added
          to the Kemis on the waistband and edges.
        </p>{" "}
        <p>
          However, the way the Kemis is presented can differ by community and
          ethnicity. The Shewa version can choose to place the embroidery on the
          bottom, cuffs or waist of the dress. Sometimes, it will feature on all
          three places. On the other hand, the Gondar version positions the
          embroidery on the bottom hem, only at the back of the dress.
        </p>{" "}
        <p>
          Traditionally, the Kemis is ankle-length and uses a white shemma.
          Nevertheless, there is a more and more increase of modernised versions
          which have adopted different structures and styles. For instance,
          designers have been working with dyed versions of the shemma and
          utilizing modern dress silhouettes.
        </p>
        <p>
          {" "}
          For now, check out some lovely pieces below culled from the creators
          instagram pages. To get your hands on some of these beautiful Habesha
          Kemis follow their pages.
        </p>{" "}
        <p>
          Take for example, Ethiopia. It has over 80 ethnic groups with their
          own cultures, customs, dialects, lifestyles, and traditions. Enough to
          give birth to a whole new generation of style influencers. The country
          may have a variety of textile products to choose from, but there are
          few notable pieces that are ubiquitous. One such piece being our very
          loved Habesha Kemis, mainly because it feels like African print on
          white fabrics. It’s considered the traditional dress of Ethiopia, as
          well as, a cultural dress in Eritrea.
        </p>
        <p>
          {" "}
          The Habesha Kemis is a white hand-woven cotton clothing that is made
          from shemma by traditional weavers known as Shemane. This is a cloth
          made by sewing together long strips of woven fabric. And although the
          colour segments are seem as print, they are actually hand-made
          patterns known as Tibeb, made using woven shiny threads and are added
          to the Kemis on the waistband and edges.
        </p>{" "}
        <p>
          However, the way the Kemis is presented can differ by community and
          ethnicity. The Shewa version can choose to place the embroidery on the
          bottom, cuffs or waist of the dress. Sometimes, it will feature on all
          three places. On the other hand, the Gondar version positions the
          embroidery on the bottom hem, only at the back of the dress.
        </p>{" "}
        For now, check out some lovely pieces below culled from the creators
        instagram pages. To get your hands on some of these beautiful Habesha
        Kemis follow their pages.
        <p>
          Take for example, Ethiopia. It has over 80 ethnic groups with their
          own cultures, customs, dialects, lifestyles, and traditions. Enough to
          give birth to a whole new generation of style influencers. The country
          may have a variety of textile products to choose from, but there are
          few notable pieces that are ubiquitous. One such piece being our very
          loved Habesha Kemis, mainly because it feels like African print on
          white fabrics. It’s considered the traditional dress of Ethiopia, as
          well as, a cultural dress in Eritrea.
        </p>
        <p>
          {" "}
          The Habesha Kemis is a white hand-woven cotton clothing that is made
          from shemma by traditional weavers known as Shemane. This is a cloth
          made by sewing together long strips of woven fabric. And although the
          colour segments are seem as print, they are actually hand-made
          patterns known as Tibeb, made using woven shiny threads and are added
          to the Kemis on the waistband and edges.
        </p>{" "}
        <p>
          However, the way the Kemis is presented can differ by community and
          ethnicity. The Shewa version can choose to place the embroidery on the
          bottom, cuffs or waist of the dress. Sometimes, it will feature on all
          three places. On the other hand, the Gondar version positions the
          embroidery on the bottom hem, only at the back of the dress.
        </p>{" "}
      </div>
      <hr />
      <div className="images mt-5">
        <Row>
          <Col sm={12} md={3} className="mb-3">
            <Card>
              <CardImg src={image1} />
            </Card>
          </Col>
          <Col sm={12} md={3} className="mb-3">
            <Card>
              <CardImg src={image3} />
            </Card>
          </Col>
          <Col sm={12} md={3} className="mb-3">
            <Card>
              <CardImg src={image5} />
            </Card>
          </Col>{" "}
          <Col sm={12} md={3} className="mb-3">
            <Card>
              <CardImg src={image6} />
            </Card>
          </Col>{" "}
        </Row>
      </div>
    </div>
  );
};

export default BlogBody;
