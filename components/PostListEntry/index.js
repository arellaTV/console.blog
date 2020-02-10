import Link from 'next/link';
import moment from 'moment';
import './styles.sass';

const PostListEntry = props => {
  const item = props.item;
  let sourceUrl = '/static/asset_fallback.svg';
  if (item.post.featuredImage) {
    sourceUrl = item.post.featuredImage.sourceUrl;
    let mediumImage = item.post.featuredImage.mediaDetails.sizes.filter(size => size.name === 'medium')[0];
    if (mediumImage) sourceUrl = mediumImage.sourceUrl;
  }

  // Get the relative or absolute date based off of how recent it is
  let pubDate;
  let dateDifference = moment().diff(item.post.date, 'days');
  if (dateDifference > 1) {
    pubDate = moment(item.post.date).format('MMMM Do YYYY');
  } else {
    pubDate = moment(item.post.date).fromNow();
  }

  const category = item.post.categories.items[0].category.name;

  return (
    <div className="card">
      <Link
        href={`/post?postSlug=${item.post.slug}`}
        as={`${item.post.categories.items[0].category.slug}/${item.post.slug}`}
      >
        <a>
          <figure className="card__figure">
            <img src={sourceUrl} />
          </figure>
        </a>
      </Link>
      <div className="card__content">
        <div className="card__category">
          <Link
            href={`/category?categorySlug=${item.post.categories.items[0].category.slug}`}
            as={`${item.post.categories.items[0].category.slug}`}
          >
            <a>
              {category}
            </a>
          </Link>
        </div>
        <Link
          href={`/post?postSlug=${item.post.slug}`}
          as={`${item.post.categories.items[0].category.slug}/${item.post.slug}`}
        >
          <a className="card__headline">
            <h2>{item.post.title}</h2>
          </a>
        </Link>
        <div className="card__date">{pubDate}</div>
        <div className="card__excerpt" dangerouslySetInnerHTML={{ __html: item.post.excerpt }} />
      </div>
    </div>
  )
}

export default PostListEntry;
