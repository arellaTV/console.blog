import moment from 'moment';
import './styles.sass';

const PostListEntry = props => {
  const item = props.item;
  let sourceUrl = '/static/asset_fallback.svg';
  if (item.post.featuredImage) {
    sourceUrl = item.post.featuredImage.sourceUrl;
    let mediumImage = item.post.featuredImage.mediaDetails.sizes.filter(size => size.name === 'medium')[0];
    if (mediumImage) sourceUrl = `http://localhost:8000/wp-content/uploads/${mediumImage.sourceUrl}`
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
      <a href={`${item.post.categories.items[0].category.slug}/${item.post.slug}`}>
        <figure className="card__figure">
          <img src={sourceUrl} />
        </figure>
      </a>
      <div className="card__content">
        <div className="card__category">{category}</div>
        <a className="card__headline" href={`${item.post.categories.items[0].category.slug}/${item.post.slug}`}>
          <h2>{item.post.title}</h2>
        </a>
        <div className="card__date">{pubDate}</div>
        <div className="card__excerpt" dangerouslySetInnerHTML={{ __html: item.post.excerpt }} />
      </div>
    </div>
  )
}

export default PostListEntry;
